package com.apps.sloth.sportbuddy

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.design.widget.Snackbar
import android.util.Log
import android.view.View
import android.widget.Toast
import com.facebook.AccessToken
import com.facebook.CallbackManager
import com.facebook.FacebookCallback
import com.facebook.FacebookException
import com.facebook.login.LoginResult
import com.google.android.gms.tasks.OnCompleteListener
import com.google.firebase.auth.AuthResult
import com.google.firebase.auth.FacebookAuthProvider
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : AppCompatActivity() {
    private var mAuth = FirebaseAuth.getInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        login_button.setOnClickListener{view ->
            signInWithEmail(view, email_input.text.toString(), password_input.text.toString())
        }
        signup_button.setOnClickListener{view ->
            signUpWithEmail(view, email_input.text.toString(), password_input.text.toString())
        }
    }

    override fun onStart() {
        super.onStart()
        if(mAuth.currentUser != null) {
            Log.d("LOGIN", "Already logged in")
            onLoggedIn()
        }
    }
    fun onLoggedIn() {
        val intent= Intent(this, MainActivity::class.java)
        startActivity(intent)
    }
    fun signInWithEmail(view: View, email: String, password: String) {
        showMessage(view, "Authenticating")

        mAuth.signInWithEmailAndPassword(email, password).addOnCompleteListener(
                this, { task ->
            if (task.isSuccessful) {
                Log.d("LOGIN", "Login successful")
                onLoggedIn()
            }
            else {
                showMessage(view, "Error: ${task.exception?.message}")
            }
        })
    }

    fun signUpWithEmail(view: View, email: String, password: String) {
        showMessage(view, "Creating account")

        mAuth.createUserWithEmailAndPassword(email, password).addOnCompleteListener(
                this, { task ->
            if (task.isSuccessful) {
                Log.d("LOGIN", "Sign up successful")
                onLoggedIn()
            }
            else {
                showMessage(view, "Error: ${task.exception?.message}")
                signInWithEmail(view, email, password)
            }
        })
    }


    fun showMessage(view: View, msg: String) {
        Snackbar.make(view, msg, Snackbar.LENGTH_INDEFINITE)
                .setAction("Action", null).show()
    }

}

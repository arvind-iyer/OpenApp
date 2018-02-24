package com.apps.sloth.sportbuddy

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private val mAuth = FirebaseAuth.getInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        Log.d("MAIN", "Entered the walled garden")
        val user = mAuth.currentUser

        Log.d("User", user?.email.toString())
        userinfo_text.setText("${user?.email.toString()}")


    }
    fun logOut(view: View) {
        Log.d("MAIN", "Try to log out here")
        mAuth.signOut()
        finishAndRemoveTask()
    }

    fun goHome(view: View) {
        val intent = Intent(this, Home::class.java)
        startActivity(intent)
    }
}

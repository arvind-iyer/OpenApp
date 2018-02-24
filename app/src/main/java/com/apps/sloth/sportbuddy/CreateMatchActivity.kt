package com.apps.sloth.sportbuddy

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.apps.sloth.sportbuddy.listx.Match
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.database.FirebaseDatabase
import kotlinx.android.synthetic.main.activity_create_match.*

class CreateMatchActivity : AppCompatActivity() {
    private val currentUser = FirebaseAuth.getInstance().currentUser as FirebaseUser
    private val matchesDB = FirebaseDatabase.getInstance().getReference().child("matches")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_match)
    }

    fun createMatch(view : View) {
        val thisMatch = Match(sport=cm_sport.text.toString())
        thisMatch.host_id = currentUser.email
        thisMatch.id = matchesDB.push().key
        matchesDB.child(thisMatch.id).setValue(thisMatch)
        finish()
    }
}

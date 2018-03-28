package com.apps.sloth.sportbuddy

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import com.apps.sloth.sportbuddy.listx.Match
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import kotlinx.android.synthetic.main.content_mdetail_scrolling.*

class MatchDetailsActivity : AppCompatActivity() {
    private val dbRef = FirebaseDatabase.getInstance().getReference()
    private var thisMatch : Match? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_mdetail_scrolling)
        val match_id = intent.extras.getString("match_id")
        println("match_id: " + match_id)
        val matchRef = dbRef.child("matches").child(match_id)
        matchRef.addListenerForSingleValueEvent(object: ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot) {
                try {
                    thisMatch = snapshot.getValue(Match::class.java)
                } catch (e: Throwable) {
                    Log.e("onCreateError", e.toString())
                }
                md_host.text = md_host.text.toString() + ": " + thisMatch?.host_id
                val capacityText = thisMatch?.curr_capacity.toString() + "/" + thisMatch?.max_capacity.toString()
                md_capacity.setText(capacityText)
                val timeText = thisMatch?.hourOfDay.toString() + ":" + thisMatch?.minute.toString()
                md_time.setText(timeText)
            }

            override fun onCancelled(p0: DatabaseError?) {
                println("MDActi/onCancelled()")
            }
        })
    }
}

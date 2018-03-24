package com.apps.sloth.sportbuddy

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
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
        val match_id = savedInstanceState?.get("match_id").toString()
        val matchRef = dbRef.child("matches").child(match_id)
        matchRef.addValueEventListener(object: ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot?) {
                thisMatch = snapshot?.value as Match
                md_host.setText(thisMatch?.host_id.toString())
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

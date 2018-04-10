package com.apps.sloth.sportbuddy

import android.graphics.Color
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.view.View
import android.widget.Button
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
        md_playercount_plus.setOnClickListener(View.OnClickListener { view ->
            incrementCounter(view)
        })
        md_playercount_minus.setOnClickListener(View.OnClickListener { view ->
            decrementCounter(view)
        })
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
        md_skill_1.setOnClickListener({
            md_skill_2.setBackgroundColor(Color.GRAY)
            md_skill_3.setBackgroundColor(Color.GRAY)
        })

        md_skill_2.setOnClickListener({
            md_skill_1.setBackgroundColor(Color.GRAY)
            md_skill_3.setBackgroundColor(Color.GRAY)
        })

        md_skill_3.setOnClickListener({
            md_skill_1.setBackgroundColor(Color.GRAY)
            md_skill_2.setBackgroundColor(Color.GRAY)
        })
    }

    fun incrementCounter (view:View)
    {
        var currentCount = Integer.parseInt(md_countertext.text.toString())
        currentCount += 1
        if (currentCount > 22)
        {
            md_countertext.setText(22.toString())
        }
        else
        {
            md_countertext.setText(currentCount.toString())
        }

        println(currentCount)
    }
    fun decrementCounter (view:View)
    {
        var currentCount = Integer.parseInt(md_countertext.text.toString())
        currentCount -= 1
        if (currentCount < 0)
        {
            md_countertext.setText(0.toString())
        }
        else
        {
            md_countertext.setText(currentCount.toString())
        }
        println(currentCount)
    }

    fun joinGame(view: View) {
        val participantsRef = dbRef.child("matches").child(thisMatch?.id).child("participants")
        participantsRef.addValueEventListener(object: ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                val partis = object: GenericTypeIndicator<ArrayList<String>>() {}
                val joined : ArrayList<String>? = snapshot.getValue(partis)
                val currentUser = FirebaseAuth.getInstance().currentUser

                if(joined?.contains(currentUser?.uid) != true) {
                    joined?.add(currentUser?.uid!!)
                }
            }

            override fun onCancelled(p0: DatabaseError?) {

            }
        })
    }
}


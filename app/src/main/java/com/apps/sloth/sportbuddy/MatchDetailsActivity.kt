package com.apps.sloth.sportbuddy

import android.content.res.ColorStateList
import android.graphics.Color
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.view.Menu
import android.view.View
import android.widget.Toast
import com.apps.sloth.sportbuddy.listx.Match
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.*
import kotlinx.android.synthetic.main.content_mdetail_scrolling.*

class MatchDetailsActivity : AppCompatActivity() {
    private val dbRef = FirebaseDatabase.getInstance().getReference()
    private var thisMatch : Match? = null
    private var participantList = ArrayList<String>()
    private val currentUser = FirebaseAuth.getInstance().currentUser
    private var menu: Menu? = null

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
                thisMatch?.id = snapshot.key
                md_host.text = md_host.text.toString() + ": " + thisMatch?.host_id
                val capacityText = thisMatch?.curr_capacity.toString() + "/" + thisMatch?.max_capacity.toString()
                md_capacity.setText(capacityText)
                val timeText = thisMatch?.hourOfDay.toString() + ":" + thisMatch?.minute.toString()
                md_time.setText(timeText)


                if (snapshot.hasChild("participants")) {
                    val partis = object : GenericTypeIndicator<ArrayList<String>>() {}
                    participantList = snapshot.child("participants").getValue(partis)!!
                    if (participantList.contains(currentUser?.uid)
                            || thisMatch?.host_id.equals(currentUser?.uid)) {
                        Toast.makeText(applicationContext,
                                "You have already signed up for this match",
                                Toast.LENGTH_SHORT)
                                .show()
                        md_btn_join.isClickable = false
                        md_btn_join.isEnabled = false
                    }

                } else {
                    val list = ArrayList<String>()
                    list.add(currentUser?.uid!!)
                    matchRef.child("participants").setValue(list)
                }

            }

            override fun onCancelled(p0: DatabaseError?) {
                println("MDActi/onCancelled()")
            }
        })
        md_skill_1.setOnClickListener({
            md_skill_1.backgroundTintList = ColorStateList.valueOf(Color.parseColor("#008000"))
            md_skill_2.backgroundTintList = ColorStateList.valueOf(resources.getColor(R.color.material_grey_300))
            md_skill_3.backgroundTintList = ColorStateList.valueOf(resources.getColor(R.color.material_grey_300))
        })

        md_skill_2.setOnClickListener({
            md_skill_2.backgroundTintList = ColorStateList.valueOf(Color.parseColor("#FFA500"))
            md_skill_1.backgroundTintList = ColorStateList.valueOf(resources.getColor(R.color.material_grey_300))
            md_skill_3.backgroundTintList = ColorStateList.valueOf(resources.getColor(R.color.material_grey_300))
        })

        md_skill_3.setOnClickListener({
            md_skill_3.backgroundTintList = ColorStateList.valueOf(Color.parseColor("#FF0000"))
            md_skill_1.backgroundTintList = ColorStateList.valueOf(resources.getColor(R.color.material_grey_300))
            md_skill_2.backgroundTintList = ColorStateList.valueOf(resources.getColor(R.color.material_grey_300))
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
        println(thisMatch?.id)

        if (participantList.contains(currentUser?.uid) != true) {
            participantList.add(currentUser?.uid!!)
        }
    }
}


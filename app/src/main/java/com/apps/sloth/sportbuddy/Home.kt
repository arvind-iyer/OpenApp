package com.apps.sloth.sportbuddy

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.widget.AdapterView
import android.widget.Toast
import com.apps.sloth.sportbuddy.listx.Match
import com.apps.sloth.sportbuddy.listx.MatchAdapter
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import kotlinx.android.synthetic.main.activity_home.*
import kotlinx.android.synthetic.main.fragment_match_list.*

class Home : AppCompatActivity() {
    private var currentMatches = ArrayList<Match>()
    private val databaseReference = FirebaseDatabase.getInstance().getReference()
    private var matchAdapter = MatchAdapter(this, currentMatches)

//    private fun updateMatchListFromLocal() {
//        val mdb = databaseReference.child("matches")
//
//    }
    private fun populateCurrentMatches() {
        val mdb = databaseReference.child("matches")

        mdb.addValueEventListener(object: ValueEventListener {
            override fun onDataChange(dataSnapshot: DataSnapshot) {
                currentMatches.clear()
                dataSnapshot.children.mapNotNullTo(currentMatches) {
                    m ->
                    var mtc = m.getValue<Match>(Match::class.java)
                    mtc?.id = m.key
                    mtc
                }
                matchAdapter = MatchAdapter(applicationContext, currentMatches)
                cur_matches.adapter = matchAdapter
                cur_matches.onItemClickListener = AdapterView.OnItemClickListener {
                    adapterView, view, position, id ->
//                    Toast.makeText(
//                            applicationContext, currentMatches[position].id.toString(),
//                            Toast.LENGTH_SHORT
//                    ).show()
                    if(currentMatches[position].curr_capacity < currentMatches[position].max_capacity) {
                        currentMatches[position].curr_capacity++
                    }
                    val matchDB = databaseReference.child("matches")
                    matchDB.child(currentMatches[position].id).child("curr_capacity")
                            .setValue(currentMatches[position].curr_capacity)

                    val intent = Intent(applicationContext, MatchDetailsActivity::class.java)
                    intent.putExtra("match_id", currentMatches[position].id)
                    println("match_id_extra: " + currentMatches[position].id)
                    startActivity(intent)
//                    view.ivDelete.setOnClickListener { view ->
//                        val matchDB = databaseReference.child("matches")
//                        matchAdapter.removeAt(position)
//                    }

                }


            }

            override fun onCancelled(p0: DatabaseError?) {
                Log.i("Home/FDB:Cancelled", p0?.message )
            }
        })
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)
        setSupportActionBar(toolbar)
        populateCurrentMatches()
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_home, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem) = when(item.itemId){
        R.id.action_settings -> {
            Toast.makeText(this, "This should open the settings activity",
                    Toast.LENGTH_SHORT).show()
            true
        }

        R.id.action_pd -> {
            val intent = Intent(applicationContext, PersonalDetailsActivity::class.java)
            startActivity(intent)
            true
        }

        R.id.action_create_match -> {
            openCreateMatchActivity()
            true
        }

        else -> {
            super.onOptionsItemSelected(item)
        }
    }

    fun openCreateMatchActivity() {
        val intent = Intent(this, CreateMatchActivity::class.java)
        startActivity(intent)
    }

}

package com.apps.sloth.sportbuddy

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.RecyclerView
import android.util.Log
import android.view.View
import android.widget.AdapterView
import android.widget.Toast
import com.apps.sloth.sportbuddy.listx.Match
import com.apps.sloth.sportbuddy.listx.MatchAdapter
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import kotlinx.android.synthetic.main.fragment_match_list.*
import kotlinx.android.synthetic.main.match.*
import kotlinx.android.synthetic.main.match.view.*

class Home : AppCompatActivity() {
    private var currentMatches = ArrayList<Match>()
    private val databaseReference = FirebaseDatabase.getInstance().getReference()
    private var matchAdapter = MatchAdapter(this, currentMatches)

    private fun updateMatchListFromLocal() {
        val mdb = databaseReference.child("matches")

    }
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
                    Toast.makeText(
                            applicationContext, currentMatches[position].id.toString(),
                            Toast.LENGTH_SHORT
                    ).show()
                    view.ivDelete.setOnClickListener { view ->
                        val matchDB = databaseReference.child("matches")
                        matchAdapter.removeAt(position)
                    }

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

        populateCurrentMatches()
    }

    fun openCreateMatchActivity(view: View) {
        val intent = Intent(this, CreateMatchActivity::class.java)
        startActivity(intent)
    }

}

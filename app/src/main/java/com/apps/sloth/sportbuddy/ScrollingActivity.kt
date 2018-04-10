package com.apps.sloth.sportbuddy

import android.content.Context
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import com.apps.sloth.sportbuddy.listx.Match
import kotlinx.android.synthetic.main.activity_mdetail_scrolling.*

class ScrollingActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_mdetail_scrolling)
        setSupportActionBar(toolbar)

    }
}




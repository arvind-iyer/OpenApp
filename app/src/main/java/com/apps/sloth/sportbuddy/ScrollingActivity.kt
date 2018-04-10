package com.apps.sloth.sportbuddy

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_mdetail_scrolling.*

class ScrollingActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_mdetail_scrolling)
        setSupportActionBar(toolbar)

        val sport = intent.getStringExtra("sport_type")

        when(sport) {
            "basketball" -> md_sport_image.setImageResource(R.mipmap.basketball)
            "tennis" -> md_sport_image.setImageResource(R.mipmap.tennis)
            "football" -> md_sport_image.setImageResource(R.mipmap.football)
            "squash" -> md_sport_image.setImageResource(R.mipmap.squash)
            "table_tennis" -> md_sport_image.setImageResource(R.mipmap.table_tennis)
            else -> md_sport_image.setImageResource(R.mipmap.default_sport)
        }
    }
}



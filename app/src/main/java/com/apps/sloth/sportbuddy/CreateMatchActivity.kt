package com.apps.sloth.sportbuddy

import android.app.AlertDialog
import android.app.Dialog
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.apps.sloth.sportbuddy.listx.Match
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.database.FirebaseDatabase
import kotlinx.android.synthetic.main.activity_create_match.*
import android.widget.TimePicker
import android.text.format.DateFormat.is24HourFormat
import android.app.TimePickerDialog
import android.support.v4.app.DialogFragment
import android.text.format.DateFormat
import java.util.*


class CreateMatchActivity : AppCompatActivity() {
    private val currentUser = FirebaseAuth.getInstance().currentUser as FirebaseUser
    private val matchesDB = FirebaseDatabase.getInstance().getReference().child("matches")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_match)
    }

    fun createMatch(view: View) {
        val thisMatch = Match(
            sport= cm_sport.text.toString(),
            max_capacity= cm_max_capacity.text.toString().toInt(),
            hourOfDay = 0,
            minute = 0
        )
        thisMatch.host_id = currentUser.uid
        thisMatch.id = matchesDB.push().key
        matchesDB.child(thisMatch.id).setValue(thisMatch)
        finish()
    }

    fun openTimePicker(view: View) {
        val newFragment = TimePickerFragment()
        newFragment.show(supportFragmentManager, "timePicker")
    }

}

public class TimePickerFragment : DialogFragment(), TimePickerDialog.OnTimeSetListener{

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        // Use the current time as the default values for the picker
        val c = Calendar.getInstance()
        val hour = c.get(Calendar.HOUR_OF_DAY)
        val minute = c.get(Calendar.MINUTE)

        // Create a new instance of TimePickerDialog and return it
        return TimePickerDialog(getActivity(), R.style.Theme_AppCompat_Light, this, hour, minute,
                DateFormat.is24HourFormat(getActivity()))
    }

    override fun onTimeSet(view: TimePicker?, hourOfDay: Int, minute: Int) {
        val timeString = hourOfDay.toString() + ":" + minute.toString()
        println(timeString)
    }

}


class DatePickerFragment : DialogFragment() {

}
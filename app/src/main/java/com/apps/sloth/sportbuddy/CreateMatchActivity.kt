package com.apps.sloth.sportbuddy

import android.app.Dialog
import android.app.TimePickerDialog
import android.os.Bundle
import android.support.v4.app.DialogFragment
import android.support.v7.app.AppCompatActivity
import android.text.format.DateFormat
import android.view.View
import android.widget.TimePicker
import com.apps.sloth.sportbuddy.listx.Match
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.database.FirebaseDatabase
import kotlinx.android.synthetic.main.activity_create_match.*
import java.util.*


class CreateMatchActivity : AppCompatActivity() {
    private val currentUser = FirebaseAuth.getInstance().currentUser as FirebaseUser
    private val matchesDB = FirebaseDatabase.getInstance().getReference().child("matches")
    private var hour : Int? = null
    private var minute : Int? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_match)
        val mCurrentTime = Calendar.getInstance()
        val currenthour = mCurrentTime.get(Calendar.HOUR_OF_DAY)
        val currentminute = mCurrentTime.get(Calendar.MINUTE)
        hour = currenthour
        minute = currentminute
        cm_time_text.setText(currenthour.toString() + ":" + currentminute.toString())
    }

    fun createMatch(view: View) {
        if(hour == null || minute == null) {
            println("Set time first pl0x")
            return
        }
        val thisMatch = Match(
            sport= cm_sport.text.toString(),
            max_capacity= cm_max_capacity.text.toString().toInt(),
            hourOfDay = hour,
            minute = minute,
            host_id = currentUser.uid,
            id = matchesDB.push().key
        )
        matchesDB.child(thisMatch.id).setValue(thisMatch)
        finish()
    }

    fun openTimePicker(view: View) {
        val mCurrentTime = Calendar.getInstance()
        val currenthour = mCurrentTime.get(Calendar.HOUR_OF_DAY)
        val currentminute = mCurrentTime.get(Calendar.MINUTE)

        val mTimePickerDialog: TimePickerDialog
        mTimePickerDialog = TimePickerDialog(view.context, TimePickerDialog.OnTimeSetListener {
            timePicker, h, m ->
                cm_time_text.setText(h.toString() + ":" + m.toString())
                hour = h
                minute = m
        }, currenthour, currentminute, true)
        mTimePickerDialog.setTitle("Select Time for Game")
        mTimePickerDialog.show()
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
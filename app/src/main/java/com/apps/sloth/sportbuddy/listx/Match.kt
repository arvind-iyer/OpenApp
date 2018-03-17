package com.apps.sloth.sportbuddy.listx

import android.location.Location
import java.util.*

/* Data class for list item */
data class Match (
    var id: String? = null,
    var sport: String = "Sport",
    var max_capacity : Int = 2,
    var host_id: String? = null,
    var curr_capacity : Int = 1,
    var hourOfDay: Int? = null,
    var minute: Int? = null,
    var location: String = "Court A"
)
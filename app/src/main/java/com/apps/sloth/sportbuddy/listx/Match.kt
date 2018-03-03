package com.apps.sloth.sportbuddy.listx

import android.location.Location
import java.util.*

/* Data class for list item */
data class Match (
    var id: String? = null,
    var sport: String = "Sport",
    var host_id: String? = null,
    var max_capacity : Int? = null,
    var curr_capacity : Int? = null,
    var hourOfDay: Int? = null,
    var minute: Int? = null,
    var location: Location? = null
)
package com.apps.sloth.sportbuddy.listx

import android.location.Location
import java.util.*

/* Data class for list item */
class Match {
    var id: Int? = null
    var sport: String = "Sport"
    var host_id: String? = null
    var max_capacity : Int? = null
    var curr_capacity : Int? = null
    var time: Date? = null
    var location: Location? = null

    constructor(id: Int, sport: String, host_id: String) {
        this.id = id
        this.sport = sport
        this.host_id = host_id
    }

}
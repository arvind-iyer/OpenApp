package com.apps.sloth.sportbuddy.listx

import android.content.Context
import android.support.v7.widget.RecyclerView
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import com.apps.sloth.sportbuddy.R
import org.w3c.dom.Text

/**
 * Created by arvind on 22/2/18.
 */

class MatchAdapter : BaseAdapter {
    var matchList = ArrayList<Match>()
    var context: Context? = null

    constructor(context: Context, matchList: ArrayList<Match>) : super() {
        this.matchList = matchList
        this.context = context
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View? {

        val view: View?
        val vh: ViewHolder

        if (convertView == null) {
            view = layoutInflater.inflate(R.layout.note, parent, false)
            vh = ViewHolder(view)
            view.tag = vh
            Log.i("JSA", "set Tag for ViewHolder, position: " + position)
        } else {
            view = convertView
            vh = view.tag as ViewHolder
        }

        vh.sportText.text = matchList[position].sport
        vh.hostText.text = matchList[position].host_id

        return view
    }

    override fun getItem(position: Int): Any {
        // return item at 'position'
        return matchList[position]
    }

    override fun getItemId(position: Int): Long {
        // return item Id by Long datatype
        return position.toLong()
    }

    override fun getCount(): Int {
        // return quantity of the list
        return matchList.size
    }
}

private class ViewHolder(view: View?) {
    val sportText: TextView
    val hostText: TextView

    init {
        this.sportText = view?.findViewById(R.id.sportText) as TextView
        this.hostText = view?.findViewById(R.id.hostText) as TextView
    }
}
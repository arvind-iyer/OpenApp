package com.apps.sloth.sportbuddy.listx

import android.content.Context
import android.support.v7.widget.RecyclerView
import android.util.Log
import android.view.LayoutInflater
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
    private var matchList = ArrayList<Match>()
    private var context: Context? = null

    constructor(context: Context, matchList: ArrayList<Match>) : super() {
        this.matchList = matchList
        this.context = context
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View? {

        val view: View?
        val vh: ViewHolder

        if (convertView == null) {
            view = LayoutInflater.from(context).inflate(R.layout.match, parent, false)
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
    fun remove(id: String) {
        var ind = -1
        matchList.forEach { m ->
            ind += 1
            if(m.id.equals(id)) {
                return@forEach
            }
        }
        if(ind != -1) {
            matchList.removeAt(ind)
            this.notifyDataSetChanged()
        }
    }

    fun removeAt(index : Int) {
        if(index >= 0 && index < matchList.size) {
            matchList.removeAt(index)
            this.notifyDataSetChanged()
        }
    }
}

private class ViewHolder(view: View) {
    val sportText: TextView
    val hostText: TextView

    init {
        this.sportText = view.findViewById(R.id.home_list_sportText) as TextView
        this.hostText = view.findViewById(R.id.home_list_hostText) as TextView
    }
}
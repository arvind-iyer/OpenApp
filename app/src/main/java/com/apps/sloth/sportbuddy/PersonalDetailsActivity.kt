package com.apps.sloth.sportbuddy

import android.app.Activity
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.os.Bundle
import android.os.PersistableBundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.storage.FirebaseStorage
import kotlinx.android.synthetic.main.activity_personal_details.*
import kotlinx.android.synthetic.main.activity_personal_details.view.*
import java.io.FileNotFoundException
import java.io.IOException

/**
 * Created by arvind on 28/2/18.
 */

public class PersonalDetailsActivity : AppCompatActivity() {
    private val GALLERY_REQ_CODE = 1
    private val mAuth = FirebaseAuth.getInstance()
    private var currentUser : FirebaseUser? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_personal_details)
    }

    override fun onStart() {
        super.onStart()
        currentUser = mAuth.currentUser
    }

    public fun getPicture(view : View) {
        val galleryIntent = Intent()
        galleryIntent.type = "image/*"
        galleryIntent.setAction(Intent.ACTION_GET_CONTENT)
        startActivityForResult(Intent.createChooser(galleryIntent, "Select Image"), GALLERY_REQ_CODE)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (resultCode == Activity.RESULT_OK) {
            try {
                val uri = data?.data
                val bitmap = BitmapFactory.decodeStream(contentResolver.openInputStream(uri))
                pd_image_user_pic.setImageBitmap(bitmap)
                val mStorage = FirebaseStorage.getInstance().getReference()
                val picRef = mStorage.child("users").child(currentUser?.uid as String).child("profile_picture")
                picRef.putFile(uri!!)
                        .addOnSuccessListener { taskSnapshot ->
                            val downloadUrl = taskSnapshot.downloadUrl
                            val mDatabase = FirebaseDatabase.getInstance().getReference("users")
                            val userRef = mDatabase.child(currentUser?.uid)
                            userRef.child("profile_picture").setValue(downloadUrl.toString())
                        }
            } catch (e : FileNotFoundException) {
                e.printStackTrace()
            }
        } else {
            Toast.makeText(this, "You haven't picked Image",Toast.LENGTH_LONG).show();
        }
    }
}
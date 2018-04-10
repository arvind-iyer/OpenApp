package com.apps.sloth.sportbuddy

import android.app.Activity
import android.content.Intent
import android.graphics.BitmapFactory
import android.net.Uri
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.auth.UserProfileChangeRequest
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import com.google.firebase.storage.FirebaseStorage
import com.squareup.picasso.Picasso
import de.hdodenhof.circleimageview.CircleImageView
import kotlinx.android.synthetic.main.activity_personal_details.*
import java.io.FileNotFoundException

/**
 * Created by arvind on 28/2/18.
 */

public class PersonalDetailsActivity : AppCompatActivity() {
    private val GALLERY_REQ_CODE = 1
    private val mAuth = FirebaseAuth.getInstance()
    private var currentUser : FirebaseUser? = null
    private var imgUri : Uri? = null
    private val udb = FirebaseDatabase.getInstance().reference.child("users")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_personal_details)
        currentUser = mAuth.currentUser

        val usersDB = udb.child(currentUser?.uid)
        usersDB.child(currentUser?.uid).addListenerForSingleValueEvent(object: ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot) {
                pd_text_bio.setText(snapshot.child("bio").value.toString())
                Picasso.get()
                        .load(snapshot.value.toString())
                        .placeholder(R.mipmap.default_user)
                        .into(findViewById(R.id.pd_image_user_pic)as CircleImageView)

                pd_text_phone.setText(snapshot.child("phone").value.toString())

            }
        })
        pd_text_name.setText(currentUser?.displayName.toString())
//        pd_text_bio.setText()
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
                imgUri = data?.data
                val bitmap = BitmapFactory.decodeStream(contentResolver.openInputStream(imgUri))
                pd_image_user_pic.setImageBitmap(bitmap)
                val mStorage = FirebaseStorage.getInstance().getReference()
                val picRef = mStorage.child("users").child(currentUser?.uid as String).child("profile_picture")
                picRef.putFile(imgUri!!)
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

    fun updatePersonalDetails(view: View) {
        if(pd_text_name.text.toString().equals("") ) {
            println("Missing username")
            return
        }
        var profileChangeRequest =  UserProfileChangeRequest.Builder()
                .setDisplayName(pd_text_name.text.toString())
        udb.child("bio").setValue(pd_text_bio.text.toString())
        udb.child("phone").setValue(pd_text_phone.text.toString())
        currentUser?.updateProfile(profileChangeRequest.build())
        finish()
    }
}


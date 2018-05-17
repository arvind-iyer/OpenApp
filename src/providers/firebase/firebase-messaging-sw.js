importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.12.0/firebase-messaging.js');

//initiialize firebase

firebase.initializeApp({
    messagingSenderId: '853900390131'
  });
  
  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('Received background message ', payload);
    // here you can override some options describing what's in the message; 
    // however, the actual content will come from the Webtask
    const notificationOptions = {
      icon: '/assets/icon.png'
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
  });
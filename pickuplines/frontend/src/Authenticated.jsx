import React, { useState, useEffect } from 'react';
// yarn add firebase
import 'firebase/auth';
import * as firebase from 'firebase/app';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

const firebaseConfig = {
  apiKey: "AIzaSyA8i9uKn8MyKXk1nK9k1bKVw_fQmAjWTB4",
  authDomain: "pickuplinetrends.firebaseapp.com",
  databaseURL: "https://pickuplinetrends.firebaseio.com",
  projectId: "pickuplinetrends",
  storageBucket: "pickuplinetrends.appspot.com",
  messagingSenderId: "428612491699",
  appId: "1:428612491699:web:c2f5a46802d37bdf3453c6"
};

firebase.initializeApp(firebaseConfig);

export default (props) => {
  const [user, setUser] = useState(null); // no user logged in

  const uiConfig = {
    signInFLow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
  };

  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }

  // watch when changes
  useEffect(() => onAuthStateChange(), []); // empty dependency array

  return (
    <div>
      {user && props.children}
      {!user && <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />}
    </div>
  )
}
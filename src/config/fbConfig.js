import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB4d-6kfBpiUEeVjXwGV5AgXi69dWSlTJo",
  authDomain: "marioplan-netninja.firebaseapp.com",
  databaseURL: "https://marioplan-netninja.firebaseio.com",
  projectId: "marioplan-netninja",
  storageBucket: "marioplan-netninja.appspot.com",
  messagingSenderId: "344292897003"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
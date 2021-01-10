import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyCn9rYq0RWiAcd0OpDMkMrV4LnqavHbqBM",
    authDomain: "practicafinal-654ba.firebaseapp.com",
    databaseURL: "https://practicafinal-654ba-default-rtdb.firebaseio.com",
    projectId: "practicafinal-654ba",
    storageBucket: "practicafinal-654ba.appspot.com",
    messagingSenderId: "598940154187",
    appId: "1:598940154187:web:736f186705de723bd310ce",
    measurementId: "G-1YSJPF0QHY"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;
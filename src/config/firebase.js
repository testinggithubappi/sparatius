import * as firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9kKA0BkER0hYR4yogbpTFtyRJQ6qY2ks",
  authDomain: "sparatius.firebaseapp.com",
  databaseURL: "https://sparatius-default-rtdb.firebaseio.com",
  projectId: "sparatius",
  storageBucket: "sparatius.appspot.com",
  messagingSenderId: "527454961304",
  appId: "1:527454961304:web:8ea074197c6cc25a845aed",
  measurementId: "G-KHH6QYWX5L",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

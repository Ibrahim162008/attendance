import firebase from "firebase";
//initialize your database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu3jaoKahca3mJO_kzjXZoYDk-_0p_7Zs",
  authDomain: "school-attendance-app-41434.firebaseapp.com",
  databaseURL: "https://school-attendance-app-41434-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-41434",
  storageBucket: "school-attendance-app-41434.appspot.com",
  messagingSenderId: "324588786467",
  appId: "1:324588786467:web:b4aebe7dcd4889ac6e7296",
  measurementId: "G-2EEN7CXDJB"
};

firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  
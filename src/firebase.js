/* basckend connection */

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuiml6rd-ZhEiV4aIy25VrKP6TFo_ePGk",
  authDomain: "slack-clone-6d1bf.firebaseapp.com",
  projectId: "slack-clone-6d1bf",
  storageBucket: "slack-clone-6d1bf.appspot.com",
  messagingSenderId: "528710599197",
  appId: "1:528710599197:web:7292b6745e6ecd2fd6fcf4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
/* get the db */
const db = firebaseApp.firestore();
/* authentication */
const auth = firebase.auth();
/* to get google services */
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

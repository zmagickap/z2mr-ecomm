import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAIh8qLTGS5iH8h5SS44a4wd5tl_86S_0Q",
  authDomain: "crwn-db-52617.firebaseapp.com",
  databaseURL: "https://crwn-db-52617.firebaseio.com",
  projectId: "crwn-db-52617",
  storageBucket: "crwn-db-52617.appspot.com",
  messagingSenderId: "475633109223",
  appId: "1:475633109223:web:dcbc5245d754c48b28ba42"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

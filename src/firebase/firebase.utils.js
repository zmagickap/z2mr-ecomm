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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {}
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

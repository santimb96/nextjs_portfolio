import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../settings/firebaseConfig'
import { getDocs } from 'firebase/firestore'

const signIn = (email, password) => {
  signInWithEmailAndPassword(auth(), email, password)
    .then((res) => res?.user?.uid)
    .catch(() => false)
}

const getDocsWithAuth = (collection) =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(auth(), (user) => {
      if (!user) {
        signIn(process.env.NEXT_PUBLIC_FIREBASE_USER, process.env.NEXT_PUBLIC_FIREBASE_PASSWORD)
      }
      getDocs(collection)
        .then((data) => resolve(data?.docs))
        .catch((error) => reject(error))
    })
  })

export { signIn, getDocsWithAuth }

import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../settings/firebaseConfig'

const signIn = (email, password) => {
  signInWithEmailAndPassword(auth(), email, password)
    .then((res) => res.user)
    .catch(() => false)
}

const checkIfUserIsLogged = () => {
  onAuthStateChanged(auth(), (user) => {
    if (user) {
      return user
    }
    return signIn('santiagomartinezbota@gmail.com', 'adminAdmin')
  })
}

export { signIn, checkIfUserIsLogged }

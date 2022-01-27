import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARhXUmxjJiqVfspami5EALH-PI7PJwUXQ',
  authDomain: 'house-marketplace-app-4bc88.firebaseapp.com',
  projectId: 'house-marketplace-app-4bc88',
  storageBucket: 'house-marketplace-app-4bc88.appspot.com',
  messagingSenderId: '894835113209',
  appId: '1:894835113209:web:43290ccae05e433cc83628',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

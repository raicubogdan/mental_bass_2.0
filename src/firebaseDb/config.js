import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtUHUzTJfzdN84RIfW7eigk2pqHP5Cwqg",
  authDomain: "mental-bass-2-0.firebaseapp.com",
  projectId: "mental-bass-2-0",
  storageBucket: "mental-bass-2-0.appspot.com",
  messagingSenderId: "422945120253",
  appId: "1:422945120253:web:b327762a097c3d8d818394"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
export const db = getFirestore()

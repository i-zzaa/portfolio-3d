// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyDSEso8ZGKqE2s27aSosEFiQl79AWeISkw',
  authDomain: 'andressanovaes-c55a1.firebaseapp.com',
  projectId: 'andressanovaes-c55a1',
  storageBucket: 'andressanovaes-c55a1.appspot.com',
  messagingSenderId: '206077365649',
  appId: '1:206077365649:web:e4015ad0886daf8c235e30',
  measurementId: 'G-B3HXLVJV92',
  databaseURL: '',
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp);

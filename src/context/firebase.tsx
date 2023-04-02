import { createContext, useContext } from 'react';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

interface FirebaseContextType {
  db?: any;
}

const app = initializeApp({
  apiKey: 'AIzaSyDSEso8ZGKqE2s27aSosEFiQl79AWeISkw',
  authDomain: 'andressanovaes-c55a1.firebaseapp.com',
  projectId: 'andressanovaes-c55a1',
  storageBucket: 'andressanovaes-c55a1.appspot.com',
  messagingSenderId: '206077365649',
  appId: '1:206077365649:web:e4015ad0886daf8c235e30',
  measurementId: 'G-B3HXLVJV92',
});

const FirebaseContext = createContext<FirebaseContextType>({  });

const FirebaseContextProvider = ({ children }: any) => {
  return <FirebaseContext.Provider value={{ db: getFirestore(app) }}>{children} </FirebaseContext.Provider>;
};

// Create a consumer hook
export function useFirebaseContext() {
  return useContext(FirebaseContext);
}

export default FirebaseContextProvider

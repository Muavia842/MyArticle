// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage'; // Import getStorage

// const firebaseConfig = {
//   apiKey: 'AIzaSyDdR6IYJzqPrxzPv0-_728YkENHyq5uReg',
//   authDomain: 'blogproject-c5922.firebaseapp.com',
//   projectId: 'blogproject-c5922',
//   storageBucket: 'blogproject-c5922.appspot.com',
//   messagingSenderId: '323733157516',
//   appId: '1:323733157516:web:4e87aa1700653fa947ada9',
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const storage = getStorage(app); // Initialize storage

import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC0ZiCCyhjyAo33DD1L0U3NB8OQ2RuUTno',
  authDomain: 'task-c9beb.firebaseapp.com',
  projectId: 'task-c9beb',
  storageBucket: 'task-c9beb.appspot.com',
  messagingSenderId: '817786730718',
  appId: '1:817786730718:web:14eadba69e0bacc7fb2a4f',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

export const sendResetPasswordEmail = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage'; // Import getStorage for Firebase Storage

// const firebaseConfig = {
//   apiKey: 'AIzaSyDdR6IYJzqPrxzPv0-_728YkENHyq5uReg',
//   authDomain: 'blogproject-c5922.firebaseapp.com',
//   projectId: 'blogproject-c5922',
//   storageBucket: 'blogproject-c5922.appspot.com',
//   messagingSenderId: '323733157516',
//   appId: '1:323733157516:web:4e87aa1700653fa947ada9',
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const storage = getStorage(app); // Export getStorage for Firebase Storage

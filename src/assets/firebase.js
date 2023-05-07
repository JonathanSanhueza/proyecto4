import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDUj2c7sAI4_au_Hxq6kN-gZOEf6SOgsQg",
    authDomain: "bootcamp-udd-b74c1.firebaseapp.com",
    projectId: "bootcamp-udd-b74c1",
    storageBucket: "bootcamp-udd-b74c1.appspot.com",
    messagingSenderId: "609885283271",
    appId: "1:609885283271:web:c6f62b2a73df76af202fe2"
  };

  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
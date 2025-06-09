// Import the functions you need from the SDKs you need

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt8YuImtFcDC78nj6dVYVIJGVmZbEiAbg",
  authDomain: "movie2-7e2c3.firebaseapp.com",
  projectId: "movie2-7e2c3",
  storageBucket: "movie2-7e2c3.appspot.com",
  messagingSenderId: "324415305764",
  appId: "1:324415305764:web:7837d1b98e2f5747fe40b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const provider  = new GoogleAuthProvider();

// FireBase.js
export const signUp = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(dataBase, 'user'), {
        uid: user.uid,
        authProvider: 'local',
        name,
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }

export const login = async(email,password)=>{
    try{
        const res = await signInWithEmailAndPassword(auth,email,password);
        console.log(res.user);
        
    }
    catch(err){
        console.error(err)
        alert(err)
    }
}

export const logOut = async()=>{
    try{
        await signOut(auth);
        console.log('Logged out')
    }
    catch(err){
        console.error(err)
        alert()

    } 
}




















































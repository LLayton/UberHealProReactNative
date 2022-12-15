import { 
    GoogleAuthProvider, 
    getAuth, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut 
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZVH048TrCnNG2ojv1xdtuq2GCwUx6f_8",
    authDomain: "uberheal-a8dfb.firebaseapp.com",
    projectId: "uberheal-a8dfb",
    storageBucket: "uberheal-a8dfb.appspot.com",
    messagingSenderId: "856695744946",
    appId: "1:856695744946:web:e3558bcd3bf58d38895cab"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async ( email, password ) => {
    try {

      
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      /*switch(process.env.UberHealSide){
        case "CLIENT":
          return await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            lastname,
            adress,
            city,
            CP, 
            authProvider: "local",
            email,
          });
        case "PRO":
          return await addDoc(collection(db, "medecin"), {
            uid: user.uid,
            nom:"philibert",
            prenom:"dusol",
            type:"Infirmier",
          });
      }*/
      const response= await addDoc(collection(db, "users"), {
        uid: user.uid,
        email,
      });

      logInWithEmailAndPassword(email, password)
      return response;
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
    
  /*const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };*/

  const logout = async () => {
    try {
      signOut(auth);
    } catch {
      console.log("error")
    }
  };

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };
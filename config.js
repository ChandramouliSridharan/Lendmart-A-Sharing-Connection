import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCctCeiw0OSeXm9hxRoEAGo9jCdwadQuH8",
  authDomain: "lendmart-90895.firebaseapp.com",
  projectId: "lendmart-90895",
  storageBucket: "lendmart-90895.appspot.com",
  messagingSenderId: "49647665043",
  appId: "1:49647665043:web:eb6a98b512e51c042ff266",
  measurementId: "G-JJG3DG3BCD"
};

if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
}
const app = initializeApp(firebaseConfig)
export {firebase ,app};
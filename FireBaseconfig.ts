// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsS55P0fNq8Xmq3ZzsFS9uAlMvxbZWYk8",
  authDomain: "pacontrol-8357f.firebaseapp.com",
  projectId: "pacontrol-8357f",
  storageBucket: "pacontrol-8357f.firebasestorage.app",
  messagingSenderId: "633069843819",
  appId: "1:633069843819:web:fb438e8a210ad68fd2c82e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);

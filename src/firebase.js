import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV2ddKEyUjMc-TnMbfL11ARYmUKPi89ds",
  authDomain: "portfolio-ee8f2.firebaseapp.com",
  projectId: "portfolio-ee8f2",
  storageBucket: "portfolio-ee8f2.appspot.com",
  messagingSenderId: "865906312955",
  appId: "1:865906312955:web:435b43e5695b0a8dad125e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

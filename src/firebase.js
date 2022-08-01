import { initializeApp } from "firebase/app";
import { getAuth,signOut ,onAuthStateChanged  , signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast"
import { userHandle } from "utils";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIsuSksk-cBcdm3pZWc_sERuEjfRw5Y0",
  authDomain: "cemil-instagram.firebaseapp.com",
  projectId: "cemil-instagram",
  storageBucket: "cemil-instagram.appspot.com",
  messagingSenderId: "996566464470",
  appId: "1:996566464470:web:f46e32520de17638f39677",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth,user=>{
    userHandle(user || false)
})

export const login = async (email, password) => {
  try {
    const response= await signInWithEmailAndPassword(auth, email, password)
    console.log(response.user)
    
  } catch (e) {
    toast.error(e.code)
  }
};

export const logout=async()=>{
  try{
    await signOut(auth)
  }catch(err){
    toast.error(err.code)
  }
}

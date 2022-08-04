import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
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
const db=getFirestore(app)

// Auth Control
onAuthStateChanged(auth, (user) => {
  if(user){
    userHandle(user)
  }else{
    userHandle(false);
  }
  
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user
  } catch (e) {
    toast.error(e.code);
  }
};
export const register = async ({ email, full_name, username, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // add a users collection
    await setDoc(doc(db,"users",response.user.uid),{
      full_name,
      username,
      followers:[],
      following:[],
      notifications:[]
    })


    await updateProfile(auth.currentUser, {
      displayName: full_name
    });
    return response.user
  } catch (e) {
    toast.error(e.code);
  }

};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};

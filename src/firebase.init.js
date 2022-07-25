import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFKyKYq5lIcyqdX_DtFPRFq-wO32guiSM",
  authDomain: "knowledge-zone-37325.firebaseapp.com",
  projectId: "knowledge-zone-37325",
  storageBucket: "knowledge-zone-37325.appspot.com",
  messagingSenderId: "623976177333",
  appId: "1:623976177333:web:4b602c87058a04812ee8fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default (auth)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt0B3XIw43pjmhbsmXobGyDkuCDdOa7D4",
  authDomain: "acelearn-react-project.firebaseapp.com",
  projectId: "acelearn-react-project",
  storageBucket: "acelearn-react-project.appspot.com",
  messagingSenderId: "429141667351",
  appId: "1:429141667351:web:882f45391781f82b0f3652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
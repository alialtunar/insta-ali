// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-2-19b18.firebaseapp.com",
  projectId: "insta-next-2-19b18",
  storageBucket: "insta-next-2-19b18.appspot.com",
  messagingSenderId: "108591259678",
  appId: "1:108591259678:web:64d313a7627014d88b4e0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write:if 
//         request.resource.size < 2 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//            }
//     }
//   }
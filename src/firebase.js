import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGjs3MGELvNZcsppCsx5NR4h6x-aMFKY",
  authDomain: "todo-6578c.firebaseapp.com",
  projectId: "todo-6578c",
  storageBucket: "todo-6578c.appspot.com",
  messagingSenderId: "102631873074",
  appId: "1:102631873074:web:0d15fa8f5482db64c6ba2b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDOnnptYNjmecB2ueEHE7C9JK-Y9KNMzvU",
  authDomain: "pizza-hut-clone-60a33.firebaseapp.com",
  databaseURL : "https://pizza-hut-35a81-default-rtdb.firebaseio.com/",
  projectId: "pizza-hut-clone-60a33",
  storageBucket: "pizza-hut-clone-60a33.firebasestorage.app",
  messagingSenderId: "257927345241",
  appId: "1:257927345241:web:8337b58718bd5a038d2d48",
  measurementId: "G-2ZFTPJT08F"
};

const pizzaHutApp = initializeApp(firebaseConfig);
const database = getDatabase(pizzaHutApp);

export default database;
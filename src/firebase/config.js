import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC1CXDxTpoYq_XsVuoNHgoJ1FAIoZPKUNs",
  authDomain: "miniblog-2400d.firebaseapp.com",
  projectId: "miniblog-2400d",
  storageBucket: "miniblog-2400d.appspot.com",
  messagingSenderId: "635182604745",
  appId: "1:635182604745:web:49c144e7e0d3a095aac818"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdZRD5nqJGr2SoGGb1GYZdpj82eOajlp8',
  authDomain: 'find-the-character-27c03.firebaseapp.com',
  projectId: 'find-the-character-27c03',
  storageBucket: 'find-the-character-27c03.appspot.com',
  messagingSenderId: '844011459922',
  appId: '1:844011459922:web:828e0d24b067a5535a568b',
  databaseURL:
    'https://find-the-character-27c03-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const reference = ref(db, 'test');

function writeData(name, email) {
  set(reference, {
    username: name,
    email: email,
  });
}

function getData() {
  let value = null;
  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    value = data;
  });
  return value;
}

export { writeData, getData };

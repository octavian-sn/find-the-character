import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore/lite';

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
const db = getFirestore(app);

async function writeData(data) {
  const characterRef = collection(db, 'characters');
  try {
    await setDoc(doc(characterRef, data.name), data);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function getCharacters() {
  const querySnapshot = await getDocs(collection(db, 'characters'));
  let arr = [];
  querySnapshot.forEach((doc) => arr.push(doc.data()));
  console.log(arr);
  return arr;
}

// getCharacters();

async function getData(name) {
  const docRef = doc(db, 'characters', name);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('Error, no document.');
  }
}

export { writeData, getData, getCharacters };

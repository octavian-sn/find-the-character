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

// Characters setting/getting data
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
async function getData(name, collectionName = 'characters') {
  const docRef = doc(db, collectionName, name);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return 'Error, no document.';
  }
}

// Highscores data
async function setHighScores(data) {
  const scoreRef = collection(db, 'scores');
  try {
    await setDoc(doc(scoreRef, 'High Scores'), data);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// console.log(getData('High Scores', 'highScores'));
export { writeData, getData, getCharacters, setHighScores };

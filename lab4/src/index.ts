import firebase from "firebase";
import { firebaseConfig } from "./config";

console.log("test");
const hello = "FireBase example";
document.body.innerHTML = hello;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const note = {
    title: "prahhh",
    content: "skrrrrrrrrrrrrrrra"
};

async function addNote(note: any){
    const res = await db.collection('Notes').add(note);
}

addNote(note);
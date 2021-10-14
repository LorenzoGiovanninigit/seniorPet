import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/functions";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCbgDT4Vi7e5irCCislLuSYYmZ54rDsdc",
  authDomain: "abivet-pets.firebaseapp.com",
  projectId: "abivet-pets",
  storageBucket: "abivet-pets.appspot.com",
  messagingSenderId: "1002031804070",
  appId: "1:1002031804070:web:f270ae328bf91bb1b7ce67",
  measurementId: "G-Y14YNPYR6S",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

const sendEmail = functions.httpsCallable("sendEmail");
export { db, auth, sendEmail };

export const generateUserDocument = async (
  user,
  displayName,
  cell,
  telephone,
  address,
  age,
  photoURL
) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, uid, emailVerified } = user;
    try {
      await userRef.set({
        displayName,
        email,
        uid,
        emailVerified,
        created: firebase.firestore.Timestamp.fromDate(new Date()),
        photoURL,
        cell,
        telephone,
        address,
        age,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const getPets = async (uid) => {
  if (!uid) return null;
  try {
    const pets = [];
    const petsRef = await firestore.collection("pets").where("uid", "==", uid);
    const snapshot = await petsRef.get();

    if (snapshot.size) {
      console.log("pets find case +++");
      await snapshot.forEach((doc) => {
        // console.log("pets find case +++ id => ", doc.id, " => data => ", doc.data());
        var data = doc.data();
        data.id = doc.id;
        pets.push(data);
      });
      return pets;
    } else {
      console.log("pets not found case +++");
      return pets;
    }
  } catch (error) {
    console.error("Error fetching user", error);
    alert("get pets data error: " + error);
    return error;
  }
};

export const deletePet = async (id) => {
  if (!id) return;

  const ref = firestore.collection("pets");

  console.log("id", id);

  await ref.doc(id).delete();
};

'use server'

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  // These will work because this code runs on the server
  apiKey: process.env.FIREBASE_WAITLIST,
  projectId: process.env.FIREBASE_WAITLIST_PROJECT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export async function submitToWaitlist(email: string) {
  try {
    await addDoc(collection(db, "waitlist"), {
      email: email.toLowerCase().trim(),
      joinedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}
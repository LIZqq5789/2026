
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';

// Note: Replace these with actual config if needed for production
// For now, these are dummy placeholders that would be injected
const firebaseConfig = {
  apiKey: "dummy-key",
  authDomain: "japan-trip-2026.firebaseapp.com",
  databaseURL: "https://japan-trip-2026-default-rtdb.firebaseio.com",
  projectId: "japan-trip-2026",
  storageBucket: "japan-trip-2026.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const syncChecklist = (callback: (data: any) => void) => {
  const checklistRef = ref(db, 'checklist');
  onValue(checklistRef, (snapshot) => {
    const data = snapshot.val();
    callback(data || {});
  });
};

export const updateChecklistItem = (id: string, completed: boolean, text: string) => {
  set(ref(db, `checklist/${id}`), { text, completed });
};

export const addChecklistItem = (text: string) => {
  const newListRef = push(ref(db, 'checklist'));
  set(newListRef, { text, completed: false });
};

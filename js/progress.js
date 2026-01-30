import { auth, db } from './firebase-config.js';
import { doc, updateDoc, arrayUnion, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function markLanguageComplete(languageName) {
    const user = auth.currentUser;
    
    if (!user) {
        alert("Пожалуйста, войдите в аккаунт, чтобы сохранять прогресс!");
        return false;
    }

    try {
        const userRef = doc(db, "users", user.uid);
        
        await updateDoc(userRef, {
            "progress.studiedLanguages": arrayUnion(languageName),
            "progress.xp": increment(100)
        });
        
        alert(`Отлично! Язык "${languageName}" отмечен как изученный.`);
        return true;
    } catch (error) {
        console.error("Error:", error);
        alert("Ошибка сохранения. Проверьте консоль.");
        return false;
    }
}
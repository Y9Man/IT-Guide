import { auth, db, googleProvider, githubProvider } from './firebase-config.js';
import { signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const btnLoginGoogle = document.getElementById('login-google');
const btnLoginGithub = document.getElementById('login-github');


async function handleLogin(provider) {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        await createUserProfileIfNeeded(user);
        
        window.location.href = 'profile.html';
    } catch (error) {
        console.error("Login Error:", error);
        alert(`Ошибка входа: ${error.message}`);
    }
}

async function createUserProfileIfNeeded(user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
        const socialAvatar = user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || 'User'}&background=random&color=fff`;

        const newUserData = {
            userId: user.uid,
            email: user.email,
            createdAt: serverTimestamp(),
            profile: {
                nickname: user.displayName || "Новый пользователь",
                avatarUrl: socialAvatar,
                bio: "Я изучаю программирование с IT Guide!",
                level: "Beginner",
                status: "online"
            },
            progress: {
                studiedLanguages: [],
                xp: 0
            },
            settings: {
                theme: "dark"
            }
        };
        await setDoc(userRef, newUserData);
    } else {
        await updateDoc(userRef, {
            "profile.lastSeen": serverTimestamp()
        });
    }
}

function updateNavInterface(user) {
    const navContainer = document.getElementById('nav-auth');
    if (!navContainer) return;

    if (user) {
        const photoURL = user.photoURL || 'images/default-avatar.png';
        
        navContainer.innerHTML = `
            <a href="profile.html" class="nav-user-profile" title="Открыть профиль">
                <img src="${photoURL}" class="nav-user-avatar" alt="Профиль" onerror="this.src='https://ui-avatars.com/api/?name=User'">
            </a>
        `;
    } else {
        navContainer.innerHTML = `
            <a href="auth.html" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">Войти</a>
        `;
    }
}


onAuthStateChanged(auth, (user) => {
    updateNavInterface(user);
    
    const currentPath = window.location.pathname;
    const publicPages = ['auth.html', 'index.html']; 
    const isPublicPage = publicPages.some(page => currentPath.includes(page));

    if (!user && !isPublicPage && currentPath !== '/' && !currentPath.endsWith('index.html')) {
        window.location.href = 'auth.html';
    }
});

if (btnLoginGoogle) btnLoginGoogle.addEventListener('click', () => handleLogin(googleProvider));
if (btnLoginGithub) btnLoginGithub.addEventListener('click', () => handleLogin(githubProvider));
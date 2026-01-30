import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const els = {
    avatar: document.getElementById('profile-avatar'),
    nickname: document.getElementById('profile-nickname'),
    bio: document.getElementById('profile-bio'),
    xp: document.getElementById('xp-count'),
    langCount: document.getElementById('lang-count'),
    saveBtn: document.getElementById('save-profile'),
    avatarInput: document.getElementById('avatar-input'), 
    langList: document.getElementById('languages-list'),
    achievList: document.getElementById('achievements-list'),
    bookmarksList: document.getElementById('bookmarks-list'),
    bookmarkTitle: document.getElementById('bookmark-title'),
    bookmarkUrl: document.getElementById('bookmark-url'),
    addBookmarkBtn: document.getElementById('btn-add-bookmark'),
    resetProgressBtn: document.getElementById('btn-reset-progress'),
    logoutBtn: document.getElementById('btn-logout'),
    tabs: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    

    friendsList: document.getElementById('friends-list'),
    requestsContainer: document.getElementById('requests-container'),
    requestsList: document.getElementById('requests-list'),
    tabSettingsBtn: document.querySelector('[data-tab="settings"]'),
    addBookmarkForm: document.querySelector('.add-bookmark-form'),
};

let currentUserUID = null;
let profileTargetUID = null;

const urlParams = new URLSearchParams(window.location.search);
const paramUid = urlParams.get('uid');

onAuthStateChanged(auth, async (user) => {
    if (user) currentUserUID = user.uid;

    if (paramUid) {
        profileTargetUID = paramUid;
        await loadUserProfile(profileTargetUID);
        if (currentUserUID !== profileTargetUID) enableGuestMode();
    } else {
        if (user) {
            profileTargetUID = user.uid;
            await loadUserProfile(profileTargetUID);
        } else {
            window.location.href = 'auth.html';
        }
    }
});

function enableGuestMode() {
    if(els.saveBtn) els.saveBtn.style.display = 'none';
    if(els.logoutBtn) els.logoutBtn.style.display = 'none';
    if(els.avatarInput) els.avatarInput.parentElement.style.pointerEvents = 'none';
    if(els.resetProgressBtn) els.resetProgressBtn.parentElement.parentElement.style.display = 'none';
    if(els.tabSettingsBtn) els.tabSettingsBtn.style.display = 'none';
    if(els.addBookmarkForm) els.addBookmarkForm.style.display = 'none';

    els.nickname.contentEditable = "false";
    els.bio.contentEditable = "false";
}

els.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        els.tabs.forEach(t => t.classList.remove('active'));
        els.tabContents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
});

async function loadUserProfile(uid) {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();

            const nick = data.profile.nickname || "User";
            els.nickname.innerText = nick;
            els.bio.innerText = data.profile.bio || "Пользователь IT Guide";
            
            let avatarUrl = data.profile.avatarUrl;
            if (!avatarUrl) avatarUrl = `https://ui-avatars.com/api/?name=${nick}&background=random&color=fff&size=200`;
            els.avatar.src = avatarUrl;
            els.avatar.onerror = () => { els.avatar.src = `https://ui-avatars.com/api/?name=${nick}&background=random&color=fff&size=200`; };

            els.xp.innerText = data.progress?.xp || 0;
            const languages = data.progress?.studiedLanguages || [];
            els.langCount.innerText = languages.length;

            renderLanguages(languages);
            renderAchievements(data.progress?.xp || 0, languages.length);
            

            renderBookmarks(data.bookmarks || []);


            renderFriends(data.friends || []);
            

            if (currentUserUID === profileTargetUID) {
                checkFriendRequests(data.friendRequestsIncoming || []);
            }

        }
    } catch (error) {
        console.error("Ошибка:", error);
    }
}


function renderLanguages(langs) {
    if (!els.langList) return;
    if (!langs || langs.length === 0) els.langList.innerHTML = '<p style="color:#888;">Нет языков</p>';
    else els.langList.innerHTML = langs.map(l => `<div class="lang-card-mini" style="background:var(--bg-secondary); padding:8px; border-radius:6px; margin-bottom:5px;">${l} ✅</div>`).join('');
}

function renderAchievements(xp, langCount) {
    if(!els.achievList) return;
    const allBadges = [
        { name: "Новичок", desc: "Начало", icon: "fa-baby", condition: true },
        { name: "Студент", desc: "1 язык", icon: "fa-book-open", condition: langCount >= 1 },
        { name: "Полиглот", desc: "3 языка", icon: "fa-language", condition: langCount >= 3 },
        { name: "Опытный", desc: "500 XP", icon: "fa-star", condition: xp >= 500 },
        { name: "Мастер", desc: "1000 XP", icon: "fa-trophy", condition: xp >= 1000 }
    ];
    els.achievList.innerHTML = allBadges.map(b => {
        const active = b.condition ? "color:var(--accent-green);" : "color:gray; opacity:0.5;";
        return `<div style="${active} margin-bottom:5px;"><i class="fas ${b.icon}"></i> ${b.name}</div>`;
    }).join('');
}

function renderBookmarks(bookmarks) {
    if (!els.bookmarksList) return;
    els.bookmarksList.innerHTML = '';
    if (bookmarks.length === 0) {
        els.bookmarksList.innerHTML = '<p style="color:gray;">Нет закладок</p>';
        return;
    }

    bookmarks.forEach((bm, index) => {
        const li = document.createElement('li');
        li.style.cssText = "background:var(--bg-secondary); margin-bottom:10px; padding:10px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;";

        const deleteBtn = (currentUserUID === profileTargetUID) 
            ? `<button class="btn-del-bm" data-idx="${index}" style="border:none; background:none; color:#ef4444; cursor:pointer;"><i class="fas fa-trash"></i></button>` 
            : '';

        li.innerHTML = `<a href="${bm.url}" target="_blank" style="color:var(--accent-blue); text-decoration:none;">🔗 ${bm.title}</a> ${deleteBtn}`;
        els.bookmarksList.appendChild(li);
    });

    if (currentUserUID === profileTargetUID) {
        document.querySelectorAll('.btn-del-bm').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                if(confirm("Удалить?")) {
                    const idx = e.currentTarget.dataset.idx;
                    await updateDoc(doc(db, "users", currentUserUID), { bookmarks: arrayRemove(bookmarks[idx]) });
                    location.reload();
                }
            });
        });
    }
}

async function renderFriends(friendsIds) {
    if (!els.friendsList) return;
    els.friendsList.innerHTML = '';

    if (friendsIds.length === 0) {
        els.friendsList.innerHTML = '<p style="color:gray;">Список друзей пуст</p>';
        return;
    }

    for (const friendId of friendsIds) {
        const snap = await getDoc(doc(db, "users", friendId));
        if (snap.exists()) {
            const fData = snap.data();
            const fNick = fData.profile?.nickname || "Friend";
            let fAva = fData.profile?.avatarUrl;
            if(!fAva) fAva = `https://ui-avatars.com/api/?name=${fNick}&background=random&color=fff`;

            const card = document.createElement('div');
            card.className = "friend-card";
            card.style.cssText = "background:var(--bg-secondary); padding:10px; border-radius:10px; text-align:center; cursor:pointer; border:1px solid var(--border-color);";
            card.innerHTML = `
                <img src="${fAva}" style="width:50px; height:50px; border-radius:50%; margin-bottom:5px;">
                <div style="font-weight:bold;">${fNick}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary);">${fData.progress?.xp || 0} XP</div>
            `;

            card.addEventListener('click', () => window.location.href = `profile.html?uid=${friendId}`);
            els.friendsList.appendChild(card);
        }
    }
}
async function checkFriendRequests(incomingIds) {
    if (!els.requestsContainer) return;
    
    if (incomingIds.length > 0) {
        els.requestsContainer.style.display = 'block';
        els.requestsList.innerHTML = '';

        for (const reqId of incomingIds) {
            const snap = await getDoc(doc(db, "users", reqId));
            if (snap.exists()) {
                const reqData = snap.data();
                const reqNick = reqData.profile?.nickname || "User";
                
                const div = document.createElement('div');
                div.style.cssText = "display:flex; justify-content:space-between; align-items:center; background:var(--bg-card); padding:10px; margin-bottom:5px; border-radius:5px;";
                div.innerHTML = `
                    <span><b>${reqNick}</b> хочет добавить вас</span>
                    <div>
                        <button class="btn-accept" data-id="${reqId}" style="background:#22c55e; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">✔</button>
                        <button class="btn-reject" data-id="${reqId}" style="background:#ef4444; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer; margin-left:5px;">✘</button>
                    </div>
                `;
                els.requestsList.appendChild(div);
            }
        }

        document.querySelectorAll('.btn-accept').forEach(btn => btn.addEventListener('click', acceptFriend));
        document.querySelectorAll('.btn-reject').forEach(btn => btn.addEventListener('click', rejectFriend));
    } else {
        els.requestsContainer.style.display = 'none';
    }
}

async function acceptFriend(e) {
    const friendId = e.currentTarget.dataset.id;
    if(!confirm("Добавить пользователя в друзья?")) return;

    try {
        await updateDoc(doc(db, "users", currentUserUID), {
            friends: arrayUnion(friendId),
            friendRequestsIncoming: arrayRemove(friendId)
        });

        await updateDoc(doc(db, "users", friendId), {
            friends: arrayUnion(currentUserUID),
            friendRequestsOutgoing: arrayRemove(currentUserUID)
        });

        alert("Теперь вы друзья!");
        location.reload();
    } catch (err) { alert("Ошибка: " + err.message); }
}

async function rejectFriend(e) {
    const friendId = e.currentTarget.dataset.id;
    if(!confirm("Отклонить заявку?")) return;

    try {
        await updateDoc(doc(db, "users", currentUserUID), {
            friendRequestsIncoming: arrayRemove(friendId)
        });
        location.reload();
    } catch (err) { alert("Ошибка: " + err.message); }
}

if (els.addBookmarkBtn) {
    els.addBookmarkBtn.addEventListener('click', async () => {
        const title = els.bookmarkTitle.value;
        const url = els.bookmarkUrl.value;
        if (title && url) {
            await updateDoc(doc(db, "users", currentUserUID), { bookmarks: arrayUnion({ title, url }) });
            location.reload();
        }
    });
}
if (els.saveBtn) {
    els.saveBtn.addEventListener('click', async () => {
        if (currentUserUID !== profileTargetUID) return;
        const newNick = els.nickname.innerText;
        const newBio = els.bio.innerText;
        els.saveBtn.innerText = "Сохранение...";
        await updateDoc(doc(db, "users", currentUserUID), { "profile.nickname": newNick, "profile.bio": newBio });
        alert('Сохранено!');
        els.saveBtn.innerText = "Сохранить изменения";
    });
}

if (els.logoutBtn) {
    els.logoutBtn.addEventListener('click', async () => {
        await signOut(auth);
        window.location.href = 'auth.html';
    });
}
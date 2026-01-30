import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs, doc, updateDoc, arrayUnion, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const usersList = document.getElementById('users-list');
const searchInput = document.getElementById('user-search');

let allUsers = []; // Храним всех загруженных пользователей
let currentUserUID = null;
let myFriends = []; // Список моих друзей
let myOutgoingRequests = []; // Кому я уже отправил заявку

// 1. Проверяем, кто смотрит страницу
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUserUID = user.uid;
        // Загружаем мои данные, чтобы узнать, кто уже в друзьях
        const mySnap = await getDoc(doc(db, "users", currentUserUID));
        if (mySnap.exists()) {
            myFriends = mySnap.data().friends || [];
            myOutgoingRequests = mySnap.data().friendRequestsOutgoing || [];
        }
    }
    loadUsers();
});

// 2. Загрузка всех пользователей
async function loadUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        
        allUsers = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Не добавляем самого себя в список
            if (doc.id !== currentUserUID) {
                allUsers.push({
                    id: doc.id,
                    ...data
                });
            }
        });

        // Сортировка: Сначала самые крутые по XP (ТОП)
        allUsers.sort((a, b) => (b.progress?.xp || 0) - (a.progress?.xp || 0));

        renderUsers(allUsers);
    } catch (e) {
        console.error("Ошибка загрузки:", e);
        usersList.innerHTML = "<p>Ошибка загрузки данных.</p>";
    }
}

// 3. Отрисовка карточек
function renderUsers(usersToRender) {
    usersList.innerHTML = '';
    
    if (usersToRender.length === 0) {
        usersList.innerHTML = '<p>Пользователи не найдены</p>';
        return;
    }

    usersToRender.forEach((user, index) => {
        // Определяем кнопку (Друг / Заявка отправлена / Добавить)
        let actionBtn = '';
        
        if (!currentUserUID) {
            actionBtn = `<small>Войдите, чтобы добавить</small>`;
        } else if (myFriends.includes(user.id)) {
            actionBtn = `<div class="friend-status"><i class="fas fa-check"></i> Ваш друг</div>`;
        } else if (myOutgoingRequests.includes(user.id)) {
            actionBtn = `<button class="btn btn-secondary" disabled style="width:100%; font-size:0.9rem;">Заявка отправлена</button>`;
        } else {
            // Кнопка добавления
            actionBtn = `<button class="btn btn-primary btn-add-friend" data-id="${user.id}" style="width:100%;">
                            <i class="fas fa-user-plus"></i> Добавить
                         </button>`;
        }

        // Аватарка
        const nick = user.profile?.nickname || "User";
        let avatar = user.profile?.avatarUrl;
        if (!avatar) avatar = `https://ui-avatars.com/api/?name=${nick}&background=random&color=fff`;

        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            ${index < 3 ? '<div class="top-badge">TOP '+(index+1)+'</div>' : ''}
            <img src="${avatar}" alt="${nick}">
            <h3>${nick}</h3>
            <p style="color:var(--text-secondary); font-size:0.9rem;">${user.progress?.xp || 0} XP • ${user.progress?.studiedLanguages?.length || 0} яз.</p>
            <div style="margin-top: 15px;">
                <a href="profile.html?uid=${user.id}" class="btn btn-secondary" style="width:100%; margin-bottom:5px;">Профиль</a>
                ${actionBtn}
            </div>
        `;
        usersList.appendChild(card);
    });

    // Вешаем события на кнопки "Добавить"
    document.querySelectorAll('.btn-add-friend').forEach(btn => {
        btn.addEventListener('click', sendFriendRequest);
    });
}

// 4. Поиск
searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = allUsers.filter(u => 
        (u.profile?.nickname || "").toLowerCase().includes(val)
    );
    renderUsers(filtered);
});

// 5. Логика отправки заявки
async function sendFriendRequest(e) {
    const targetId = e.currentTarget.dataset.id;
    const btn = e.currentTarget;
    
    btn.innerText = "...";
    
    try {
        // 1. Добавляем "Исходящую" заявку МНЕ
        await updateDoc(doc(db, "users", currentUserUID), {
            friendRequestsOutgoing: arrayUnion(targetId)
        });

        // 2. Добавляем "Входящую" заявку ЕМУ
        await updateDoc(doc(db, "users", targetId), {
            friendRequestsIncoming: arrayUnion(currentUserUID)
        });

        // Обновляем UI
        btn.className = "btn btn-secondary";
        btn.innerText = "Заявка отправлена";
        btn.disabled = true;
        
        // Обновляем локальный массив, чтобы не перезагружать страницу
        myOutgoingRequests.push(targetId);

    } catch (error) {
        console.error(error);
        alert("Ошибка: " + error.message);
        btn.innerText = "Ошибка";
    }
}
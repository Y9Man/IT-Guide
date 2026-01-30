import { languagesData } from '../data.js';
import { markLanguageComplete } from '../progress.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('languagesGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('languageModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');

    function renderCards(data) {
        grid.innerHTML = '';
        if (data.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Ничего не найдено</p>';
            return;
        }

        data.forEach(lang => {
            const card = document.createElement('div');
            card.className = 'lang-card';
            card.innerHTML = `
                <div class="card-header-lang">
                    <i class="${lang.icon} lang-icon"></i>
                    <div>
                        <h3>${lang.name}</h3>
                        <small style="color:var(--text-secondary)">${lang.year}</small>
                    </div>
                </div>
                <p class="lang-desc">${lang.description}</p>
                <div class="code-preview-container">
                    <pre><code class="language-${lang.codeLang}">${escapeHtml(lang.code)}</code></pre>
                </div>
                <button class="btn btn-primary" style="width:100%; margin-top: auto;" onclick="openLangModal('${lang.id}')">
                    Подробнее
                </button>
            `;
            grid.appendChild(card);
        });
        
        if (window.Prism) Prism.highlightAll();
    }

    function escapeHtml(text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function filterData() {
        const query = searchInput.value.toLowerCase();
        const activeBtn = document.querySelector('.filter-btn.active');
        const activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';

        const filtered = languagesData.filter(lang => {
            const matchesSearch = lang.name.toLowerCase().includes(query);
            const matchesFilter = activeFilter === 'all' || lang.tags.includes(activeFilter);
            return matchesSearch && matchesFilter;
        });
        renderCards(filtered);
    }

    searchInput.addEventListener('input', filterData);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterData();
        });
    });

    window.openLangModal = (id) => {
        const lang = languagesData.find(l => l.id === id);
        if (!lang) return;
        
        modalBody.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <i class="${lang.icon}" style="font-size: 4rem;"></i>
                <h2 style="margin-top: 1rem;">${lang.name}</h2>
                
                <button id="btn-study-${lang.id}" class="btn btn-success" style="margin-top: 15px; padding: 10px 20px; border:none; border-radius: 8px; cursor: pointer; background: #22c55e; color: white; font-weight: bold; font-size: 1rem; transition: 0.3s;">
                    <i class="fas fa-check-circle"></i> Я изучил это
                </button>
            </div>
            
            <h3>📖 История</h3>
            <p>${lang.history}</p>
            
            <h3 style="margin-top: 1.5rem;">⚡ Ключевые особенности</h3>
            <ul style="margin-bottom: 1.5rem;">
                ${lang.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            
            <h3>🔗 Полезные ссылки</h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${lang.links.map(l => `<a href="${l.url}" target="_blank" class="btn btn-secondary">${l.name}</a>`).join('')}
            </div>
        `;
        
        modal.classList.add('active');

        const studyBtn = document.getElementById(`btn-study-${lang.id}`);
        if(studyBtn) {
            studyBtn.addEventListener('click', async () => {
                studyBtn.innerHTML = 'Сохранение...';
                studyBtn.style.opacity = '0.7';

                const success = await markLanguageComplete(lang.name);
                
                if (success) {
                    studyBtn.innerHTML = '✔ Готово!';
                    studyBtn.style.background = '#15803d';
                    studyBtn.disabled = true;
                } else {
                    studyBtn.innerHTML = 'Ошибка (войдите в аккаунт)';
                    studyBtn.style.background = '#ef4444';
                    studyBtn.style.opacity = '1';
                }
            });
        }
    };

    closeModal.addEventListener('click', () => modal.classList.remove('active'));
    window.onclick = (e) => { if (e.target == modal) modal.classList.remove('active'); };

    renderCards(languagesData);
});
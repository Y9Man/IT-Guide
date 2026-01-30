import { frameworksData } from '../data/frameworks-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('frameworksGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryBtns = document.querySelectorAll('[data-filter]');
    const diffBtns = document.querySelectorAll('[data-difficulty]');
    const tableBody = document.getElementById('compareTableBody');
    const modal = document.getElementById('fwModal');
    const modalBody = document.getElementById('modalBody');
    let currentCategory = 'all';
    let currentDifficulty = 'all';
    let searchQuery = '';


    function renderCards() {
        grid.innerHTML = '';
        
        const filtered = frameworksData.filter(fw => {
            const matchCat = currentCategory === 'all' || fw.category === currentCategory;
            const matchSearch = fw.name.toLowerCase().includes(searchQuery);
            let matchDiff = true;
            if (currentDifficulty === 'easy') matchDiff = fw.complexity <= 2;
            if (currentDifficulty === 'hard') matchDiff = fw.complexity >= 4;

            return matchCat && matchSearch && matchDiff;
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<p style="grid-column:1/-1;text-align:center">Ничего не найдено</p>';
            return;
        }

        filtered.forEach(fw => {
            const stars = '★'.repeat(fw.complexity) + '☆'.repeat(5 - fw.complexity);
            
            let trendIcon = '→';
            let trendColor = 'gray';
            if (fw.trend === 'up') { trendIcon = '↗'; trendColor = '#22c55e'; }
            if (fw.trend === 'down') { trendIcon = '↘'; trendColor = '#ef4444'; }

            const card = document.createElement('div');
            card.className = 'fw-card';
            card.innerHTML = `
                <div class="fw-badge">📅 ${fw.year}</div>
                <div class="fw-header">
                    <i class="${fw.icon} fw-icon"></i>
                    <div>
                        <h3>${fw.name}</h3>
                        <div style="font-size:0.8rem; color:var(--text-secondary)">${fw.language}</div>
                    </div>
                </div>
                <div class="fw-body">
                    <div class="fw-tags">
                        <span class="fw-tag">${fw.category.toUpperCase()}</span>
                        <span class="fw-tag" style="color:${trendColor}">Тренд ${trendIcon}</span>
                    </div>
                    <p style="font-size:0.9rem; margin-bottom:1rem; height: 60px; overflow:hidden;">${fw.description}</p>
                    <div class="complexity-meter" title="Сложность изучения">${stars}</div>
                </div>
                <div class="fw-footer">
                    <button class="btn btn-primary" style="width:100%" onclick="openFwModal('${fw.id}')">
                        Подробнее
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderTable() {
        tableBody.innerHTML = '';
        frameworksData.forEach(fw => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><b>${fw.name}</b></td>
                <td>${fw.category}</td>
                <td>${fw.language}</td>
                <td style="color:var(--accent-green); font-weight:bold">${fw.salary}</td>
                <td>${'★'.repeat(fw.complexity)}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.filter;
            renderCards();
        });
    });
    diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            diffBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDifficulty = btn.dataset.difficulty;
            renderCards();
        });
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderCards();
    });

    window.openFwModal = (id) => {
        const fw = frameworksData.find(f => f.id === id);
        if (!fw) return;

        modalBody.innerHTML = `
            <div style="text-align:center; margin-bottom:1.5rem">
                <i class="${fw.icon}" style="font-size:4rem"></i>
                <h2>${fw.name}</h2>
                <p>${fw.language} • ${fw.year}</p>
            </div>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.5rem">
                <div style="background:rgba(34,197,94,0.1); padding:1rem; border-radius:8px">
                    <h4 style="color:#22c55e">Плюсы</h4>
                    <ul style="padding-left:1rem; font-size:0.9rem">
                        ${fw.pros.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
                <div style="background:rgba(239,68,68,0.1); padding:1rem; border-radius:8px">
                    <h4 style="color:#ef4444">Минусы</h4>
                    <ul style="padding-left:1rem; font-size:0.9rem">
                        ${fw.cons.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div style="background:#1e1e1e; padding:1rem; border-radius:8px; margin-bottom:1.5rem">
                <h4 style="color:#aaa; margin-bottom:0.5rem">Пример кода:</h4>
                <pre><code class="language-javascript">${fw.code.replace(/</g, '&lt;')}</code></pre>
            </div>

            <div style="text-align:center">
                <p style="margin-bottom:1rem">🎯 <strong>Рекомендация:</strong> ${fw.recommendation}</p>
                <a href="${fw.link}" target="_blank" class="btn btn-primary">Официальный сайт</a>
            </div>
        `;
        
        modal.classList.add('active');
        if(window.Prism) Prism.highlightAll();
    };

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.nextStep = (choice) => {
        const resultDiv = document.getElementById('roadmap-result');
        const content = document.getElementById('result-content');
        const desc = document.getElementById('result-desc');
        const step1 = document.querySelector('.roadmap-step');
        
        step1.style.display = 'none';
        resultDiv.style.display = 'block';

        if (choice === 'web') {
            content.textContent = 'React или Vue';
            desc.textContent = 'Для веба сейчас это стандарты. Начните с Vue, если хотите проще, или React для карьеры.';
        } else {
            content.textContent = 'Flutter';
            desc.textContent = 'Лучший способ писать сразу под iOS и Android.';
        }
    };

    window.resetRoadmap = () => {
        document.querySelector('.roadmap-step').style.display = 'block';
        document.getElementById('roadmap-result').style.display = 'none';
    };

    renderCards();
    renderTable();
});
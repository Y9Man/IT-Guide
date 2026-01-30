const chartData = {
    popularity: {
        labels: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Swift'],
        datasets: [{
            label: 'Доля рынка (%)',
            data: [31.2, 18.5, 12.4, 10.8, 7.5, 6.9, 4.1, 3.8, 3.2, 1.6],
            backgroundColor: [
                '#3572A5', '#F1E05A', '#3178C6', '#B07219', '#F34B7D', 
                '#178600', '#00ADD8', '#DEA584', '#4F5D95', '#FFAC45'
            ],
            borderWidth: 1
        }]
    },
    
    salary: {
        labels: ['AI/ML Architect', 'DevOps/SRE', 'Data Scientist', 'Golang Backend', 'Java Backend', 'Frontend (React)', 'Mobile (iOS)', 'GameDev'],
        datasets: [
            {
                label: 'Junior',
                data: [110000, 100000, 95000, 90000, 85000, 70000, 80000, 65000],
                backgroundColor: 'rgba(88, 166, 255, 0.7)',
                borderColor: 'rgb(88, 166, 255)',
                borderWidth: 1
            },
            {
                label: 'Middle',
                data: [280000, 260000, 240000, 230000, 210000, 180000, 200000, 160000],
                backgroundColor: 'rgba(46, 160, 67, 0.7)',
                borderColor: 'rgb(46, 160, 67)',
                borderWidth: 1
            },
            {
                label: 'Senior',
                data: [650000, 550000, 500000, 480000, 450000, 380000, 420000, 350000],
                backgroundColor: 'rgba(183, 128, 255, 0.7)',
                borderColor: 'rgb(183, 128, 255)',
                borderWidth: 1
            }
        ]
    },
    
    demand: {
        labels: ['AI Engineering', 'CyberSecurity', 'Cloud/DevOps', 'Data Analysis', 'Web Dev', 'Mobile', 'IoT/Embedded', 'GameDev'],
        datasets: [{
            label: 'Вакансий (тыс.)',
            data: [4200, 3100, 2900, 2500, 8100, 2800, 1500, 1100],
            backgroundColor: 'rgba(240, 136, 62, 0.2)',
            borderColor: 'rgb(240, 136, 62)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        },
        {
            label: 'Рост спроса (%)',
            data: [45, 38, 25, 20, 8, 12, 28, 5],
            backgroundColor: 'rgba(88, 166, 255, 0.2)',
            borderColor: 'rgb(88, 166, 255)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            yAxisID: 'y1'
        }]
    },
    
    frameworks: {
        labels: ['React/Next.js', 'Vue.js/Nuxt', 'FastAPI', 'Spring Boot', 'Flutter', 'Django', 'ASP.NET Core', 'Angular', 'Express', 'Svelte'],
        datasets: [{
            label: 'Популярность (%)',
            data: [38.5, 21.2, 14.5, 9.8, 8.4, 7.2, 6.1, 5.5, 4.2, 3.8],
            backgroundColor: [
                '#61DAFB', '#42B883', '#009688', '#6DB33F', '#02569B', 
                '#092E20', '#512BD4', '#DD0031', '#000000', '#FF3E00'
            ]
        }]
    }
};

const tableData = {
    popularity: [
        { language: 'Python', share: '31.2%', change: '+3.5%', uses: 'AI, ML, Backend' },
        { language: 'JavaScript', share: '18.5%', change: '-2.1%', uses: 'Legacy Web' },
        { language: 'TypeScript', share: '12.4%', change: '+4.2%', uses: 'Modern Web, Enterprise' },
        { language: 'Java', share: '10.8%', change: '-1.5%', uses: 'Banking, Enterprise' },
        { language: 'C++', share: '7.5%', change: '+0.4%', uses: 'GameDev, Engines' },
        { language: 'Go', share: '4.1%', change: '+1.2%', uses: 'Cloud, Microservices' },
        { language: 'Rust', share: '3.8%', change: '+1.8%', uses: 'System, Security' }
    ],
    salary: [
        { direction: 'AI Architect', junior: '110K+', middle: '280-350K', senior: '650K+', trend: '🚀 Бум' },
        { direction: 'DevOps/SRE', junior: '100K', middle: '260K', senior: '550K', trend: '↗ Рост' },
        { direction: 'Golang Dev', junior: '90K', middle: '230K', senior: '480K', trend: '↗ Рост' },
        { direction: 'CyberSecurity', junior: '95K', middle: '250K', senior: '500K+', trend: '🚀 Спрос' },
        { direction: 'Frontend', junior: '70K', middle: '180K', senior: '380K', trend: '↘ Конкуренция' }
    ],
    demand: [
        { direction: 'AI Engineering', vacancies: '4,200', growth: '+45%', competition: 'Низкая', prospect: 'Доминирующая' },
        { direction: 'CyberSecurity', vacancies: '3,100', growth: '+38%', competition: 'Низкая', prospect: 'Стратегическая' },
        { direction: 'Web Fullstack', vacancies: '8,100', growth: '+8%', competition: 'Экстремальная', prospect: 'Базовая' },
        { direction: 'Cloud/DevOps', vacancies: '2,900', growth: '+25%', competition: 'Средняя', prospect: 'Высокая' }
    ],
    frameworks: [
        { framework: 'React / Next.js', usage: '38.5%', love: '75%', type: 'Full-stack', language: 'JS/TS' },
        { framework: 'FastAPI', usage: '14.5%', love: '88%', type: 'Backend/AI', language: 'Python' },
        { framework: 'Vue / Nuxt', usage: '21.2%', love: '70%', type: 'Frontend', language: 'JS/TS' },
        { framework: 'Spring Boot', usage: '9.8%', love: '55%', type: 'Enterprise', language: 'Java' },
        { framework: 'Flutter', usage: '8.4%', love: '78%', type: 'Cross-platform', language: 'Dart' }
    ]
};

window.charts = {};

document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    initFilters();
    
    document.getElementById('themeToggle').addEventListener('click', () => {
        setTimeout(() => {
            Object.values(window.charts).forEach(c => c.destroy());
            initCharts();
        }, 50);
    });
});

function initCharts() {
    const isDark = document.body.classList.contains('light-theme') === false;
    const textColor = isDark ? '#c9d1d9' : '#24292e';
    const gridColor = isDark ? '#30363d' : '#d0d7de';

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: textColor } }
        }
    };

    const scaleOptions = {
        scales: {
            x: { grid: { color: gridColor }, ticks: { color: textColor } },
            y: { grid: { color: gridColor }, ticks: { color: textColor } }
        }
    };

    const popCtx = document.getElementById('popularityChart').getContext('2d');
    window.charts.popularity = new Chart(popCtx, {
        type: 'pie',
        data: chartData.popularity,
        options: { ...commonOptions, plugins: { legend: { position: 'right', labels: { color: textColor } } } }
    });

    const salaryCtx = document.getElementById('salaryChart').getContext('2d');
    window.charts.salary = new Chart(salaryCtx, {
        type: 'bar',
        data: chartData.salary,
        options: { ...commonOptions, ...scaleOptions }
    });

    const demandCtx = document.getElementById('demandChart').getContext('2d');
    window.charts.demand = new Chart(demandCtx, {
        type: 'line',
        data: chartData.demand,
        options: { 
            ...commonOptions, 
            scales: {
                x: { grid: { color: gridColor }, ticks: { color: textColor } },
                y: { grid: { color: gridColor }, ticks: { color: textColor } },
                y1: { position: 'right', ticks: { color: textColor } }
            }
        }
    });

    const frameCtx = document.getElementById('frameworksChart').getContext('2d');
    window.charts.frameworks = new Chart(frameCtx, {
        type: 'bar',
        data: chartData.frameworks,
        options: { ...commonOptions, indexAxis: 'y', ...scaleOptions }
    });

    fillTable('popularityTable', tableData.popularity);
    fillTable('salaryTable', tableData.salary, 'salary');
    fillTable('demandTable', tableData.demand, 'demand');
    fillTable('frameworksTable', tableData.frameworks);
}

function fillTable(id, data, type) {
    const tbody = document.getElementById(id);
    if(!tbody) return;
    tbody.innerHTML = '';
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(val => {
            const td = document.createElement('td');
            td.textContent = val;
            if(type === 'salary' && val.includes('K')) td.className = 'salary-cell';
            if(type === 'salary' && val.includes('🚀')) td.className = 'trend-up';
            if(type === 'demand' && val.includes('Высокая')) td.className = 'trend-up';
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function initFilters() {
    document.querySelectorAll('.chart-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            const chartName = this.dataset.chart;
            const type = this.dataset.type;
            
            this.closest('.chart-filters').querySelectorAll('.chart-filter').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const chart = window.charts[chartName];
            if(chart) {
                chart.config.type = type;
                chart.update();
            }
        });
    });
}

window.exportChart = (id, name) => {
    const link = document.createElement('a');
    link.download = `${name}.png`;
    link.href = document.getElementById(id).toDataURL();
    link.click();
};
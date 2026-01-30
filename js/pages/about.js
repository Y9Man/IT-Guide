document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('visitorCount');
    let visits = localStorage.getItem('profileVisits');

    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }

    localStorage.setItem('profileVisits', visits);

    if (counterElement) {
        let current = 0;
        const timer = setInterval(() => {
            current += Math.ceil(visits / 20);
            if (current >= visits) {
                current = visits;
                clearInterval(timer);
            }
            counterElement.textContent = current;
        }, 50);
    }

    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        bar.dataset.width = targetWidth;
    });

    setTimeout(() => {
        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.width;
        });
    }, 500);
});
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeCross');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});
const progressBar = document.querySelector('.progress');

function fillProgressBar(duration) {
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration * 100, 100);
        progressBar.style.width = percentage + '%';

        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

fillProgressBar(3000);
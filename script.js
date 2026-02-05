document.addEventListener('DOMContentLoaded', () => {
    const words = ["Web Developer", "Cyber Security Analyst", "Web Designer", "Software Developer"];
    const span = document.querySelector('.typing-text span');
    if (!span) return;
    let i = 0;
    const show = () => {
        span.textContent = words[i];
        i = (i + 1) % words.length;
    };
    show();
    setInterval(show, 2000);
});
const btn = document.querySelector('#mode-icon button');
const githubIcons = document.querySelectorAll('img[alt="GitHub"]');
const linkedinIcons = document.querySelectorAll('img[alt="LinkedIn"]');

function applyMode(isLight) {
    document.body.classList.toggle('light-mode', isLight);

    githubIcons.forEach(img => {
        img.src = isLight
            ? 'icons/GitHub_Invertocat_Black_Clearspace.png'
            : 'icons/GitHub_Invertocat_White_Clearspace.png';
    });
    linkedinIcons.forEach(img => {
        img.src = isLight
            ? 'icons/InBug-Black.png'
            : 'icons/InBug-White.png';
    });
}

// Apply saved preference on load
applyMode(localStorage.getItem('theme') === 'light');

btn.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-mode');
    applyMode(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

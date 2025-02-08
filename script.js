document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const resumeContent = document.querySelector('.resume-content');

    // Simulate loading delay
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        resumeContent.classList.add('fade-in');
        resumeContent.style.display = 'block';
    }, 2000); // 2 seconds
});

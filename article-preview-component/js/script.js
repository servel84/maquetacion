window.onload = () => { 
    const shareLink = document.querySelector('.article-link');
    const shareLinkBtn = document.querySelector('.article-link svg');
    const socialLinks = document.querySelector('.social-links');

    shareLink.addEventListener('click', () => {
        shareLink.classList.toggle("active");
        shareLinkBtn.classList.toggle("active");
        socialLinks.classList.toggle("active");
    });
};
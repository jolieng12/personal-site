/*hamburger button */
hamburgerBtn = document.querySelector('#hamburger-btn');
mainNav = document.querySelector('#main-nav');
hamburgerIcon = document.querySelector('#hamburger-icon');
hamburgerBtn.addEventListener('click', (e) => {
    let expanded = hamburgerBtn.getAttribute('aria-expanded');
    if (expanded==='false') {
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mainNav.setAttribute('class', 'main-nav d-block');
        hamburgerIcon.setAttribute('class', 'bi bi-x-lg f-44');
    } else {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mainNav.setAttribute('class', 'main-nav');
        hamburgerIcon.setAttribute('class', 'bi bi-list f-44');
    }
});
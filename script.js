/*hamburger button */
hamburgerBtn = document.querySelector('#hamburger-btn');
mainNav = document.querySelector('#main-nav');
hamburgerBtn.addEventListener("click", (e) => {
    let expanded = hamburgerBtn.getAttribute("aria-expanded");
    if (expanded==="false") {
        hamburgerBtn.setAttribute("aria-expanded", "true");
        mainNav.setAttribute("class", "main-nav d-block");
    } else {
        hamburgerBtn.setAttribute("aria-expanded", "false");
        mainNav.setAttribute("class", "main-nav");
    }
});
const mobileNavigation = () => {
    const menuBtn = document.querySelector(".header__bars");
    const mobileMenu = document.querySelector(".mobile__navigation");
    const mobileLinks = document.querySelectorAll(".menu-links");

    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
        mobileMenu.style.display = "flex";
        document.body.style.overflowY = "hidden";
        }else {
        mobileMenu.style.display = "none";
        document.body.style.overflowY = "auto";
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.style.display = "none";
        document.body.style.overflowY = "auto";
        });
    });
    
};
mobileNavigation();


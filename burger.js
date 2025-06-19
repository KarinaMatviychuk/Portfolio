const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeMenuButton = document.getElementById("close-menu");
const menuLinks = document.querySelectorAll("#menu a");

function openMenu() {
    menu.classList.add("show");
    overlay.classList.add("show");
    burger.classList.add("burger-active");
}

function closeMenu() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
    burger.classList.remove("burger-active");
}

burger.addEventListener("click", function(e) {
    e.stopPropagation();
    openMenu();
});

closeMenuButton.addEventListener("click", function() {
    closeMenu();
});

overlay.addEventListener("click", function() {
    closeMenu();
});

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        closeMenu();
    });
});

// Закриття при кліку поза меню (резервне)
document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
    }
});

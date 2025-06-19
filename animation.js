document.addEventListener("DOMContentLoaded", function () {
    const photo = document.querySelector(".my-photo");
    const intro = document.querySelector(".introduction");

    // Затримка, щоб додати плавний ефект
    setTimeout(() => {
        photo.classList.add("slide-in");
        intro.classList.add("slide-in");
    }, 200);
});
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const closeButtons = document.querySelectorAll(".popup-overlay .close-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const popupId = this.getAttribute("data-popup");
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = "flex";
                document.body.classList.add("popup-open");
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            this.closest(".popup-overlay").style.display = "none";
            document.body.classList.remove("popup-open");
        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle) { // Adiciona verificação para evitar erros
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeMenu = document.getElementById("close-menu");

    // Abre o menu ao clicar no botão ☰
    menuToggle.addEventListener("click", function() {
        sidebar.style.left = "0";
    });

    // Fecha o menu ao clicar no botão X
    closeMenu.addEventListener("click", function() {
        sidebar.style.left = "-250px";
    });
});

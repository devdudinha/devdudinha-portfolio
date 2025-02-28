document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector(".menu-container");
    const menuToggle = document.getElementById("menu-toggle");
    const menuBackdrop = document.querySelector(".menu-backdrop");

    if (menuToggle) { // Adiciona verificação para evitar erros

        // Adiciona o evento de abrir o menu
        menuToggle.addEventListener("click", function () {
            menuContainer.classList.toggle("active");
        });

        // Adiciona o evento de fechar o menu (ao apertar do lado de fora do menu)
        menuBackdrop.addEventListener("click", function () {
            menuContainer.classList.remove("active");
        });
    }

    // Adiciona o evento de fechar o menu ao clicar em um botão do menu lateral
    const sidebarButtons = document.querySelectorAll(".sidebar a");
    
    sidebarButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            menuContainer.classList.remove("active");
        });
    });
});

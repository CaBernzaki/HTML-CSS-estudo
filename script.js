window.onscroll = function() {
    let btn = document.getElementById("btnTopo");
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Função para rolar suavemente ao topo
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// let currentIndex = 0;
// const images = document.querySelectorAll(".carousel-images img");
// const totalImages = images.length;
// const imagesPerPage = 3;  // Número de imagens que você quer mostrar por vez

// function moveCarousel(direction) {
//   // Calcula o novo índice após clicar nos botões de navegação
//   currentIndex += direction;

//   // Garantir que o índice não ultrapasse os limites do carrossel
//   if (currentIndex < 0) {
//     currentIndex = 0; // Não permite navegar para imagens anteriores
//   } else if (currentIndex > totalImages - imagesPerPage) {
//     currentIndex = totalImages - imagesPerPage; // Não permite passar da última imagem
//   }

//   updateCarousel();
// }

// function updateCarousel() {
//   const offset = -currentIndex * (100 / imagesPerPage); // Calcula o deslocamento
//   document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
// }

// updateCarousel();  // Inicializa o carrossel com a posição correta

// Sélection de la modal et de l'image à l'intérieur
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");

// Sélection de toutes les images de la galerie
const galleryImages = document.querySelectorAll(".gallery-item");

// Boucle sur chaque image pour ajouter un gestionnaire d'événements
galleryImages.forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Gestion de la fermeture de la modal
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Fermer la modal lorsqu'on clique en dehors de l'image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Sélection des boutons de navigation
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Gestion du clic sur le bouton précédent
prevBtn.addEventListener("click", function () {
  showImage(-1); // Affiche l'image précédente
});

// Gestion du clic sur le bouton suivant
nextBtn.addEventListener("click", function () {
  showImage(1); // Affiche l'image suivante
});

// Fonction pour afficher l'image suivante ou précédente
function showImage(n) {
  const images = document.querySelectorAll(".gallery-item");
  let currentIndex = 0;

  // Trouver l'index de l'image actuellement affichée dans la modal
  for (let i = 0; i < images.length; i++) {
    if (modalImg.src === images[i].src) {
      currentIndex = i;
      break;
    }
  }

  // Calculer le nouvel index
  let newIndex = currentIndex + n;

  // Vérifier les limites de l'index
  if (newIndex >= images.length) {
    newIndex = 0; // Revenir à la première image si on atteint la fin
  } else if (newIndex < 0) {
    newIndex = images.length - 1; // Aller à la dernière image si on est au début
  }

  // Afficher la nouvelle image
  modalImg.src = images[newIndex].src;
}
// Fonction pour afficher l'image suivante ou précédente de manière circulaire
function showImage(n) {
  const images = document.querySelectorAll(".gallery-item");
  let currentIndex = 0;

  // Trouver l'index de l'image actuellement affichée dans la modal
  for (let i = 0; i < images.length; i++) {
    if (modalImg.src === images[i].src) {
      currentIndex = i;
      break;
    }
  }

  // Calculer le nouvel index
  let newIndex = (currentIndex + n) % images.length;

  // Gérer les cas où l'index devient négatif
  if (newIndex < 0) {
    newIndex = images.length - 1;
  }

  // Afficher la nouvelle image
  modalImg.src = images[newIndex].src;
}
function openModal() {
  document.body.classList.add("modal-open-body");
}

function closeModal() {
  document.body.classList.remove("modal-open-body");
}
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    closeModal(); // Appel de la fonction pour retirer la classe modal-open-body
  }
});

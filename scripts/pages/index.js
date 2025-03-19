   import {getPhotographers} from "../utils/dataConnection.js";
   import {displayData} from "../utils/userInterface.js";
   
   

//* Chargement des données et affichage des cartes au chargement de la page */


async function init() {
    const photographers = await getPhotographers();
    displayData(photographers);

}
  /* affichage page  */
init();  
document.body.innerHTML = `
<div class="photographer_section">
    <article>

        </article
</div>
`;

/**
* Sélectionne tous les articles (éléments interactifs) de la section
* Nous allons parcourir ces éléments et permettre la navigation avec le clavier
*/
const items = Array.from(document.querySelectorAll(".photographer_section article"));
let currentIndex = 0;

// Vérifie s'il y a des éléments et applique un focus sur le premier élément

/**
* Écoute les événements du clavier pour permettre la navigation
* - Flèches Droite/Bas : aller à l'élément suivant
* - Flèches Gauche/Haut : aller à l'élément précédent
* - Entrée : sélectionne l'élément en affichant une alerte
*/
document.addEventListener("keydown", (event) => {
console.log("Key pressed:", event.key);
if (items.length === 0) return;
items[currentIndex].classList.remove("focused-element"); // Supprime la bordure de l'élément actuel

if ((event.key === "ArrowRight" || event.key === "ArrowDown") && currentIndex < items.length - 1) {
    event.preventDefault();
    currentIndex++;
} else if ((event.key === "ArrowLeft" || event.key === "ArrowUp") && currentIndex > 0) {
    event.preventDefault();
    currentIndex--;
} else if (event.key === "Enter") {
    alert(`Vous avez sélectionné : ${items[currentIndex].querySelector("h2").textContent}`);
}

// Applique la mise en évidence sur le nouvel élément sélectionné
items[currentIndex].focus();
items[currentIndex].classList.add("focused-element");
});

/**
* Ajoute un style CSS pour voir clairement l'élément sélectionné
* - Une bordure bleue est appliquée sur l'élément actuellement actif
*/
document.head.insertAdjacentHTML("beforeend", `
<style>
.focused-element {
outline: 3px solid blue; /* Bordure bleue pour indiquer l'élément actif */
}
</style>
`);
elements.forEach((element) => {
    element.addEventListener('click', () => {
      if (element && element.textContent) {
        alert(`Vous avez sélectionné : ${element.textContent}`);
      } else {
        console.error('L’élément est null ou textContent est introuvable.');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.navigable');
    // Votre code ici
  });
  





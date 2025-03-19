//Mettre le code JavaScript lié à la page photographer.html/* imports fonctions  */

import { getPhotographers } from "../utils/dataConnection.js";
import { getMedia } from "../utils/dataConnection.js";
import { getUrl } from "../utils/userInterface.js";
import { displayHeaderPhotograph } from "../utils/userInterface.js";
import { displayMedia } from "../utils/userInterface.js";
import { displayPrice } from "../utils/userInterface.js";
import { displayMenuFilters } from "../utils/userInterface.js";
import { addLike } from "../utils/userInterface.js";

/* import class  */
import Lightbox from "../utils/lightBox.js"


async function initPage() {
    try{
    /* Id du photographge via l'URL */
    let identity = getUrl();
    console.log('Identity:', identity); //  vérifier l'identité
    if (isNaN(identity)) {
        throw new Error('Identité du photographe non valide');
    }


    /* données photographe et médias du photographe(id) */
    const photographData = await getPhotographers();
    const mediaData = await getMedia();
    console.log('Photograph Data:', photographData); //  vérifier les données photographes
    console.log('Media Data:', mediaData); //  vérifier les données médias

    /* prénom et prix du photographe */
    const photographer = photographData.filter(photograph => photograph.id == identity);
    if (photographer.length === 0) {
        throw new Error('Photographe non trouvé');
    }
    /* pour le répertoires des médias  */
    const firstName = photographer[0].name.split(' ')[0];
    const price = photographer[0].price;


    /* Filtrage des medias */
    const photographerMedias = mediaData.filter(media => media.photographerId == identity)
    console.log('Photographer Medias:', photographerMedias); //  vérifier les médias

    /*lightbox*/
    let lightbox = null;
    lightbox = new Lightbox(photographerMedias, firstName);
    //console.log("les médias :",photographerMedias );

    /* affichage en-tête du photographe , ces médias,  like et prix  */
    displayHeaderPhotograph(photographData, identity);
    displayMedia(photographerMedias, firstName, null, lightbox);
    displayPrice(photographerMedias, price, identity);


    /*écoute évènement clic menu filtre par la flèche  étendre/réduire */
    document.querySelector("#arrowDown").addEventListener("click", displayMenuFilters,displayHeaderPhotograph(photographData, identity),
    displayMedia(photographerMedias, firstName, null, lightbox),displayPrice(photographerMedias, price, identity));
    

    document.querySelector("#arrowUp").addEventListener("click", displayMenuFilters,displayHeaderPhotograph(photographData, identity),
    displayMedia(photographerMedias, firstName, null, lightbox),displayPrice(photographerMedias, price, identity));


    /*écoute évènement touche entrée clavier(Keycode 13) pour étendre/réduire 
    le menu des filtres  par les icônes flèches haut et bas*/
    document.querySelector("#arrowDown").addEventListener("keyup", (e) => {
        if (e.keyCode == "13") {
            displayMenuFilters();
            displayHeaderPhotograph(photographData, identity);
            displayMedia(photographerMedias, firstName, null, lightbox);
            displayPrice(photographerMedias, price, identity);

        }
    });
    document.querySelector("#arrowUp").addEventListener("keyup", (e) => {
        if (e.keyCode == "13") {
            displayMenuFilters();
  displayHeaderPhotograph(photographData, identity);
            displayMedia(photographerMedias, firstName, null, lightbox);
            displayPrice(photographerMedias, price, identity);

            
        }
    });
    /* écoute évènement clic icône coeurs de chaque cartes  pour incrémenter le nombre
    total de like  */
    let listDivLike = document.querySelectorAll("div.totalLikes");
    for (const like of listDivLike) {
        like.addEventListener("click", addLike);
    }
} 
catch (error) {
    console.error('Erreur lors de l\'initialisation de la page:', error);
}

}
/* affichage page */
initPage();




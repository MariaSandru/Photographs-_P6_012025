export function photographerFactory(data) {
    /* récupérer les valeurs des clés */
    const { name, portrait, city, country, tagline, price, id } = data;
    /* Création carte avec les valeurs récupérées */
    const article = `
    <div class="photographer_section" >
        <article>
            <a href= "./photographer.html?id=${id}" title="${name}">
                <img src="./assets/images/Photographers_ID_photos/${portrait}" class="portrait" alt="">
                <h2>${name}</h2>
            </a>
            <p>${city}, ${country}</p>
            <p class="bold">${tagline}</p>
            <p class="boldLight">${price}€/jour</p>
        </article>     
        
        
        </div>
    `;
   return article;
   


   const items = Array.from(document.querySelectorAll(".photographer_section article "));
   let currentIndex = 0;

 

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



}


 




/**
 * 1. Je récupére la section 3
 */
const section2 = document.querySelectorAll(".container")[1];
const section4 = document.querySelectorAll(".container")[3];

/**
 * 2. Je créer l'observer qui va excuter une function callback quand
 * l'element observé est aperçu dans l'écran.
 * A ce stade la nous n'avons pas encore défini d'element à
 * obeserver
 */
let observer = new IntersectionObserver(function(entries,observer){
   // console.log(entries,observer)

    /**
     * 3. Je vérifie si l'element est bien vu, cela évite d'executer la callback 
     * quand l'element sort de notre champs de vision
     * */ 
    if(entries[0].isIntersecting === true){
        const pourcentage_element_a_lecran = (entries[0].intersectionRatio*100).toFixed(2); 
        const sectionName = entries[0].target.lastElementChild.innerHTML;
        console.log(`Je te vois à ${pourcentage_element_a_lecran}% !`,sectionName)   
    }
},{
    threshold:0.5 //La fonction callback est executée si l'element est vu à 50%.
});


// 4. J'observe la section 3
observer.observe(section2);
observer.observe(section4);
/**
 * 1. Je récupére la section 3
 */
const section1 = document.querySelectorAll(".container")[0];
const section3 = document.querySelectorAll(".container")[2];
const section5 = document.querySelectorAll(".container")[4];

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
        const pourcentage_element_a_lecran = Math.round((entries[0].intersectionRatio*100)); 
        const sectionName = entries[0].target.lastElementChild.innerHTML;
        const section_titre = document.querySelector(".modal>.container__titre");
        section_titre.innerText = `Je vois la ${sectionName} à ${pourcentage_element_a_lecran}% `;
        console.log(`Je te vois à ${pourcentage_element_a_lecran}% !`,sectionName)   
    }
},{
    threshold:getArray100()//La fonction callback est executée a chaque 1% de decouverte du array
});


// 4. J'observe la section 3
observer.observe(section1);
observer.observe(section3);
observer.observe(section5);
//Je ne regarde pas la section 5


function getArray100(){
    return [...Array(100).keys()].map(it=>it/100) 
}
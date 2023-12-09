//Recuperer un HTMLElement 
//la methode 'getElementById' recupere un element en fournissant son 'id' - le div
let baliseZoneProposition0 = document.getElementById("zoneProposition")
console.log(baliseZoneProposition0.clientHeight)//grace au '.' on peut acceder aux proprietes de notre noeud

//methode 'querySelector' utilise l'ecriture CSS pour trouver un element - le span
let baliseZoneProposition1 = document.querySelector("#zoneProposition span")
console.log(baliseZoneProposition1)

//la methode 'querySelectorAll' permet de recuperer plusieurs elements - les inputs
let listeInputRadio = document.querySelectorAll(".zoneChoix input")
console.log(listeInputRadio)

//ici on a agit sur un HTMLElement
for (let i=0; i<listeInputRadio.length;i++){
    console.log(listeInputRadio[i])
}
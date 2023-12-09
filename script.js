/* 

console.log("hello, world") // ici 'hello,world' va s'afficher dans .html sur la console dans la page web outil de developpement/inspecter 

if ("mot ecrit" == "mot propose") {
    //on augmente le score d'un point
} else { //else est optionnel, on peut ne pas l'inclure, utilisation seulement en cas de besoin
    //rien ne se passe
} //utilisation de la condition if/else avec exemple d'algorithme

let motTapeOk = true
const motApplication = "Bonjour"
let motUtilisatrice = prompt("Entrez un mot :")
//prompt() cree un pop-up permettant l'interaction avec l'utilisateur

console.log(motUtilisatrice)

if (motUtilisatrice === motApplication) {
   console.log("Bravo, vous avez correctement tapé le mot")
} else {
   console.log("Échec, le mot n'est pas correct")
}

// les operateurs de comparaison : < inferieur a, <= inferieur ou egal a 
// === egal a, >+ superieur ou egal a, > superieur a, !== different de
// === comparer si deux elements ont la meme valeur

la condition switch permet de faire plusieurs if/else

 switch (motUtilisatrice) { //ici on teste la condition
    case motApplication:
        console.log("Bravo!")
        break //break sert a arreter le code
    case "Gredin":
        console.log("Rester correct !")
        break
    case "Mecreant":
        console.log("Rester correct !")
        break
    case "Vilain":
        console.log("Rester correct !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe")
} 

*/

/*

// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ["Gachalot", "Pétunia", "Serviette"]

let score = 0

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (listeMots[0] === motUtilisateur) {
    console.log("Bravo !")
    score++
}

// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", 
//cela permet de réutiliser la variable déclarée précédemment
motUtilisateur = prompt("Entrez le mot : " + listeMots[1])

if (listeMots[1] === motUtilisateur) {
    console.log("Bravo !")
    score++
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[2])

if (listeMots[2] === motUtilisateur) {
    console.log("Bravo !")
    score++
}

// Affichage du score de l'utilisateur
console.log("Vous avez obtenu un score de " + score + " sur 3")
*/

/*

//les boucles for, si on sait combien de fois l'action doit etre repetee
//la boucle while, quand l'action doit etre repetee jusqu'a la condition soit vraie

for (let compteur = 0; compteur <6; compteur+=1) { //les 2 3 instructions sont separees par des " ; "
    console.log(compteur)
} //entre { } se trouve le bloc de code qui sera execute a chaque tour de boucle
// let compteur = 0 ici nous definissions une nouvelle variable qui contient 0
//compteur<3 ceci est la condition d'arret
// compteur+=1

for (let i = 0; i < 6; i++){ //'i' veut dire indice ecriture rapide
    console.log(i) //ca revient au meme que la boucle qui declave compteur
}

//la boucle while repete la/les memes actions jusqu'a ce que la condition soit vraie
let i=0 //on declaire la variable i initialisee a zero

while (i<9){ //on met la condition d'arret
    console.log(i)
    i++ //on incremente i
} //quand on utilise la boucle while surtout ne pas oublier d'initialiser 
//la variable cqui servira de condition !!!

*/

/*

const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

const listeMots = ["Gachalot", "Pétunia", "Serviette"]

let score = 0

let choixListes = prompt("Choisissez entre la liste des phrases ou la liste des mots ?")

while (choixListes !== "phrases" && choixListes !== "mots") {

    choixListes = prompt("Avec quelles listes desirez-vous jouer ? mots ou phrases")
}

if (choixListes === "mots") {

    for (let i = 0; i < listeMots.length; i++) {

        let motUtilisateur = prompt("ENtrez le mot : " + listeMots[i])

        if (motUtilisateur === listeMots[i]) {

            score++
        }
    }

    console.log("Votre score est de : " + score + " sur " + listeMots.length)

} else {

    for (let i = 0; i < listePhrases.length; i++) {

        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])

        if (phraseUtilisateur === listePhrases[i])

            score++
    }

    console.log("Votre score est de : " + score + " sur " + listePhrases.length)
}

*/

/* les fonctions permette d'executer le code qu'elles contiennent, on leur
attribue un nom, et en les appelant le code contenu est execute, c'est un
bloc de code qui a un role specifique. la fonction permet de contenir
des informations, appelé parametre, retourner un resultat, effectuer une action
exemple de fonction, prompt() est une fonction qui prend en parametre la chaine
de caractere et retourne un resultat, la chaine de caractere tapée, et le
resultat est copie dans la variable qui la contient. */

function retournerMessageScore (score, nombreQuestions) {
    let message = "Votre score est de "+score+ " sur "+nombreQuestions
    return message
}

/* on commence par le mot-cle 'function' et le nom de la fonction, le mot-cle
ne sera plus reutilise une fois declaré comme avec les variables. entre (...) sont
indiqués les parametres envoyés a la fonction : score et nombreQuestions. 
Entre {...} on inclut le code, c'est le bloc de code qui sera executé quand la
fonction sera appelêe. Dans le bloc de code on trouve la variable 'let message'
et le code est finalisé avec le nouveau mot-clé 'return' qui signifie que la
fonction va retourner le contenu de message. Cette fonction crée ne produira 
aucun effet pour le moment, nous devons l'appeler pour qu'elle produise son effet.
*/

let nouveauMessage = retournerMessageScore(5, 10)
console.log(nouveauMessage)

/* - codez proprement: c'est a dire que crée des fonctions qui s'occupe de gerer
une tache particuliere, afficher, calculer, lancer une operation, initialiser, etc.

- Ecrire des fonctions courtes ne depassant pas 30 lignes, ca rendra la fonction clair
et son code sera court. On peut ecrire plusieurs sous-fonctions si elle contient
trops d'actions. 

- Nommez clairement vos fonctions, permettant de deviner son contenu,
dans ce cas utiliser des verbes pour nommer les fonctions.

- Nommez clairement les parametres dans les (..) de la fonction, permettant de
savoir quelle donnée mettre d'abord car l'ordre des parametres est important.
on peut rajouter un commentaire pour eviter les ambiguités.

- Organisez notre code en plusieurs fichiers : créer des fichiers pour organiser
les idées et faciliter les modifications. Inclure les fichiers dans un ordre
precis dans le fichier .html, l'ordre est important, en premier les elements
permettant l'execution des fonctions avant le fichier des fonctions dans le 
tag '<script src:...>' du .html .

- Les variables globales et les variables locales :

let monNombre = 1
// monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

function afficheUnNombre() {
    let monNombreLocal = 2
   // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
    console.log("Intérieur de la fonction : ")
    console.log(monNombre) // monNombre est accessible
    console.log(monNombreLocal) // monNombreLocal est accessible
}

afficheUnNombre()
console.log("Extérieur de la fonction : ")
console.log(monNombre) // monNombre est accessible
console.log(monNombreLocal) // monNombreLocal n’est pas accesssible

les variables globales sont accessible partout car elles ne sont pas dans un 
bloc de code. les variables locales sont seulement accessible dans le bloc
de code dans lequel elles sont declarées.

*/



let maListeFilms = ['titanic', 'orange range', 'photron'] // ceci est un tableau, une liste contenant des elements de meme thematique
console.log(maListeFilms[1]) // ici l'instruction/methode affiche le titre de l'element 1
maListeFilms.push('seigneur des anneaux') // ici la methode push(...) ajoute un nouvel element dans le tableau maListFilms
console.log(maListeFilms) // ici la methode consolelog(...) affiche tout les elements dans le tableau maListeFilms

let variableComplexe1 = ['pomme', 'cerise']
let variableComplexe2 = variableComplexe1 // ici c'est la copie de reference, tout changement dans tableau 1ou2 s'affectera sur 1ou2
let variableComplexe3 = [...variableComplexe1] // ici c'est la copie par valeur, tout changement dans 1ou3 n'affectera pas 1ou3

variableComplexe2.push('poire')

variableComplexe3.pop() // ici la methode .pop() supprime le dernier element du tableau variableComplexe3 automatiquement

console.log('variableComplexe1', variableComplexe1)
console.log('variableComplexe2', variableComplexe2)
console.log('variableComplexe3', variableComplexe3)

const monPersonnage = { // ici c'est la creation d'un object
    nom: 'Bruce',
    age: 40,
    hobbie:'sortir la nuit'
}

monPersonnage.couleurPreferee ='noir' // ici j'ajoute une nouvelle propriete avec une valeur

const afficheur = monPersonnage.nom // ici j'affecte la propriete .nom de l'object monPersonnage a la variable afficheur 

console.log(monPersonnage) // ici j'affiche l'object cree monPersonnage



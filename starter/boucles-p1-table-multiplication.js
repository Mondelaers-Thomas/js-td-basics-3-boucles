/* BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
   "Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
   "Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
   "Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
   1°) avec une boucle FOR
   2°) avec une boucle WHILE
*/

// avec FOR
// Commencez par demander à l'utilisateur la table de multiplication souhaitée et le nombre de valeurs à afficher
/*
const table = Number(prompt("Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"));
const howManyTime = Number(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"));

// Ensuite, utilisez une boucle FOR pour calculer et afficher les x premières valeurs de la table de multiplication
console.log(`Voici les ${howManyTime} premières valeurs de la table de multiplication par ${table} :`);

for(let i = 0; i <= howManyTime; i++){
    console.log(i * table);
}
 */
// avec WHILE
// Répétez le même processus avec une boucle WHILE, en demandant à nouveau la table de multiplication et le nombre de valeurs

const table = Number(prompt("Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"));
const howManyTime = Number(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"));
let counter = 0;
while(counter <= howManyTime){
    console.log(table * counter);
    counter++;
}
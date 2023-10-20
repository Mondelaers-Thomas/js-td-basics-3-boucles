/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/
/* 6.5. Boucles imbriquées
  On peut très bien imbriquer une boucle dans une boucle.
  Syntaxe :
    for (let i = ...; i ... ; i ...) {
      for (let j = ...; j ...; j ...) {
        // instructions qui font intervenir les deux compteurs i et j
      }
    }
  Principe de fonctionnement :
  C'est
    - d'abord la boucle interne qui boucle (c'est celle qui boucle le plus vite)
    - et puis la boucle externe (c'est celle qui boucle le plus lentement)
*/

/*
  Pour vous familiariser avec les boucles imbriquées :
  - Faites une table d'évolution des variables !
  - Écrivez l'expression à afficher dans le console.log d'une manière alternative,
    en utilisant le concept de template littéral.
*/
/*
    i     | i <= 2        | j     | j <= 5        | console.log(i,j) | j++    | i++
    i = 0 | 0 <= 2 (true) | j = 0 | 0 <= 5 (true) | affiche 0,0 | j passe à 1 | i reste à 0
    i = 0 | 0 <= 2 (true) | j = 1 | 1 <= 5 (true) | affiche 0,1 | j passe à 2 | i reste à 0
    i = 0 | 0 <= 2 (true) | j = 2 | 2 <= 5 (true) | affiche 0,2 | j passe à 3 | i reste à 0
    i = 0 | 0 <= 2 (true) | j = 3 | 3 <= 5 (true) | affiche 0,3 | j passe à 4 | i reste à 0
    i = 0 | 0 <= 2 (true) | j = 4 | 4 <= 5 (true) | affiche 0,4 | j passe à 5 | i reste à 0
    i = 0 | 0 <= 2 (true) | j = 5 | 5 <= 5 (true) | affiche 0,5 | j passe à 6 | i reste à 0
    i = 0 | 0 <= 2 (true) | j = 6 | 0 <= 5 (false) | sort de la boucle j et on retourne dans la i |  | i passe à 1
    i = 1 | 1 <= 2 (true) | j = 0 | 0 <= 5 (true) | affiche 1,0 | j passe à 1 | i reste à 1
    i = 1 | 1 <= 2 (true) | j = 1 | 1 <= 5 (true) | affiche 1,1 | j passe à 2 | i reste à 1
    i = 1 | 1 <= 2 (true) | j = 2 | 2 <= 5 (true) | affiche 1,2 | j passe à 3 | i reste à 1
    i = 1 | 1 <= 2 (true) | j = 3 | 3 <= 5 (true) | affiche 1,3 | j passe à 4 | i reste à 1
    i = 1 | 1 <= 2 (true) | j = 4 | 4 <= 5 (true) | affiche 1,4 | j passe à 5 | i reste à 1
    i = 1 | 1 <= 2 (true) | j = 5 | 5 <= 5 (true) | affiche 1,5 | j passe à 6 | i reste à 1
    i = 1 | 1 <= 2 (true) | j = 6 | 0 <= 5 (false) | sort de la boucle j et on retourne dans la i |  | i passe à 2
    i = 2 | 2 <= 2 (true) | j = 0 | 0 <= 5 (true) | affiche 2,0 | j passe à 1 | i reste à 2
    i = 2 | 2 <= 2 (true) | j = 1 | 1 <= 5 (true) | affiche 2,1 | j passe à 2 | i reste à 2
    i = 2 | 2 <= 2 (true) | j = 2 | 2 <= 5 (true) | affiche 2,2 | j passe à 3 | i reste à 2
    i = 2 | 2 <= 2 (true) | j = 3 | 3 <= 5 (true) | affiche 2,3 | j passe à 4 | i reste à 2
    i = 2 | 2 <= 2 (true) | j = 4 | 4 <= 5 (true) | affiche 2,4 | j passe à 5 | i reste à 2
    i = 2 | 2 <= 2 (true) | j = 5 | 5 <= 5 (true) | affiche 2,5 | j passe à 6 | i reste à 2
    i = 2 | 2 <= 2 (true) | j = 6 | 0 <= 5 (false) | sort de la boucle j et on retourne dans la i |  | i passe à 3
    on sort de la boucle i.
 */

for(let i = 0; i <= 2; i++){
    for(let j = 0; j <= 5; j++){
        console.log(`La valeur de la boucle "j" qui va le plus vite = ${j}.\nLa valeur de la boucle "i" qui va le moins vite = ${i}.`);
    }
}
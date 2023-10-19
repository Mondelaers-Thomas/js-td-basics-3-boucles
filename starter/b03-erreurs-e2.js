/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/* 
  6.3. Erreurs fréquentes
*/

/*
EXEMPLE 2 : Mauvaise manipulation du compteur d'une boucle FOR
- Vous devez écrire une boucle 'for' pour afficher les nombres de 1 à 5.
- Cependant, la tâche ici consiste à manipuler incorrectement le compteur.
- Dans le corps de la boucle 'for', faites tout ce qui est nécessaire pour incrémenter le compteur manuellement, comme s'il s'agissait d'une boucle 'while'.
- Essayez d'exécuter ce code dans un navigateur pour voir ce qui se passe, sans oublier d'expliquer les résultats.
--- Explication : la variable i est incrémentée de 2 à chaque tour de boucle car incrémentée une fois dans le compteur et une fois dans la boucle.
 Donc elle avance de 2 par 2 (0, 2, 4, ...).
CORRECTION :
- Dans une boucle 'for', le compteur est géré automatiquement.
- Vous n'avez pas besoin de manipuler le compteur manuellement comme dans une boucle 'while'.
- La boucle 'for' a déjà une initialisation, une condition et une étape intégrées, vous n'avez qu'à définir le corps de la boucle.

*/
//-- Mauvaise façon :
for(let i = 0; i <= 5; i++){
    console.log(i);
    i++;
}
//-- Bonne façon :
for(let i = 0; i <= 5; i++){
    console.log(i);
}



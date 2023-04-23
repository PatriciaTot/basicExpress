Un serveur basique avec Express.
======================================

## Auteur
Cette application a été créée par Patricia.

## Sujet
[Cliquer pour accéder au sujet](https://www.fil.univ-lille.fr/~routier/enseignement/licence/jsfs/tdtp/toy-express.html)

## Installation

    Cloner ce dépôt sur votre machine locale.
    Ouvrir un terminal dans le dossier de l'application.
    Exécuter la commande npm install pour installer les dépendances.
    Exécuter la commande npm start pour lancer l'application.

L'application sera disponible à l'adresse http://localhost:3000/.

## Fonctionnalités

L'application comporte deux parties :

### Partie 1 : Ressources statiques

La première partie de l'application permet de servir des ressources statiques telles que des images et des feuilles de style. Ces ressources sont accessibles depuis les chemins /first et /second. Le middleware statique d'Express est utilisé pour servir ces fichiers.

### Partie 2 : Données JSON

La seconde partie de l'application permet de récupérer des données JSON en utilisant la méthode GET. Les données JSON sont accessibles depuis les chemins /json et /json/random. Le chemin /json renvoie les paramètres de la requête sous forme d'un objet JSON. Le chemin /json/random renvoie un objet JSON avec une valeur aléatoire.
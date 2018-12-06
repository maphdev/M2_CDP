----------

__Documentation utilisateur pour la release [v0.3.0](https://github.com/maphdev/M2_CDP/releases/tag/v0.3.0).__

__Dernière mise à jour le 06/12/2018 à 21h26.__

----------

# Documentation Utilisateur

Cette documentation présente l'application ainsi que ses fonctionnalités.

## A propos de cdp

CDP est une application de gestion de projets SCRUM. Pour le moment, elle permet à une équipe de développeurs de gérer le backlog ainsi que les différents sprints d'un projet.

## Type d'utilisateurs

Il existe 2 types d'utilisateurs :
- utilisateur non authentifié dit "visiteur" : cet utilisateur a accès à l'intégralité des projets mais sans aucun droit de modifications ou suppression.
- utilisateur authentifié dit "développeur" : cet utilisateur a accès à l'intégralité des projets et avec des droits de modifications ou suppression sur les projets auxquels il appartient.

## Interface

L'application est divisée en 3 parties.
- La page d'accueil listant l'ensemble des projets
- la partie identification / création de compte accessible via le menu de l'application
- la partie projet regroupant le backlog, les sprints d'un projet et les paramètres du projet sélectionné.

## Fonctionnalités

##### Créer un projet

Pour créer un projet, vous devez d'abord être authentifié. Une fois authentifié,  un bouton "Créer un projet" apparaît sur la page d'accueil. Cliquez sur ce bouton et complétez le formulaire de création de projet. En validant, un nouveau projet est créé et celui-ci apparaît immédiatement sur la page d'accueil. Un nouveau projet comprend un backlog vide ainsi qu'un premier sprint vide.

##### Créer un sprint

Pour créer un sprint, vous devez d'abord être authentifié. Une fois authentifié, sur la page du projet, passez la souris sur l'item "Sprints" pour faire dérouler un sous-menu. Cliquez sur l'option "Créer un sprint". Un nouveau sprint vide est créé.

##### Ajouter un développeur au projet

Pour ajouter un développeur à un projet, vous devez d'abord être authentifié. Une fois authentifié, sur la page du projet, cliquez sur "Paramètres" pour accéder aux paramètres d'un projet. Dans la section "Liste des développeurs", cliquez sur "Ajouter +" et complétez le formulaire d'ajout de développeur. En validant, le dévelopeur en question est rajouté à la liste des développeurs du projet courant.

##### Supprimer un développeur d'un projet

Pour supprimer un développeur d'un projet, vous devez d'abord être authentifié. Une fois authentifié, sur la page d'un projet, cliquez sur "Paramètres" pour accéder aux paramètres d'un projet. Dans la section "Liste des développeurs", cliquez sur le nom d'un développeur pour supprimer le développeur en question de la liste des développeurs du projet.

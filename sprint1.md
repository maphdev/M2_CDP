# Sprint 1
## Liste des US assignées au sprint 1
|   ID  |   Description |   Priorité    |   Difficulté      | Sprint correspondant  |
|:-----:|:--------------|:-------------:|:-----------------:|:---------------------:|
|1|En tant que __visiteur__, je peux créer un compte développeur, afin de gérer mes projets Scrum. Il faudra fournir un nom d'utilisateur, un mot de passe et une adresse email.|MEDIUM| 3 | 1 |
|2|En tant que __développeur__, je peux me connecter/me déconnecter de mon compte.|MEDIUM| 2 | 1 |
|3|En tant que __développeur__, je peux créer un nouveau projet Scrum. Il faudra fournir un nom pour ce projet, une description, la durée d'un sprint et la date de début du premier sprint. |HIGH| 1 | 1 |
|4|En tant que __développeur__, je peux ajouter un autre développeur à un projet existant. Il faudra fournir le nom d'utilisateur de ce développeur.|MEDIUM| 1 | 1 |
|5|En tant que __développeur/visiteur__, je peux consulter la liste des projets existants.|HIGH| 1 | 1 |
|6|En tant que __développeur/visiteur__, je peux consulter la page dédiée à un projet. Cette page permet de récapituler les informations permettant de gérer un projet Scrum (Backlog, Sprints, Tâches, Burn Down Chart).|HIGH| 2 | 1 |
|7|En tant que __développeur__, je peux modifier les paramètres généraux d'un projet, ou le supprimer. Les modifications concernent le nom du projet, sa description, la durée d'un sprint et la date de début du premier sprint.|HIGH| 1 | 1 |

## Architecture

L'application sera réalisée selon une architecture 2-tiers :
* le front-end en HTML/CSS/JavaScript,
* le back-end avec Firebase.

## Liste des composants associés
### Front-end
* __[A]__ Page HTML contenant la liste des projets
    * accès à __(D)__,
    * si on est déconnecté, accès à __(B)__ et __(C)__
* __[B]__ Page HTML de connexion
    * si la connexion est valide, retour à la page précédente,
    * accès à __(A)__, __(C)__
* __[C]__ Page HTML de création de compte
    * si la création est validée, retour à la page précédente en étant connecté,
    * accès à __(A)__, __(B)__
* __[D]__ Page HTML dédiée à un projet
    * accès à __(A)__, __(E)__,
    * si on est déconnecté, accès à __(B)__ et __(C)__
* __[E]__ Page HTML dédiée aux paramètres d'un projet
    * accès à __(A)__, __(D)__,
    * si on est déconnecté, accès à __(B)__ et __(C)__
* __[F]__ Page HTML pour la création d'un projet
    * accès à __(A)__

### Back-end
* __[G]__ Fichier JavaScript pour gérer la base de donnée Firebase
    * création de compte
    * connexion/déconnexion
    * ajout de projets
    * liste des projets existants
    * modifier un projet
    * supprimer un projet
    * ajouter un développeur à un projet

## Liste des tâches associées

Composant __(A)__ :
  * définition : nommage du fichier _"index.html"_ (0.5 j/h)
  * réalisation : implémentation de _"index.html"_ (0.5 j/h)

Composant __(B)__ :
  * définition : nommage du fichier _"login.html"_ (0.5 j/h)
  * réalisation : implémentation de _"login.html"_ (0.5 j/h)

Composant __(C)__ :
  * définition : nommage du fichier _"createAccount.html"_ (0.5 j/h)
  * réalisation : implémentation de _"createAccount.html"_ (0.5 j/h)

Composant __(D)__ :
  * définition : nommage du fichier _"project.html"_ (0.5 j/h)
  * réalisation : implémentation de _"project.html"_ (0.5 j/h)

Composant __(E)__ :
  * définition : nommage du fichier _"settings.html"_ (0.5 j/h)
  * réalisation : implémentation de _"settings.html"_ (0.5 j/h)

Composant __(F)__ :
  * définition : nommage du fichier _"createProject.html"_ (0.5 j/h)
  * réalisation : implémentation de _"createProject.html"_ (0.5 j/h)

Composant __(G)__ :
  * définition : (0.5 j/h)
    * définition de la structure de la base de donnée (arborescence du fichier json)
    * nommage du fichier _"firebase.js"_
    * détermination des fonctions de requêtes et des paramètres
  * réalisation : implémentation de _"firebase.js"_ (1.5 j/h)

US __(1)__ :
  * écriture : 
  * exécution :

US __(2)__ :
  * écriture :
  * exécution :

US __(3)__ :
  * écriture :
  * exécution :

US __(4)__ :
  * écriture :
  * exécution :

US __(5)__ :
  * écriture :
  * exécution :

US __(6)__ :
  * écriture :
  * exécution :

US __(7)__ :
  * écriture :
  * exécution :

__Total__ : 2 \* 7 composants + 2 \* 7 US = __28 tâches__

## US à rajouter

En tant que développeur, je peux modifier la liste des projets auxquels je suis associé.
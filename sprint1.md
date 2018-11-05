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

## Liste des composants associés

1. Page HTML contenant la liste des projets
    * accès à __(4)__, __(2)__ et __(3)__ si déconnecté
2. Page HTML de connexion 
    * si la connexion est valide, retour à la page précédente, accès à __(1)__, __(3)__
3. Page HTML de création de compte 
    * si la création est validée, retour à la page précédente en étant connecté, accès à __(1)__, __(2)__
4. Page HTML dédiée à un projet 
    * accès à __(1)__, __(5)__, __(2)__ et __(3)__ si déconnecté
5. Page HTML dédiée aux paramètres d'un projet 
    * accès à __(1)__, __(4)__, __(2)__ et __(3)__ si déconnecté
6. 
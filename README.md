# Conduite de Projet : outil de gestion de projets Scrum

## BackLog
|   ID  |   Description |   Priorité    |   Difficulté      | Sprint correspondant  |
|:-----:|:--------------|:-------------:|:-----------------:|:---------------------:|
|1|En tant que __visiteur__, je peux créer un compte développeur, afin de gérer mes projets Scrum. Il faudra fournir un nom d'utilisateur, un mot de passe et une adresse email.|MEDIUM| 3 | 1 |
|2|En tant que __développeur__, je peux me connecter/me déconnecter de mon compte.|MEDIUM| 2 | 1 |
|3|En tant que __développeur__, je peux créer un nouveau projet Scrum. Il faudra fournir un nom pour ce projet, une description, la durée d'un sprint et la date de début du premier sprint. |HIGH| 1 | 1 |
|4|En tant que __développeur__, je peux ajouter un autre développeur à un projet existant. Il faudra fournir le nom d'utilisateur de ce développeur.|MEDIUM| 1 | 1 |
|5|En tant que __développeur/visiteur__, je peux consulter la liste des projets existants.|HIGH| 1 | 1 |
|6|En tant que __développeur/visiteur__, je peux consulter la page dédiée à un projet. Cette page permet de récapituler les informations permettant de gérer un projet Scrum (Backlog, Sprints, Tâches, Burn Down Chart).|HIGH| 2 | 1 |
|7|En tant que __développeur__, je peux modifier les paramètres généraux d'un projet, ou le supprimer. Les modifications concernent le nom du projet, sa description, la durée d'un sprint, la date de début du premier sprint et les développeurs associés au projet (ajout/suppression d'un développeur).|HIGH| 1 | 1 |
|8|En tant que __développeur__, je peux ajouter une User Story au Backlog. Il faudra fournir sa description et son niveau de difficulté. Un autre champ priorité sera rempli par le PO ultérieurement. L'identifiant sera généré automatiquement.|HIGH| 2 | 2 |
|9|En tant que __développeur__, je peux modifier/supprimer une User Story dans le Backlog. On pourra modifier sa description, son niveau de difficulté ou sa priorité.|HIGH| 1 | 2 |
|10|En tant que __développeur__, je peux créer un sprint Scrum afin d'y ajouter des tâches. Un nouveau sprint a la même durée que les sprints précédents. Un sprint Scrum correspond à un tableau à 3 colonnes ("_To Do_", "_Ongoing_", "_Done_"). Par défaut, un sprint vide est généré automatiquement. |LOW| 1 | 2 |
|11|En tant que __développeur__, je peux créer une tâche dans un sprint. Il faudra fournir son nom et sa description ainsi que son chiffrage en jour/homme. Deux autres champs, dépendances et lien avec une User Story, sont optionnels. Par défaut toute nouvelle tâche se trouve dans la colonne "_To Do_". |LOW| 1 | 2 |
|12|En tant que __développeur__, je peux modifier/supprimer une tâche dans un sprint. On pourra modifier son nom, sa description, son chiffrage en jour/homme, ses dépendances ou son lien avec une User Story. |LOW| 1 | 3 |
|13|En tant que __développeur/visiteur__, je peux consulter le tableau d'avancement ("_To Do_", "_Ongoing_", "_Done_") des tâches d'un sprint.  |LOW| 3 | 3 |
|14|En tant que __développeur__, je peux modifier l'état d'avancement d'une tâche en faisant passer une tâche de "To Do" à "_Ongoing_", et de "_Ongoing_" à "_Done_" (et inversement). |LOW| 3 | 3 |
|15|En tant que __visiteur__, je peux avoir accès à tous les projets, ainsi qu'à l'avancement des sprints, mais sans droits de modification. |LOW| 1 | 3 |
|16|En tant que __développeur/visiteur__, je peux consulter le graphique de type _Burn Down Chart_ sur la page dédiée à celui-ci.|LOW|3|3|
|17|En tant que __développeur__, je peux désinscrire un développeur associé à un projet auquel je participe.|MEDIUM|1|3|

## Annexe
### Définitions

(1) __Application__ : outil de gestion de projets Scrum.

(2) __Visiteur__ : utilisateur de l'application non identifié et ne possédant qu'un droit de lecture sur l'ensemble de l'application et des projets.

(3) __Développeur__ : utilisateur identifié de l'application et possédant des droits de gestion (lecture/écriture/modification) sur les projets Scrum auxquels il est associé.

(4) __Backlog__ : liste ordonnée d'User Stories. Vide par défaut, c'est aux développeurs de rajouter des User Stories.

(5) __User Story (US)__ : description courte et simple d'une fonctionnalité du point de vue de la personne qui désire la nouvelle capacité, habituellement un utilisateur ou un client du système. Ligne du Backlog, elle est composée d'un _id_ généré automatiquement, d'une _description_ à fournir à la création, d'une _priorité_ laissée vide à la création et modifiée plus tard par le _PO_, et d'une _difficulté_ relative par rapport aux autres issues.

(6) __Sprints__ : période de temps fixe et répétable au cours de laquelle un produit fini de la plus haute valeur possible est créé. Lors de la création d'un projet, un premier sprint vide est créé par défaut, avec une durée et une date de début de sprint définies par le créateur du projet. Les développeurs peuvent créer un nouveau sprint, de la même durée que les sprints précédents. Chaque sprint est représenté par un tableau à trois colonnes _To Do_, _On Going_ et _Done_. Par défaut, les tâches créées sont disposées dans la colonne _To Do_. Les développeurs peuvent actualiser l'état d'une tâche en faisant passer les tâches d'une colonne à une autre.

(7) __Tâches__ : travail technique qu'une équipe de développement accomplit afin de compléter un élément du Backlog. Une tâche est définie par son _nom_, sa _description_ et son _chiffrage en jour/homme_. Par défaut, les tâches sont dans la colonne _To Do_ du sprint dont elles font partie.

(8) __Burn Down Chart__ : Graphique qui montre le travail terminé par période de temps par rapport au taux d'achèvement prévu pour la version actuelle du projet. Son but est de permettre au projet d'être sur la bonne voie pour livrer la solution attendue dans les délais souhaités. Le graphique sera généré automatiquement en fonction de la durée des sprints et du chiffrage des tâches relatives à ce sprint.

(9) __PO__ : _Product Owner_, membre de l'équipe Scrum dont la responsabilité principale est de maximiser la valeur du produit résultant du travail de l'équipe de développement.

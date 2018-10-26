# M2_CDP
# BackLog
|   ID  |   Description |   Priorité    |   Difficulté      | Sprint correspondant  |
|:-----:|:--------------|:-------------:|:-----------------:|:---------------------:|
|1|En tant que __visiteur__, je peux créer un compte développeur, afin de gérer mes projets Scrum. Il faudra fournir un nom d'utilisateur, un mot de passe et une adresse email.|MEDIUM| 3 | 1 |
|2|En tant que __développeur__, je peux me connecter/me déconnecter de mon compte.|MEDIUM| 2 | 1 |
|3|En tant que __développeur__, je peux créer un nouveau projet Scrum. Il faudra fournir un nom pour ce projet ainsi qu'une description. |HIGH| 1 | 1 |
|4|En tant que __développeur__, je peux ajouter un autre développeur à un projet existant. Il faudra fournir le nom d'utilisateur de ce développeur.|MEDIUM| 1 | 1 |
|5|En tant que __développeur/visiteur__, je peux consulter la liste des projets existants.|HIGH| 1 | 1 |
|6|En tant que __développeur/visiteur__, je peux consulter la page dédiée à un projet. Cette page permet de récapituler les informations permettant de gérer un projet Scrum (Backlog, Sprints, Tâches, Burn Down Chart).|HIGH| 2 | 1 |
|7|En tant que __développeur__, je peux modifier les paramètres généraux d'un projet, ou le supprimer. La modification concerne le nom du projet et sa description.|HIGH| 1 | 1 |
|8|En tant que __développeur__, je peux ajouter une User Story au Backlog. Il faudra fournir sa description et son niveau de difficulté. Un autre champ priorité sera rempli par le PO ultérieurement. L'identifiant sera généré automatiquement.|HIGH| 2 | 1 |
|9|En tant que __développeur__, je peux modifier/supprimer une User Story dans le Backlog. On pourra modifier sa description, son niveau de difficulté ou sa priorité.|HIGH| 1 | 1 |
|10|En tant que __développeur__, je peux créer un sprint Scrum afin d'y ajouter des tâches. Il faudra fournit la durée des sprints ainsi que la durée d'un sprint. Un sprint Scrum correspond à un tableau à 3 colonnes ("_To Do_", "_Ongoing_", "_Done_"). Par défaut, un sprint vide est généré automatiquement. |LOW| 1 | 1 |
|11|En tant que __développeur__, je peux modifier un sprint. Cette modification concerne la durée d'un sprint et la date de début du sprint.|LOW|1|1|
|12|En tant que __développeur__, je peux créer une tâche dans un sprint. Il faudra fournir son nom et sa description ainsi que son chiffrage en jour/homme. Deux autres champs, dépendances et lien avec une user story, sont optionnels. Par défaut toute nouvelle tâche se trouve dans la colonne "_To Do_". |LOW| 1 | 1 |
|13|En tant que __développeur__, je peux modifier/supprimer une tâche dans un sprint. On pourra modifier son nom, sa description, son chiffrage en jour/homme, ses dépendances ou son lien avec une user story. |LOW| 1 | 1 |
|14|En tant que __développeur/visiteur__, je peux consulter le tableau d'avancement ("_To Do_", "_Ongoing_", "_Done_") des tâches d'un sprint.  |LOW| 3 | 1 |
|15|En tant que __développeur__, je peux modifier l'état d'avancement d'une tâche en faisant passer une tâche de "To Do" à "_Ongoing_", et de "_Ongoing_" à "_Done_" (et inversement). |LOW| 3 | 1 |
|16|En tant que __visiteur__, je peux avoir accès à tous les projets, ainsi qu'à l'avancement des sprints, mais sans droits de modification. |LOW| 1 | 1 |
|17|En tant que __développeur/visiteur__, je peux consulter le graphique de type _Burn Down Chart_ sur la page dédiée à celui-ci.|LOW|3|1|

# Annexe
## Définitions

(1) __Application__ : outil de gestion de projets Scrum.

(2) __Visiteur__ : utilisateur de l'application non identifié et ne possédant qu'un droit de lecture sur l'ensemble de l'application et des projets.

(3) __Développeur__ : utilisateur identifié de l'application et possédant des droits de gestion (lecture/écriture/modification) sur les projets Scrum auxquels il est associé.

(4) __Backlog__ : liste ordonnée d'User Stories. Vide par défaut, c'est aux développeurs de rajouter des User Stories.

(5) __User Story (US)__ : description courte et simple d'une fonctionnalité du point de vue de la personne qui désire la nouvelle capacité, habituellement un utilisateur ou un client du système. Ligne du Backlog, elle comprend les champs _id_, _description_, _priorité_ et _difficulté_.

(6) __Sprints__ :

(7) __Tâches__ :

(8) __Burn Down Chart__ : Graphique qui montre le travail terminé par période de temps par rapport au taux d'achèvement prévu pour la version actuelle du projet. Son but est de permettre au projet d'être sur la bonne voie pour livrer la solution attendue dans les délais souhaitée.

(9) __PO__ : _Product Owner_, membre de l'équipe Scrum dont la responsabilité principale est de maximiser la valeur du produit résultant du travail de l'équipe de développement.

## Projet

Un projet SCRUM est constitué des composantes suivantes :
*   Un __backlog__ (vide par défaut),
*   Des __sprints__ (un premier sprint vide est créé par défaut),
*   Pour chaque sprint, un __tableau__ _To Do_, _On Going_ et _Done_ avec les tâches créées disposées dans la colonne _To Do_ par défaut,
*   Un graphique de type __Burn Down Chart__, qui sera généré automatiquement en fonction de la durée des sprints et du chiffrage des tâches relatives à ce sprint.

Un projet SCRUM aura pour paramètres :
*   Le nom du projet,
*   La durée des sprints,
*   La date de début du premier sprint.

Une issue d'un backlog aura comme composantes :
*   Un __ID__ généré automatiquement,
*   Une __description__ à fournir à la création,
*   Une __priorité__ laissée vide à la création, modifiée plus tard par le _PO_,
*   Une __difficulté__ relative par rapport aux autres issues.

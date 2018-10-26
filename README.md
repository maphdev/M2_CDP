# M2_CDP
# BackLog
|   ID  |   Description |   Priorité    |   Difficulté      | Sprint correspondant  |
|:-----:|:--------------|:-------------:|:-----------------:|:---------------------:|
|1|En tant que __visiteur__, je peux me créer un compte développeur, afin de gérer mes projets Scrum.|MEDIUM| 3 | 1 |
|2|En tant que __développeur__, je peux me connecter/me déconnecter de mon compte.|MEDIUM| 2 | 1 |
|3|En tant que __développeur__, je peux créer un nouveau projet Scrum. Il faudra fournir un nom pour ce projet. |HIGH| 1 | 1 |
|4|En tant que __développeur__, je peux ajouter un autre développeur à un projet existant. Il faudra fournir le nom d'utilisateur de ce développeur.|MEDIUM| 1 | 1 |
|5|En tant que __développeur/visiteur__, je peux accéder à la liste des projets existants.|HIGH| 1 | 1 |
|6|En tant que __développeur/visiteur__, je peux accéder à la page dédiée à un projet. Cette page permettra de récapituler les informations permettant de gérer un projet Scrum (Backlog, Sprint, Tasks, Burn Down Chart).|HIGH| 2 | 1 |
|7|En tant que __développeur__, je peux modifier/supprimer un projet. La modification concerne le nom du projet, la durée des sprints, et la date de début du premier sprint.|HIGH| 1 | 1 |
|8|En tant que __développeur__, je peux ajouter une issue au backlog. Il faudra fournir sa description et son niveau de difficulté. Un autre champ priorité sera rempli par le PO ultérieurement. L'identifiant sera généré automatiquement.|HIGH| 2 | 1 |
|9|En tant que __développeur__, je peux modifier/supprimer une issue dans le backlog. On pourra modifier sa description, son niveau de difficulté ou sa priorité.|HIGH| 1 | 1 |
|10|En tant que __développeur__, je peux créer un sprint Scrum afin d'y ajouter des tâches. Un sprint Scrum correspond à un tableau à 3 colonnes ("_To Do_", "_Ongoing_", "_Done_"). Par défaut, un sprint vide est généré automatiquement. |LOW| 1 | 1 |
|11|En tant que __développeur__, je peux créer une tâche dans un sprint. Il faudra fournir son nom et sa description et son chiffrage en jour/homme. Deux autres champs, dépendances et lien avec une user story, sont optionnels. Par défaut toute nouvelle tâche se trouve dans la colonne "_To Do_". |LOW| 1 | 1 |
|12|En tant que __développeur__, je peux modifier/supprimer une tâche dans un sprint. On pourra modifier son nom, sa description, son chiffrage en jour/homme, ses dépendances ou son lien avec une user story. |LOW| 1 | 1 |
|13|En tant que __développeur/visiteur__, je peux suivre l'avancement des tâches d'un sprint.  |LOW| 3 | 1 |
|14|En tant que __développeur__, je peux modifier l'état d'avancement d'une tâche en faisant passer une tâche de "To Do" à "_Ongoing_", et de "_Ongoing_" à "_Done_" (et inversement). |LOW| 3 | 1 |
|15|En tant que __visiteur__, je peux avoir accès à tous les projets, ainsi qu'à l'avancement des sprints, mais sans droits de modification. |LOW| 1 | 1 |

# Annexe

Un projet SCRUM est constitué des composantes suivantes :
*   Un __backlog__ (vide par défaut),
*   Des __sprints__ (un premier sprint vide est créé par défaut),
*   Pour chaque sprint, un __tableau__ _To Do_, _On Going_ et _Done_ avec les tâches créées disposées dans la colonne _To Do_ par défaut,
*   Un graphique de type __Burn Down Chart__.

Un projet SCRUM aura pour paramètres :
*   Le nom du projet,
*   La durée des sprints,
*   La date de début du premier sprint.

Une issue d'un backlog aura comme composantes :
*   Un __ID__ généré automatiquement,
*   Une __description__ à fournir à la création,
*   Une __priorité__ laissée vide à la création, modifiée plus tard par le _PO_,
*   Une __difficulté__ relative par rapport aux autres issues.




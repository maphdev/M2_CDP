# Sprint 2
## Liste des US assignées au sprint 2
|   ID  |   Description |   Priorité    |   Difficulté      | Sprint correspondant  |
|:-----:|:--------------|:-------------:|:-----------------:|:---------------------:|
|4|En tant que __développeur__, je peux ajouter un autre développeur à un projet existant. Il faudra fournir le nom d'utilisateur de ce développeur.|MEDIUM| 1 | 1 |
|7|En tant que __développeur__, je peux modifier les paramètres généraux d'un projet, ou le supprimer. Les modifications concernent le nom du projet, sa description, la durée d'un sprint et la date de début du premier sprint.|HIGH| 1 | 1 |
|8|En tant que __développeur__, je peux ajouter une User Story au Backlog. Il faudra fournir sa description et son niveau de difficulté. Un autre champ priorité sera rempli par le PO ultérieurement. L'identifiant sera généré automatiquement.|HIGH| 2 | 2 |
|9|En tant que __développeur__, je peux modifier/supprimer une User Story dans le Backlog. On pourra modifier sa description, son niveau de difficulté ou sa priorité.|HIGH| 1 | 2 |
|10|En tant que __développeur__, je peux créer un sprint Scrum afin d'y ajouter des tâches. Un nouveau sprint a la même durée que les sprints précédents. Un sprint Scrum correspond à un tableau à 3 colonnes ("_To Do_", "_Ongoing_", "_Done_"). Par défaut, un sprint vide est généré automatiquement. |LOW| 1 | 2 |
|11|En tant que __développeur__, je peux créer une tâche dans un sprint. Il faudra fournir son nom et sa description ainsi que son chiffrage en jour/homme. Deux autres champs, dépendances et lien avec une User Story, sont optionnels. Par défaut toute nouvelle tâche se trouve dans la colonne "_To Do_". |LOW| 1 | 2 |

## Liste des composants associés
### Front-end
Rappel des pages existantes :
* __[A]__ Page HTML contenant la liste des projets
    * si on est connecté, accès à __(D)__,
    * si on n'est pas connecté, accès à  __(B)__,  __(C)__ et __(D)__,
* __[B]__ Page HTML de connexion
    * si la connexion est valide, retour à la page __(A)__,
    * accès à __(A)__, __(C)__
* __[C]__ Page HTML de création de compte
    * si la création est validée, retour à la page __(A)__,
    * accès à __(A)__, __(B)__
* __[E]__ Page HTML dédiée aux paramètres d'un projet
    * si on est connecté, accès à __(A)__, __(D)__,
    * si on est déconnecté, accès à __(A)__, __(B)__, __(C)__ et __(D)__
* __[F]__ Page HTML pour la création d'un projet
    * accès à __(A)__

Nouvelles pages (+ page __(D)__ modifiée) :

* __[D]__ Page HTML dédiée à un projet
    * si on est connecté, accès à __(A)__, __(E)__, __(G)__ et __(I)__,
    * si on est déconnecté, accès à __(A)__, __(E)__, et __(B)__
* __[H]__ Page HTML d'ajout d'une US au BackLog
    * accès à __(A)__ et __(D)__
* __[I]__ Page HTML d'ajout d'une tâche
    * accès à __(A)__ et __(D)__

    ## Liste des tâches associées

    Composant __(H)__ :
      * définition : nommage du fichier _"addUS.ejs"_ (0.5 j/h)
      * réalisation : implémentation de _"addUS.ejs"_ (0.5 j/h)

    Composant __(I)__ :
      * définition : nommage du fichier _"addTask.ejs"_ (0.5 j/h)
      * réalisation : implémentation de _"addTask.ejs"_ (0.5 j/h)

    US __(4)__ :
      * écriture :
      * exécution :

    US __(7)__ :
      * écriture :
      * exécution :

    US __(8)__ :
      * écriture :
      * exécution :

    US __(9)__ :
      * écriture :
      * exécution :

    US __(10)__ :
      * écriture :
      * exécution :

    US __(11)__ :
      * écriture :
      * exécution :

    __Total__ : 2 \* 2 composants + 2 \* 6 US = __16 tâches__

# Suivi des tâches

Lien __Trello__ : https://trello.com/b/FUHfe35Q

# Liste des tâches

| ID | Description | US correspondante(s) | Dépendances |  Avancement | chiffrage (j/h) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|
| __T2_Gd__ | Définition de nouvelles fonctions dans _"database.js"_ , relatives aux US correspondant au sprint 2. Définition de la base de données, par rapport aux nouveaux éléments qui vont y figurer.
| __T2_Gr__ | Implémentation de _"database.js"_ . Vont être ajoutées à ce fichier diverses fonctions : ajout/suppression de développeurs à un projet existant (_addDeveloperToProject()_ / _removeDeveloperFromProject()_), accès à toutes les informations relatives à un projet (_getProject()_ / _getDeveloperList()_), modification d'un projet (_updateProjectName()_ / _updateProjectDescription()_ / _updateProjectDurationSprint()_ / _updateProjectStartingDay()_), suppression d'un projet (_deleteProject()_). On y trouvera aussi des fonctions d'ajout/modification/suppression d'US, d'ajout de sprint et d'ajout/modification/suppression de tâches. | X | database.js | ON GOING | 1.5 |
| __T2_Hd__ | Définition du fichier _"addUS.ejs"_ . Ce fichier permet de saisir les différentes informations nécessaires à la création d'une User Story. | #8 | addUS.ejs | TO DO | 0.5 |
| __T2_Id__ | Définition du fichier _"addTask.ejs"_ . Ce fichier permet de saisir les différentes informations nécessaires à la création d'une tâche. | #11 | addTask.ejs | TO DO | 0.5 |
| __T2_Hr__ | Implémentation de _"addUS.ejs"_ . Ce fichier comportera un formulaire avec un champ correspondant à la description de l'US, ainsi qu'un champ concernant la difficulté. L'identifiant sera généré automatiquement. De plus, des boutons seront disponibles pour valider ou annuler la création de l'US. Une fois les champs saisis et la validation effectuée, une communication avec la base de données sera faite, afin d'y ajouter les nouvelles informations saisies. | #8 | addUS.ejs | TO DO | 0.5 |
| __T2_Ir__ | Implémentation de _"addTask.ejs"_ . Ce fichier comportera un formulaire comprenant un champ pour le nom, un champ pour la description, un champ pour le chiffrage estimé, un champ pour le lien avec les US et un dernier champ pour les dépendances avec les US. Seuls les trois premiers champs devront être obligatoirement remplis, les deux derniers étant optionnels. De plus, des boutons seront disponibles pour valider ou annuler la création de la tâche. Une fois les champs saisis et la validation effectuée, une communication avec la base de données sera faite, afin d'y ajouter les nouvelles informations saisies. | #11 | addTask.ejs | TO DO | 0.5 |
| __T2_4ec__ | Écriture du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |
| __T2_4ex___ | Réalisation du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |
| __T2_7ec__ | Écriture du test de validation de l'US #7 | #7 |  | TO DO | 0.5 |
| __T2_7ex__ | Réalisation du test de validation de l'US #7. | #7 |  | TO DO | 0.5 |
| __T2_8ec__ | Écriture du test de validation de l'US #8 | #8 |  | TO DO | 0.5 |
| __T2_8ex__ | Réalisation du test de validation de l'US #8. | #8 |  | TO DO | 0.5 |
| __T2_9ex__ | Réalisation du test de validation de l'US #9. | #9 |  | TO DO | 0.5 |
| __T2_9ec__ | Écriture du test de validation de l'US #9 | #9 |  | TO DO | 0.5 |
| __T2_10ex__ | Réalisation du test de validation de l'US #10. | #10 |  | TO DO | 0.5 |
| __T2_10ec__ | Écriture du test de validation de l'US #10 | #10 |  | TO DO | 0.5 |
| __T2_11ec__ | Écriture du test de validation de l'US #11 | #11 |  | TO DO | 0.5 |
| __T2_11ex__ | Réalisation du test de validation de l'US #11. | #11 |  | TO DO | 0.5 |

#### A placer dans le tableau :

Informations sur project.ejs :

On y retrouve le Backlog, les sprints, la gestion des releases, la gestion des tests E2e, et un graphique Burn Down Chart.

La page contient diverses informations concernant un projet. En tout premier lieu, elle contient le backlog, c'est-à-dire un tableau avec des User Stories. Par défaut, il est vide. Un bouton _"+"_ permet d'accéder à la page d'ajout d'une US. La page continent également la liste des sprints, sous formes de tableaux de tâches à 3 colonnes (_TO DO_, _ON GOING_, _GONE_). Par défaut, un seul sprint est créé, vide. Un bouton _"Nouvelle tâche"_ permet d'accéder à la page d'ajout d'une tâche. Par défaut, cette tâche sera ajoutée dans la colonne "_TO DO_" du sprint associé. Des flèches directionnelles permettent de déplacer les tâches dans les différentes colonnes. Un bouton _"Nouveau Sprint"_ permet d'accéder à la page de création d'un sprint.

  #### Rappels :

  _* Une tâche est "faite" lorsque le code a été copié sur la branche master et que le code compile._

  _* Définir un fichier signifie le nommer, définir les fichiers dont il dépend, éventuellement définir les noms des variables ou méthodes créées/appelées._

__Total__ : 2 \* 2.5 composants + 2 \* 6 US = __17 tâches__
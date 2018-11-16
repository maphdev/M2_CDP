# Suivi des tâches

Lien __Trello__ : https://trello.com/b/FUHfe35Q

# Liste des tâches

| ID | Description | US correspondante(s) | Ressources |  Avancement | chiffrage (j/h) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|
| __T_Gr__ | Implémentation de _"database.js"_ . Ce fichier comprend des fonctions d'ajout, d'accès, de mise à jour et de suppression des différentes composantes de l'application (utilisateurs, projets, etc.), ainsi que des fonctions de connexion, de déconnexion et de création de compte. | X | database.js | ON GOING | 1.5 |
| __T_Hd__ | Définition du fichier _"addUS.ejs"_ . Ce fichier permet de saisir les différentes informations nécessaires à la création d'une User Story. | #8 | addUS.ejs | TO DO | 0.5 |
| __T_Id__ | Définition du fichier _"addTask.ejs"_ . Ce fichier permet de saisir les différentes informations nécessaires à la création d'une tâche. | #11 | addTask.ejs | TO DO | 0.5 |
| __T_Hr__ | Implémentation de _"addUS.ejs"_ . Ce fichier comportera un formulaire avec un champ correspondant à la description de l'US, ainsi qu'un champ concernant la difficulté. L'identifiant sera généré automatiquement. De plus, des boutons seront disponibles pour valider ou annuler la création de l'US. Une fois les champs saisis et la validation effectuée, une communication avec la base de données sera faite, afin d'y ajouter les nouvelles informations saisies. | #8 | addUS.ejs | TO DO | 0.5 |
| __T_Ir__ | Implémentation de _"addTask.ejs"_ . Ce fichier comportera un formulaire comprenant un champ pour le nom, un champ pour la description, un champ pour le chiffrage estimé, un champ pour le lien avec les US et un dernier champ pour les dépendances avec les US. Seuls les trois premiers champs devront être obligatoirement remplis, les deux derniers étant optionnels. De plus, des boutons seront disponibles pour valider ou annuler la création de la tâche. Une fois les champs saisis et la validation effectuée, une communication avec la base de données sera faite, afin d'y ajouter les nouvelles informations saisies. | #11 | addTask.ejs | TO DO | 0.5 |
| T2_4ec | Écriture du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |
| T2_4ex | Réalisation du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |
| T2_7ec | Écriture du test de validation de l'US #7 | #7 |  | TO DO | 0.5 |
| T2_7ex | Réalisation du test de validation de l'US #7. | #7 |  | TO DO | 0.5 |
| T2_8ec | Écriture du test de validation de l'US #8 | #8 |  | TO DO | 0.5 |
| T2_8ex | Réalisation du test de validation de l'US #8. | #8 |  | TO DO | 0.5 |
| T2_9ex | Réalisation du test de validation de l'US #9. | #9 |  | TO DO | 0.5 |
| T2_9ec | Écriture du test de validation de l'US #9 | #9 |  | TO DO | 0.5 |
| T2_10ex | Réalisation du test de validation de l'US #10. | #10 |  | TO DO | 0.5 |
| T2_10ec | Écriture du test de validation de l'US #10 | #10 |  | TO DO | 0.5 |
| T2_11ec | Écriture du test de validation de l'US #11 | #11 |  | TO DO | 0.5 |
| T2_11ex | Réalisation du test de validation de l'US #11. | #11 |  | TO DO | 0.5 |

#### A placer dans le tableau :

Informations sur project.ejs :

On y retrouve le Backlog, les sprints, la gestion des releases, la gestion des tests E2e, et un graphique Burn Down Chart.

La page contient diverses informations concernant un projet. En tout premier lieu, elle contient le backlog, c'est-à-dire un tableau avec des User Stories. Par défaut, il est vide. Un bouton _"+"_ permet d'accéder à la page d'ajout d'une US. La page continent également la liste des sprints, sous formes de tableaux de tâches à 3 colonnes (_TO DO_, _ON GOING_, _GONE_). Par défaut, un seul sprint est créé, vide. Un bouton _"Nouvelle tâche"_ permet d'accéder à la page d'ajout d'une tâche. Par défaut, cette tâche sera ajoutée dans la colonne "_TO DO_" du sprint associé. Des flèches directionnelles permettent de déplacer les tâches dans les différentes colonnes. Un bouton _"Nouveau Sprint"_ permet d'accéder à la page de création d'un sprint.

  #### Rappels :

  _* Une tâche est "faite" lorsque le code a été copié sur la branche master et que le code compile._

  _* Définir un fichier signifie le nommer, définir les fichiers dont il dépend, éventuellement définir les noms des variables ou méthodes créées/appelées._

__Total__ : 2 \* 2 composants + 2 \* 6 US = __16 tâches__
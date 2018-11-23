# Suivi des tâches

Lien __Trello__ : https://trello.com/b/FUHfe35Q

# Liste des tâches

| ID | Description | US correspondante(s) | Dépendances |  Avancement | chiffrage (j/h) | Développeur(s) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|:--------------|
| __T2_EJS3d__ | Définition du fichier _"sidebar.ejs"_ contenant la sidebar commune aux pages dédiés à un projet de l'application. | X | X | DONE | 0.5 | Manon P. |
| __T2_EJS3r__ | Création du fichier _"sidebar.ejs"_ contenant la sidebar commune aux pages dédiés à un projet de l'application. La sidebar contient 7 liens : un lien vers la page récapitulative du projet _"Projet"_, un lien vers le _"Backlog"_, un lien vers les _"Sprints"_, un lien vers la _"Gestion des releases"_, un lien vers la _"Gestion des tests"_, un lien vers le _""Burn Down Chart"_ et un lien vers les _"Paramètres du projet"_.| X | T2_EJS3d | DONE | 0.5 | Manon P. |
| __T2_Dr__ | Implémentation de "project.ejs" (suite). La page contient le menu (décrit dans T1_EJS1d) et la sidebar (décrite dans T1_EJS3d). Il ne reste plus que l'implémentation de la sidebar à rajouter. | #6 |  | DONE | 0.5 | Manon P. |
| __T2_BE5r__ | Implémentation de _"project.js"_ (suite sprint 1). Ajouter la route _"/addDevToProject"_ en requête PUT pour ajouter l'adresse email d'un développeur à la liste des développeurs avec MongoDB. Ajouter la route _"/deleteDevFromProject"_ en requête DELETE pour supprimer l'adresse email d'un développeur de la liste des développeurs avec MongoDB. Ajouter la route _"/deleteProject"_ en requête DELETE pour supprimer un projet de la liste des projets dans la base de données MongoDB. En cas de succès, elle redirige l'utilisateur sur la page d'accueil de l'application. | #4, #7 |  | TO DO | 0.5 |  |
| __T2_Kr__ | Implémentation de _"settings.ejs"_ (suite). Ajout de la liste des développeurs dans le formulaire. Il faut pouvoir ajouter / supprimer un développeur de la liste des développeurs. Un bouton d'ajout permet d'afficher un modal avec un formulaire permettant d'ajouter l'adresse email d'un développeur à la liste des développeurs du projet en faisant appel à la route _"/addDevToProject"_. Cliquer sur l'adresse email d'un développeur permet de supprimer ce développeur de la liste des développeurs du projet en faisant appel à la route _"/deleteDevFromProject"_. Un bouton _"Supprimer le projet"_ permet de supprimer définitivement le projet de la liste des projets de l'application en faisant appel à la route _"/deleteProject"_. | #4, #7 |  | TO DO | 0.5 |  |
| __T2_BE5d2__ | Définition des formulaire des modals des pages _"backlogs.ejs"_ (création d'US) et _"sprints.ejs"_ (création de tâche) pour l'implémentation des pages _"ejs"_ côté client et des routes côté server. | #8, #9, #10, #11 |  | ON GOING | 0.5 | Gauthier L. |
| __T2_BE5r2__ | Implémentation de _"project.js"_ (suite sprint 2). Les routes à définir sont : <br> - _"/userStory"_ en requête POST qui créé une User Story dans la base de données MongoDB avec les données du formulaire. <br> - _"/userStory"_ en requête PUT qui met à jour une User Story dans la base de données MongoDB avec les données du formulaire. <br> - _"/userStory"_ en requête DELETE qui supprime l'User Story sélectionnée par l'utilisateur de la base de données MongoDB. <br> - _"/task"_ en requête POST qui crée une nouvelle tâche dans la base de données MongoDB avec les données du formulaire. |  #8, #9, #10, #11 |  | ON GOING | 0.5 | Gauthier L. |
| __T2_Ed__ | Définition du fichier _"backlog.ejs"_ . Ce fichier liste les Users Stories d'un projet et permet d'ajouter/supprimer/modifier une user story. | #8, #9 |  | ON GOING | 0.5 | Gauthier L. |
| __T2_Er__ | Implémentation de _"backlog.ejs"_ . Un bouton en haut de la page _"Créer une User Story"_ permet d'afficher un formulaire de création d'User Story sous la forme de modal. Ce formulaire comprends deux champs : _"Description"_ et _"Niveau de difficulté"_. Le bouton "Créer une User Story" de ce formulaire permet de créer une user story dans la base de données en passant par la route _"/userStory"_. Ce fichier comporte également la liste des Users Stories d'un projet. Chaque élement de la liste possède 2 boutons. Le premier bouton _"Modifier"_ permet d'afficher un formulaire de modification d'User Story sous la forme d'un modal. Ce formulaire comprends trois champs : _"Description"_, _"Niveau de difficulté"_ et _"Priorité"_. Le bouton "Modifier l'User Story" de ce formulaire permet de modifier l'user story dans la base de donnée en passant par la route _"/userStory"_. Le deuxième bouton _"Supprimer"_ permet de supprimer l'user story en question du backlog en passant par la route _"/userStory"_. | #8, #9 |  | ON GOING | 0.5 | Gauthier L. |
| __T2_Fd__ | Définition du fichier _"sprints.ejs"_ . Ce fichier permet de récapituler l'ensemble des tâches d'un sprint. | #11 |  | TO DO | 0.5 |  |
| __T2_Fr__ | Implémentation de _"sprints.ejs"_ . Un bouton en haut de la page _"Créer une tâche"_ permet d'afficher un formulaire de création d'une tâche sous la forme de modal. Ce formulaire comprends cing champs : _"Nom"_, _"Description"_, _"Chiffrage j/h"_, _"Dépendances"_ (optionnel) et _"Lien avec User Story"_ (optionnel). Le bouton "Créer une tâche" de ce formulaire permet de créer une tâche dans la base de données en passant par la route _"\createTask"_. Ce fichier comporte également la liste des tâches d'un sprint. Les fonctions de modifications/suppression ne sont pas encore à faire. | #11 |  | TO DO | 0.5 |  |
| __T2_1ec__ | Écriture du test de validation de l'US #1. | #1 |  | DONE | 0.5 | Élodie G. |
| __T2_1ex__ | Réalisation du test de validation de l'US #1. | #1 |  | TO DO | 0.5 |  |
| __T2_2ec__ | Écriture du test de validation de l'US #2. | #2 |  | DONE | 0.5 | Élodie G. |
| __T2_2ex__ | Réalisation du test de validation de l'US #2. | #2 |  | DONE | 0.5 | Élodie G. |
| __T2_3ec__ | Écriture du test de validation de l'US #3. | #3 |  | DONE | 0.5 | Élodie G. |
| __T2_3ex__ | Réalisation du test de validation de l'US #3. | #3 |  | DONE | 0.5 | Élodie G. |
| __T2_4ec__ | Écriture du test de validation de l'US #4. | #4 |  | DONE | 0.5 | Élodie G. |
| __T2_4ex__ | Réalisation du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |  |
| __T2_5ec__ | Écriture du test de validation de l'US #5. | #5 |  | DONE | 0.5 | Élodie G. |
| __T2_5ex__ | Réalisation du test de validation de l'US #5. | #5 |  | TO DO | 0.5 |  |
| __T2_6ec__ | Écriture du test de validation de l'US #6. | #6 |  | DONE | 0.5 | Élodie G. |
| __T2_6ex__ | Réalisation du test de validation de l'US #6. | #6 |  | TO DO | 0.5 |  |
| __T2_7ec__ | Écriture du test de validation de l'US #7 | #7 |  | DONE | 0.5 | Élodie G. |
| __T2_7ex__ | Réalisation du test de validation de l'US #7. | #7 |  | TO DO | 0.5 |  |
| __T2_8ec__ | Écriture du test de validation de l'US #8 | #8 |  | DONE | 0.5 | Élodie G. |
| __T2_8ex__ | Réalisation du test de validation de l'US #8. | #8 |  | TO DO | 0.5 |  |
| __T2_9ex__ | Réalisation du test de validation de l'US #9. | #9 |  | TO DO | 0.5 |  |
| __T2_9ec__ | Écriture du test de validation de l'US #9 | #9 |  | DONE | 0.5 | Élodie G. |

__Total__ : 5 (sprint 1) + 2 \* 3 composants + 2 \* 9 US = __29 tâches__

A faire : définir tâche pour US 10 !

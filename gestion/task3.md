# Suivi des tâches

Lien __Trello__ : ...

# Liste des tâches

| ID | Description | US correspondante(s) | Dépendances |  Avancement | chiffrage (j/h) | Développeur(s) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|:--------------|
| __T3_BE5d2__ | Définition des formulaire des modals des pages _"backlogs.ejs"_ (création d'US) et _"sprints.ejs"_ (création de tâche) pour l'implémentation des pages _"ejs"_ côté client et des routes côté server. | #8, #9, #10, #11 |  | DONE | 0.5 | Gauthier L., Manon P. |
| __T3_BE5r2__ | Implémentation de _"project.js"_ (suite sprint 3). Les routes à définir sont : <br> - _"/backlog"_ en requête GET qui récupère le backlog d'un projet dans la base de donnée et l'affiche sur la page _"backlog.ejs"_ <br> - _"/createUserStory"_ en requête POST qui créé une User Story dans la base de données MongoDB avec les données du formulaire. <br> - _"/modifyUserStory"_ en requête PUT qui met à jour une User Story dans la base de données MongoDB avec les données du formulaire. <br> - _"/deleteUserStory"_ en requête DELETE qui supprime l'User Story sélectionnée par l'utilisateur de la base de données MongoDB. <br> - _"/sprint/createSprint"_ en requête POST qui crée un nouveau sprint dans la base de données MongoDB. Le numéro du sprint doit s'incrémenter de 1. <br> - _"/sprint/:id"_ en requête GET qui récupère les données du sprint avec l'identifiant _"id"_ dans la base de données et l'affiche sur la page _"sprint.ejs"_. <br> - _"/sprint/:id/deleteSprint"_ qui supprime le sprint avec l'identifiant _"id"_ de la base de données. <br> - _"/sprint/:id/createTask"_ en requête POST qui créé une tache dans le sprint avec l'identifiant _"id"_ avec les données du formulaire. |  #8, #9, #10, #11 |  | DONE | 0.5 | Gauthier L., Manon P. |
| __T3_Ed__ | Définition du fichier _"backlog.ejs"_ . Ce fichier liste les Users Stories d'un projet et permet d'ajouter/supprimer/modifier une user story. | #8, #9 |  | DONE | 0.5 | Gauthier L., Manon P. |
| __T3_Er__ | Implémentation de _"backlog.ejs"_ . Un bouton en haut de la page _"Créer une User Story"_ permet d'afficher un formulaire de création d'User Story sous la forme de modal. Ce formulaire comprends deux champs : _"Description"_ et _"Niveau de difficulté"_. Le bouton "Créer une User Story" de ce formulaire permet de créer une user story dans la base de données en passant par la route _"/createUserStory"_. Ce fichier comporte également la liste des Users Stories d'un projet. Chaque élement de la liste possède 2 boutons. Le premier bouton _"Modifier"_ permet d'afficher un formulaire de modification d'User Story sous la forme d'un modal. Ce formulaire comprends trois champs : _"Description"_, _"Niveau de difficulté"_ et _"Priorité"_. Le bouton "Modifier l'User Story" de ce formulaire permet de modifier l'user story dans la base de donnée en passant par la route _"/modifyUserStory"_. Le deuxième bouton _"Supprimer"_ permet de supprimer l'user story en question du backlog en passant par la route _"/deleteUserStory"_. | #8, #9 |  | DONE | 0.5 | Gauthier L., Manon P. |
| __T3_Fd__ | Définition du fichier _"sprints.ejs"_ . Ce fichier permet de récapituler l'ensemble des tâches d'un sprint. | #11 |  | DONE | 0.5 | Manon P. |
| __T3_Fr__ | Implémentation de _"sprints.ejs"_ . Un bouton en haut de la page _"Créer une tâche"_ permet d'afficher un formulaire de création d'une tâche sous la forme de modal. Ce formulaire comprends cing champs : _"Nom"_, _"Description"_, _"Chiffrage j/h"_, _"Dépendances"_ (optionnel) et _"Lien avec User Story"_ (optionnel). Le bouton "Créer une tâche" de ce formulaire permet de créer une tâche dans la base de données en passant par la route _"/sprint/:id/createTask"_. Ce fichier comporte également la liste des tâches d'un sprint. Les fonctions de modifications/suppression ne sont pas encore à faire. | #11, #12, #13, #14 |  | DONE | 0.5 | Manon P. |
| __T3_Be5d3__ |  | #12, #14 |  | TO DO | 0.5 |  |
| __T3_Be5r3__ |  | #12, #14 |  | TO DO | 0.5 |  |
| __T3_Be5d4__ |  | #15 |  | TO DO | 0.5 |  |
| __T3_Be5r4__ |  | #15 |  | TO DO | 0.5 |  |
| __T3_1ex__ | Réalisation du test de validation de l'US #1. | #1 |  | TO DO | 0.5 |  |
| __T3_4ex__ | Réalisation du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |  |
| __T3_5ex__ | Réalisation du test de validation de l'US #5. | #5 |  | TO DO | 0.5 |  |
| __T3_6ex__ | Réalisation du test de validation de l'US #6. | #6 |  | TO DO | 0.5 |  |
| __T3_7ex__ | Réalisation du test de validation de l'US #7. | #7 |  | TO DO | 0.5 |  |
| __T3_8ex__ | Réalisation du test de validation de l'US #8. | #8 |  | TO DO | 0.5 |  |
| __T3_9ex__ | Réalisation du test de validation de l'US #9. | #9 |  | TO DO | 0.5 |  |
| __T3_10ec__ | Écriture du test de validation de l'US #10. | #10 |  | DONE | 0.5 | Élodie G. |
| __T3_10ex__ | Réalisation du test de validation de l'US #10. | #10 |  | TO DO | 0.5 |  |
| __T3_11ec__ | Écriture du test de validation de l'US #11. | #11 |  | DONE | 0.5 | Élodie G. |
| __T3_11ex__ | Réalisation du test de validation de l'US #11. | #11 |  | TO DO | 0.5 |  |
| __T3_12ec__ | Écriture du test de validation de l'US #12. | #12 |  | DONE | 0.5 | Élodie G. |
| __T3_12ex__ | Réalisation du test de validation de l'US #12. | #12 |  | TO DO | 0.5 |  |
| __T3_13ec__ | Écriture du test de validation de l'US #13. | #13 |  | DONE | 0.5 | Élodie G. |
| __T3_13ex__ | Réalisation du test de validation de l'US #13. | #13 |  | TO DO | 0.5 |  |
| __T3_14ec__ | Écriture du test de validation de l'US #14. | #14 |  | DONE | 0.5 | Élodie G. |
| __T3_14ex__ | Réalisation du test de validation de l'US #14. | #14 |  | TO DO | 0.5 |  |
| __T3_15ec__ | Écriture du test de validation de l'US #15. | #15 |  | DONE | 0.5 | Élodie G. |
| __T3_15ex__ | Réalisation du test de validation de l'US #15. | #15 |  | TO DO | 0.5 |  |
| __T3_16ec__ | Écriture du test de validation de l'US #16. | #16 |  | DONE | 0.5 | Élodie G. |
| __T3_16ex__ | Réalisation du test de validation de l'US #16. | #16 |  | TO DO | 0.5 |  |
| __T3_17ec__ | Écriture du test de validation de l'US #17. | #17 |  | DONE | 0.5 | Élodie G. |
| __T3_17ex__ | Réalisation du test de validation de l'US #17. | #17 |  | TO DO | 0.5 | . |


__Total__ : __32 tâches__

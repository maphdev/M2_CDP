# Écriture des tests

## Sprint 1

### US#1
En tant que __visiteur__, je peux créer un compte développeur, afin de gérer mes projets Scrum. Il faudra fournir un nom d'utilisateur, un mot de passe et une adresse email.

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Se connecter/Créer un compte_. | Accès à la page _login.ejs_ |
| _login.ejs_ | Cliquer sur le bouton _Créer un compte_. | Accès à la page _createAccount.ejs_ |
| _createAccount.ejs_ | Remplir le champs _Nom d'utilisateur_ avec "Util1". Remplir le champs _Adresse Email_ avec "Util1@mail.com". Remplir le champs _Mot de passe_ avec "Util01". Cliquer sur le bouton _Créer un compte_. | Accès à la page _index.ejs_. Création de l'utilisateur dans la base de donnée. |

### US#2
En tant que __développeur__, je peux me connecter/me déconnecter de mon compte.

__Prérequis :__ Posséder un compte valide (Test 1).

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Se connecter/Créer un compte_. | Accès à la page _login.ejs_ |
| _login.ejs_ | Remplir le champs _Adresse Email_ avec "Util1@mail.com". Remplir le champs _Mot de passe_ avec "Util01". Cliquer sur le bouton _Se connecter_. | Accès à la page _index.ejs_. |

### US#3
En tant que __développeur__, je peux créer un nouveau projet Scrum. Il faudra fournir un nom pour ce projet, une description, la durée d'un sprint et la date de début du premier sprint.

__Prérequis :__ Être connecté (Test 2).

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Créer un projet_. | Accès à la page _createProject.ejs_ |
| _createProject.ejs_ | Remplir le champs _Nom du projet_ avec "Projet 1". Remplir le champs _Description_ avec "Test de projet 1". Remplir le champs _Durée du sprint_ avec "21". Remplir le champs "Date de début du premier sprint" avec "01/01/2018". Cliquer sur le bouton _Créer un projet_. | Accès à la page _index.ejs_. Ajout du projet dans la base de donnée. |


### US#4
En tant que __développeur__, je peux ajouter un autre développeur à un projet existant. Il faudra fournir l'adresse mail de ce développeur.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3).

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Settings_. | Accès à la page _settings.ejs_ |
| _settings.ejs_ | Cliquer sur le bouton _Ajouter un développeur_. Remplir le champs _Adresse email_ avec "util1@mail.com" | Ajout de l'utilisateur dans la liste des développeurs. |


### US#5
En tant que __développeur/visiteur__, je peux consulter la liste des projets existants.

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | - | Vérifier qu'on peut accéder à la liste des projets. |
| _index.ejs_ | Cliquer sur le bouton _Se connecter/Créer un compte_ afin de se connecter. | Vérifier qu'on peut accéder à la liste des projets. |


### US#6
En tant que __développeur/visiteur__, je peux consulter la page dédiée à un projet. Cette page permet de récapituler les informations permettant de gérer un projet Scrum (Backlog, Sprints, Tâches, Burn Down Chart).

__Prérequis :__ Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_.  | Accès à la page _project.ejs_ |

### US#7
En tant que __développeur__, je peux modifier les paramètres généraux d'un projet, ou le supprimer. Les modifications concernent le nom du projet, sa description, la durée d'un sprint, la date de début du premier sprint et les développeurs associés au projet (ajout/suppression d'un développeur).

__Prérequis :__ Être connecté (Test 2) & un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_.  | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Settings_ | Accès à la page _settings.ejs_ |
| _settings.ejs_ | Remplir le champs _Nom du projet_ avec "Test 1". Remplir le champs _Description_ avec "Description test 1". Remplir le champs _Durée du sprint_ avec "14". Remplir le champs _Date de début du premier sprint_ avec "02/02/2002". Cliquer sur le bouton _Valider_. | Accès à la page _index.ejs_. Modification des champs dans la base de données. |
| _index.ejs_ | Cliquer sur le bouton _Supprimer_ | Suppression du projet dans la base de données |

### US#8
En tant que __développeur__, je peux ajouter une User Story au Backlog. Il faudra fournir sa description et son niveau de difficulté. Un autre champ priorité sera rempli par le PO ultérieurement. L'identifiant sera généré automatiquement.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Ajouter une US_. | Accès à la page _addUserStory.ejs_ |
| _addUserStory.ejs_ | Remplir le champs _Description_ avec "Première US". Remplir le champs _Difficulté_. Cliquer sur le bouton _Ajouter_. | Accès à la page _project.ejs_. Ajout de l'US dans la base de données. |
|  |  |  |

### US#9
En tant que __développeur__, je peux modifier/supprimer une User Story dans le Backlog. On pourra modifier sa description, son niveau de difficulté ou sa priorité.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Backlog_. | Accès à la page _backlog.ejs_ |
| _backlog.ejs_ | Cliquer sur le bouton _Ajouter une US_. Remplir le champs _Description_ avec "Mon US". Remplir le champs "Niveau de difficulté" avec "1". Cliquer sur le bouton _Valider_ | Ajout de l'US dans le Backlog. |
| _backlog.ejs_ | Cliquer sur le bouton _Supprimer une US_ à côté de l'US ajoutée. | Suppression de l'US dans le Backlog. |


### US#10
En tant que __développeur__, je peux créer un sprint Scrum afin d'y ajouter des tâches. Un nouveau sprint a la même durée que les sprints précédents. Un sprint Scrum correspond à un tableau à 3 colonnes ("_To Do_", "_Ongoing_", "_Done_"). Par défaut, un sprint vide est généré automatiquement.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Sprints_. | Accès à la page _sprint.ejs_ |
| _sprint.ejs_ | Cliquer sur le bouton _Ajouter un sprint_ | Ajout d'un sprint dans la base de données |

### US#11
En tant que __développeur__, je peux créer une tâche dans un sprint. Il faudra fournir son nom et sa description ainsi que son chiffrage en jour/homme. Deux autres champs, dépendances et lien avec une User Story, sont optionnels. Par défaut toute nouvelle tâche se trouve dans la colonne "_To Do_".

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Sprints_. | Accès à la page _sprint.ejs_ |
| _sprint.ejs_ | Cliquer sur le bouton _Ajouter une tâche_. Remplir le champs _Nom_ avec "T1". Remplir le champs _Description_ avec "Première tâche". | Ajout d'une tâche dans la base de données (colonne "_TO DO_") |


### US#12
En tant que __développeur__, je peux modifier/supprimer une tâche dans un sprint. On pourra modifier son nom, sa description, son chiffrage en jour/homme, ses dépendances ou son lien avec une User Story.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3) & une tâche dans le sprint 1 (Test 11)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Sprints_. | Accès à la page _sprint.ejs_ |
| _sprint.ejs_ | Cliquer sur le bouton _Modifier une tâche_, à côté d'une tâche donnée. Remplir le champs _Nom_ avec "T1_". Remplir le champs _Description_ avec "Première tâche modifiée". | Modification de la tâche dans la base de données |
| _sprint.ejs_ | Cliquer sur le bouton _Supprimer une tâche_, à côté d'une tâche donnée. | Suppression de la tâche dans la base de données |

### US#13
En tant que __développeur/visiteur__, je peux consulter le tableau d'avancement ("_To Do_", "_Ongoing_", "_Done_") des tâches d'un sprint.

__Prérequis :__ Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Sprints_. | Accès à la page _sprint.ejs_ |


### US#14
En tant que __développeur__, je peux modifier l'état d'avancement d'une tâche en faisant passer une tâche de "To Do" à "_Ongoing_", et de "_Ongoing_" à "_Done_" (et inversement).

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Sprints_. | Accès à la page _sprint.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Flèche vers la droite_ dans la colonne _TO DO_, à côté d'une tâche. | La tâche est déplacée dans la colonne _ON GOING_ |
| _project.ejs_ | Cliquer sur le bouton _Flèche vers la droite_ dans la colonne _ON GOING_, à côté d'une tâche. | La tâche est déplacée dans la colonne _DONE_ |
| _project.ejs_ | Cliquer sur le bouton _Flèche vers la gauche_ dans la colonne _ON GOING_, à côté d'une tâche. | La tâche est déplacée dans la colonne _TO DO_ |
| _project.ejs_ | Cliquer sur le bouton _Flèche vers la gauche_ dans la colonne _DONE_, à côté d'une tâche. | La tâche est déplacée dans la colonne _ON GOING_ |

### US#15
En tant que __visiteur__, je peux avoir accès à tous les projets, ainsi qu'à l'avancement des sprints, mais sans droits de modification.

__Prérequis :__ Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Sprints_. | Accès à la page _sprint.ejs_ |


### US#16
En tant que __développeur/visiteur__, je peux consulter le graphique de type _Burn Down Chart_ sur la page dédiée à celui-ci.

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _index.ejs_ | Cliquer sur le bouton _Burn Down Chart_. | Accès à la page _burnDownChart.ejs_ |


### US#17
En tant que __développeur__, je peux désinscrire un développeur associé à un projet auquel je participe.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3) & Au moins deux développeurs sur un projet (Test 4).

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Settings_. | Accès à la page _settings.ejs_ |
| _settings.ejs_ | Cliquer sur l'adresse mail d'un développeur (util1@mail.com) | Suppression de l'utilisateur dans la liste des développeurs. |

### US#18
En tant que __développeur__, je peux consulter la liste des releases de mon projet. Chaque élement de la liste consiste en un numéro de version, une date de release, un lien pour télécharger la release en question et la liste des issues réalisées lors de cette release.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Release_. | Accès à la page _release.ejs_ |


### US#19
En tant que __développeur__, je peux ajouter un nouvel élément dans la liste des releases. Il faudra fournir un numéro de version, une date de release, un lien pour télécharger la release en question et la liste des issues réalisées.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Release_. | Accès à la page _release.ejs_ |
| _release.ejs_ | Cliquer sur le bouton _Nouvelle release_. Remplir le champs _Numéro de version_ avec "1.0.0". Remplir le champs _Date_ avec "01/02/2018". Remplir le champs _URL_ avec "http://www.releaseXXX.fr". Remplir le champs _Issues réalisées_ avec "1, 2, 3".| Ajout d'une release dans la base de données. |

### US#20
En tant que __développeur__, je peux modifier/supprimer un nouvel élément dans la liste des releases. On pourra modifier son numéro de version, sa date de release, son lien de téléchargement ou la liste des issues réalisées.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3) & une release (Test 19)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Release_. | Accès à la page _release.ejs_ |
| _release.ejs_ | Cliquer sur le bouton _Modifier la release_ à côté d'une release. Remplir le champs _Numéro de version_ avec "1.1.0". Remplir le champs _Date_ avec "03/02/2018". Remplir le champs _URL_ avec "http://www.releaseXXX.fr/new". Remplir le champs _Issues réalisées_ avec "1, 2, 3, 4".| Modification de la release dans la base de données. |

### US#21
En tant que __développeur__, je peux consulter les résultats des tests E2E d'un projet dans la liste des tests E2E. Un test E2E est caractérisé par un identifiant, une description, la date de dernière exécution et le résultat du dernier test réalisé.

__Prérequis :__ Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Tests E2E_. | Accès à la page _testsE2E.ejs_ |

### US#22
En tant que __développeur__, je peux ajouter un test E2E dans la liste des tests E2E. Il faudra fournir un identifiant, une description, la date de dernière exécution et le résultat du dernier test réalisé.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Tests E2E_. | Accès à la page _testsE2E.ejs_ |
| _testsE2E.ejs_ | Cliquer sur le bouton _Nouveau Test E2E. Remplir le champs _Identifiant_ avec "1". Remplir le champs _Description_ avec "Test 1". Remplir le champs _Date de dernière exécution_ avec "01/02/2018". Remplir le champs _Résultat de la dernière exécution_ avec "Success". | Ajout du test dans la base de données. |

### US#23
En tant que __développeur__, je peux modifier/supprimer le résultat d'un test E2E, c'est à dire sa date de dernière exécution et le résultat du dernier test réalisé.

__Prérequis :__ Être connecté (Test 2) & Un projet dans la base de données (Test 3) & un test E2E (Test 22)

| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
| _index.ejs_ | Cliquer sur le bouton _Accéder au projet_. | Accès à la page _project.ejs_ |
| _project.ejs_ | Cliquer sur le bouton _Tests E2E_. | Accès à la page _testsE2E.ejs_ |
| _testsE2E.ejs_ | Cliquer sur le bouton _Modifier Test E2E_, à côté d'un test. Remplir le champs _Date de dernière exécution_ avec "04/02/2018". Remplir le champs _Résultat de la dernière exécution_ avec "Fail". | Modification du test dans la base de données. |

<!--
### US#24
| Page concernée | Action | Résultat attendu |
|:--------------:|:------:|:----------------:|
|  |  |  |
-->


## Résultats des Tests E2E

| Identifiant | Description | Date de dernière exécution | Résultat de dernière exécution |
|:-----------:|:-----------:|:--------------------------:|:------------------------------:|
| #US2-1 | Login | 23/11/2018 | Success |
| #US2-2 | Logout | 23/11/2018 | Success |
| #US3 | New project | 23/11/2018 | Success |

|  |  |  |  |

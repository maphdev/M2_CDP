## Liste des tâches

| ID | Description | US correspondante(s) | Dépendances |  Avancement | chiffrage (j/h) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|
| __T1_Archi1__ | Initialisation du projet Node.js. Le nom de projet sera _"cdp-2018"_, la description sera _"Planificateur de projets SCRUM"_, le main sera _"server.js"_, et les dépendances seront "express", "firebase", et _"ejs"_. Tous les autres paramètres seront laissé vides par défaut.  | X | X | DONE | 0.5 |
| __T1_Archi2__ | Création du fichier server.js : initialisation d'Express, ajouter les dossiers _"database"_ et _"public" à la liste des dossiers statiques de l'application, expression des routes et permettre à l'application d'écouter sur le port 8080. Les routes sont "/ " pour la page _"index.ejs"_, _"/createAccount"_ pour la page _"createAccount.ejs"_, _"/createProject"_ pour la page _"createProject.ejs"_, _"/login"_ pour la page _"login.ejs"_, _"/project"_ pour la page _"project.ejs"_ et _"/settings"_ pour la page _"settings.ejs"_. | X | X | DONE | 0.5 |
| __T1_Depl1__ | Création du fichier Dockerfile. L'image à partir de laquelle est créée l'application est _"node:10"_. Il doit installer les dépendances du projet contenues dans le fichier _"package.json"_ avec Node Package Manager. Le port à ouvrir est le port 8080. Il faut enfin démarrer le serveur node.| X | X | DONE | 0.5 |
| __T1_Depl2__ | Création du fichier docker-compose.yml. Le nom du container est _"app"_. | X | X | DONE | 0.5 |
| __T1_EJS1d__ | Définition du fichier _"menu.ejs"_ contenant la barre de navigation de l'application. | X | X | DONE | 0.5 |
| __T1_EJS1r__ | Création du fichier _"menu.ejs"_ contenant la barre de navigation de l'application en HTML/CSS. Elle possède 2 boutons : "Liste des projets" permettant de retourner à la liste des projets correspondant à la page d'accueil et "Se connecter / Créer un compte" permettant d'aller sur la page de connexion. A partir de cette page l'utilisateur pourra également créer un compte. Le fichier contient également le code Javascript permettant de personnaliser le menu en fonction de l'utilisateur. Si l'utilisateur est connecté le bouton "Se connecter / Créer un compte" est remplacé par "adressemail (Se déconnecter)" lui permettant de se déconnecter. | X | T1_EJS1d | DONE | 0.5 |
| __T1_EJS2d__ | Définition du fichier _"head.ejs"_ contenant la balise <head\> commune aux fichiers .ejs de l'application. | X | X | DONE | 0.5 |
| __T1_EJS2r__ | Création du fichier _"head.ejs"_ contenant la balise <head> commune aux fichiers .ejs de l'application. | X | T1_EJS2d | DONE | 0.5 |
| __T1_Ad__ | Définition du fichier _"index.ejs"_ représentant la page d'accueil de l'application. Cette page affiche la liste des projets. | #5 | X | DONE | 0.5 |
| __T1_Ar__ | Implémentation de _"index.ejs"_ représentant la page d'accueil. La page contient le menu (décrit dans T1_EJS1d) et la liste des projets existants. Pour chaque projet, sont affichés son titre, sa description, la durée d'un sprint et la date de départ du premier sprint. A chaque projet est également associé un bouton permettant d'accéder à la page détaillée de ce projet. | #5 |  | DONE | 1 |
| __T1_Bd__ | Définition du fichier _"login.ejs"_ qui permet à un utilisateur de se connecter à son compte ou d'en créer un. | #2 | X | DONE | 0.5 |
| __T1_Br__ | Implémentation de _"login.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et un formulaire avec les champs permettant de se connecter, à savoir l'adresse e-mail et le mot de passe. Un bouton _"Se Connecter"_ dans le formulaire permet de se connecter avec les informations saisies. Si les informations saisies sont incorrectes, l'utilisateur doit en être informé. Un bouton _"Créer un compte"_ dans le formulaire permet d'accéder à la page de création de compte. | #2 |  | DONE | 0.5 |
| __T1_Cd__ | Définition du fichier _"createAccount.ejs"_ qui permet à un utilisateur de créer un compte. | #1 | X | DONE | 0.5 |
| __T1_Cr__ | Implémentation de _"createAccount.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et un formulaire avec les champs permettant de créer un compte, à savoir, le nom d'utilisateur, l'adresse mail et le mot de passe. Un bouton _"Créer un compte"_ dans le formulaire permet de créer un compte développeur avec les informations saisies. Si les informations saisies sont incorrectes, l'utilisateur doit en être informé. Un bouton _"Se Connecter"_ dans le formulaire permet d'accéder à la page de connexion. | #1 |  | DONE | 0.5 |
| __T1_Dd__ | Définition du fichier _"project.ejs"_ qui permet d'afficher les informations dédiées à un projet. | #6 | X | DONE | 0.5 |
| __T1_Dr__ | Implémentation de _"project.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et 5 tabs : _"Backlog"_, _"Sprints"_, _"Gestion des releases"_, _"Gestion des tests"_, et _"Burn Down Chart"_. Les tabs sont vides pour le moment. Elle possède également un bouton _"Paramètres du projet"_ dirigeant l'utilisateur vers la page de modification des paramètres d'un projet. | #6 |  | ON GOING | 0.5 |
| __T1_Ed__ | Définition du fichier _"settings.ejs"_ qui permet de modifier les paramètres généraux d'un projet. | #4, #7 | X | DONE | 0.5 |
| __T1_Er__ | Implémentation de _"settings.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et un formulaire avec les champs correspondants aux paramètres généraux d'un projet, à savoir, son nom, sa description, la durée d'un sprint, la date de début du premier sprint et les développeurs associés à ce projet. Un bouton _"Valider"_ dans le formulaire permet de soumettre les modifications. Un bouton _"Annuler"_ permet de revenir à la page précédente. | #4, #7 |  | ON GOING | 0.5 |
| __T1_Fd__ | Définition du fichier _"createProject.ejs"_ qui permet de créer un nouveau projet. | #3 | X | DONE | 0.5 |
| __T1_Fr__ | Implémentation de _"createProject.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et un formulaire avec les champs pour créer un projet, à savoir, son nom, sa description, la durée d'un sprint (en jours) et la date de début du premier sprint. Un bouton _"Valider"_ permet de créer un nouveau projet dans la base de donnnée. | #3 |  | DONE | 0.5 |
| __T1_Gd__ | Définition du fichier gérant les accès à la base de donnée : nommage du fichier _"database.js"_, définition de la structure de la base de donnée (arborescence du fichier json), détermination des fonctions de requêtes et des paramètres pour le sprint 1. | #1, #2, #3, #4, #5, #6, #7 | X | DONE | 0.5 |
| __T1_Gr__ | Implémentation de _"database.js"_ pour le sprint 1. Les fonctions à implémenter pour ce sprint sont les fonctions de création de compte (createAccount), de connexion/déconnexion (logIn / logOut), de création de projet (createProject), de récupération de la liste des projets (getProjectList), de récupération des paramètres d'un projet (getProject / getDeveloperList), de modification d'un projet (updateProjectName / updateProjectDescription / updateProjectDurationSprint / updateProjectStartingDay / addDeveloperToProject / removeDeveloperFromProject) et de suppression d'un projet (deleteProject). | #1, #2, #3, #4, #5, #6, #7 |  | ON GOING | 1.5 |
| __T1_1ec__ | Écriture du test de validation de l'US #1. | #1 |  | TO DO | 0.5 |
| __T1_1ex__ | Réalisation du test de validation de l'US #1. | #1 |  | TO DO | 0.5 |
| __T1_2ec__ | Écriture du test de validation de l'US #2. | #2 |  | TO DO | 0.5 |
| __T1_2ex__ | Réalisation du test de validation de l'US #2. | #2 |  | TO DO | 0.5 |
| __T1_3ec__ | Écriture du test de validation de l'US #3. | #3 |  | TO DO | 0.5 |
| __T1_3ex__ | Réalisation du test de validation de l'US #3. | #3 |  | TO DO | 0.5 |
| __T1_4ec__ | Écriture du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |
| __T1_4ex__ | Réalisation du test de validation de l'US #4. | # |  | TO DO | 0.5 |
| __T1_5ec__ | Écriture du test de validation de l'US #5. | #5 |  | TO DO | 0.5 |
| __T1_5ex__ | Réalisation du test de validation de l'US #5. | #5 |  | TO DO | 0.5 |
| __T1_6ec__ | Écriture du test de validation de l'US #6. | #6 |  | TO DO | 0.5 |
| __T1_6ex__ | Réalisation du test de validation de l'US #6. | #6 |  | TO DO | 0.5 |
| __T1_7ec__ | Écriture du test de validation de l'US #7. | #7 |  | TO DO | 0.5 |
| __T1_7ex__ | Réalisation du test de validation de l'US #7. | #7 |  | TO DO | 0.5 |

__Total__ : (2 \* architecture + 2 \* déploiement + 2 \* 9 autres composants) + 2 \* 7 US = __36 tâches__

#### Rappels :

_* Une tâche est "faite" lorsque le code a été copié sur la branche master et que le code compile._

_* Définir un fichier signifie le nommer, définir les fichiers dont il dépend, éventuellement définir les noms des variables ou méthodes créées/appelées._

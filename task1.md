## Liste des tâches associées

| ID | Description | US correspondante(s) | Ressources |  Avancement | chiffrage (j/h) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|
| T_Archi1 | Initialisation du projet Node.js. Le nom de projet sera _"cdp-2018"_, la description sera _"Planificateur de projets SCRUM"_, le main sera _"server.js"_, et les dépendances seront "express", "firebase", et _"ejs"_. Tous les autres paramètres seront laissé vides par défaut.  | X | package.json | DONE | 0.5 |
| T_Archi2 | Création du fichier server.js : initialisation d'Express, ajouter les dossiers _"database"_ et _"public" à la liste des dossiers statiques de l'application, expression des routes et permettre à l'application d'écouter sur le port 8080. Les routes sont "/ " pour la page _"index.ejs"_, _"/createAccount"_ pour la page _"createAccount.ejs"_, _"/createProject"_ pour la page _"createProject.ejs"_, _"/login"_ pour la page _"login.ejs"_, _"/project"_ pour la page _"project.ejs"_ et _"/settings"_ pour la page _"settings.ejs"_. | X | server.js | DONE | 0.5 |
| T_Depl1 | Création du fichier Dockerfile. L'image à partir de laquelle est créée l'application est _"node:10"_. Il doit installer les dépendances du projet contenues dans le fichier _"package.json"_ avec Node Package Manager. Le port à ouvrir est le port 8080. Il faut enfin démarrer le serveur node.| X | Dockerfile | DONE | 0.5 |
| T_Depl2 | Création du fichier docker-compse.yml. Le nom du container est _"app"_. | X | docker-compose.yml | DONE | 0.5 |
| T_ejs1 | Création du fichier _"menu.ejs"_ contenant la barre de navigation de l'application en HTML/CSS. Elle possède 2 boutons : "Liste des projets" permettant de retourner à la liste des projets correspondant à la page d'accueil et "Se connecter / Créer un compte" permettant d'aller sur la page de connexion. A partir de cette page l'utilisateur pourra également créer un compte. Il contient également le code Javascript permettant de personnaliser le menu en fonction de l'utilisateur. Si l'utilisateur est connecté le bouton "Se connecter / Créer un compte" est remplacé par "adressemail (Se déconnecter)" lui permettant de se déconnecter. | ? | menu.ejs | DONE | 1 |
| T_ejs2 | Création du fichier _"head.ejs"_ contenant le header commun aux fichier .ejs gérant l'affichage de l'application. | ? | head.ejs | DONE | 0.5 |
| T_Ad | Définition du fichier _"index.ejs"_ qui contient la liste des projets et correspond à la page d'accueil de l'application. | #5 | 0.5 | faite |  |
| T_Ar | Implémentation de _"index.ejs"_. La page contient le menu (décrit dans T_ejs1) et la liste des projets existants. Pour chaque projet, sont affichés son titre, sa description, la durée d'un sprint et la date de départ du premier sprint. A chaque projet est également associé un bouton permettant d'accéder à la page détaillée de ce projet (voir T_dr). | #5 | index.ejs | DONE | 1 |
| T_Bd | Définition du fichier _"login.ejs"_ qui permet à un utilisateur de se connecter à son compte ou d'en créer un. | #2 | login.ejs | DONE | 0.5 |
| T_Br | Implémentation de _"login.ejs"_. La page contient un formulaire avec les champs permettant de se connecter, à savoir l'adresse e-mail et le mot de passe. Un bouton _"Valider"_ permet de valider les champs inscrits et de communiquer avec la base de données pour tenter de se connecter avec les informations saisies. Un bouton _"Créer un compte"_ permet d'accéder à la page de création de compte (voir T_cr) | #2 | login.ejs | DONE | 0.5 |
| T_Cd | Définition du fichier _"createAccount.ejs"_ qui permet à un utilisateur de créer un compte pour s'authentifier et pouvoir ajouter/modifier/supprimer des projets. | #1 | createAccount.ejs | DONE | 0.5 |
| T_Cr | Implémentation de _"createAccount.ejs"_. La page contient un formulaire avec les champs permettant de créer un compte, à savoir, le nom d'utilisateur, l'adresse mail et le mot de passe. Un bouton _"Valider"_ permet de valider les champs inscrits et de communiquer avec la base de données pour créer une entrée dedans. | #1 | createAccount.ejs | DONE | 0.5 |
| T_Dd | Définition du fichier _"project.ejs"_ qui permet d'afficher les informations dédiées à un projet. On y retrouve le Backlog, les sprints et un graphique Burn Down Chart. | #6 | project.ejs | DONE | 0.5 |
| T_Dr | Implémentation de _"project.ejs"_. La page contient diverses informations concernant un projet. En tout premier lieu, elle contient le backlog, c'est-à-dire un tableau avec des User Stories. Par défaut, il est vide. Un bouton _"+"_ permet d'accéder à la page d'ajout d'une US. La page continent également la liste des sprints, sous formes de tableaux de tâches à 3 colonnes (_TO DO_, _ON GOING_, _GONE_). Par défaut, un seul sprint est créé, vide. Un bouton _"Nouvelle tâche"_ permet d'accéder à la page d'ajout d'une tâche. Par défaut, cette tâche sera ajoutée dans la colonne "_TO DO_" du sprint associé. Des flèches directionnelles permettent de déplacer les tâches dans les différentes colonnes. Un bouton _"Nouveau Sprint"_ permet d'accéder à la page de création d'un sprint. | #6 | project.ejs | ON GOING | 0.5 |
| T_Ed | Définition du fichier _"settings.ejs"_ qui permet de modifier les paramètres généraux d'un projet. | #4 #7 | setting.ejs | DONE | 0.5 |
| T_Er | Implémentation de _"settings.ejs"_. La page contient un formulaire avec les champs correspondants aux paramètres généraux d'un projet, à savoir, son nom, sa description, la durée d'un sprint et la date de début du premier sprint. Un bouton _"Valider"_ permet de communiquer avec la base de données et de soumettre les modifications. Un bouton _"Annuler"_ permet de revenir à la page précédente. | #4 #7 | setting.ejs | ON GOING | 0.5 |
| T_Fd | Définition du fichier _"createProject.ejs"_ qui permet la création d'un projet. | #3 | createProject.ejs | DONE | 0.5 |
| T_Fr | Implémentation de _"createProject.ejs"_. La page contient un formulaire avec les champs pour créer un projet, à savoir, son nom, sa description, la durée d'un sprint (en jours) et la date de début du premier sprint. Un bouton _"Valider"_ permet de communiquer avec la base de donnée pour ajouter y ajouter une entrée. | #3 | createProject.ejs | DONE | 0.5 |
| T_Gd | Définition du fichier gérant les accès à la base de donnée : nommage du fichier _"database.js"_, définition de la structure de la base de donnée (arborescence du fichier json), détermination des fonctions de requêtes et des paramètres. |  | 0.5 |  |  |
| T_Gr | implémentation de _"database.js"_ |  | 1.5 |  |  |
| T_1ec |  |  |  |  |  |
| T_1ex |  |  |  |  |  |
| T_2ec |  |  |  |  |  |
| T_2ex |  |  |  |  |  |
| T_3ec |  |  |  |  |  |
| T_3ex |  |  |  |  |  |
| T_4ec |  |  |  |  |  |
| T_4ex |  |  |  |  |  |
| T_5ec |  |  |  |  |  |
| T_5ex |  |  |  |  |  |
| T_6ec |  |  |  |  |  |
| T_6ex |  |  |  |  |  |
| T_7ec |  |  |  |  |  |
| T_7ex |  |  |  |  |  |


__Total__ : 2 \* architecture + 2 \* 7 déploiement + 2 \* 7 composants + 2 \* 7 US = __32 tâches__

_* Une tâche est "faite" lorsque le code a été copié sur la branche master et que le code compile._

_* Définir un fichier signifie le nommer, définir les fichiers dont il dépend, éventuellement définir les noms des variables ou méthodes créées/appelées.

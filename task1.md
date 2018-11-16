## Liste des tâches associées

| ID | Description | US correspondante(s) | Ressources |  Avancement | chiffrage (j/h) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|
| T_Archi1 | Initialisation du projet Node.js. Le nom de projet sera _"cdp-2018"_, la description sera _"Planificateur de projets SCRUM"_, le main sera _"server.js"_, et les dépendances seront "express", "firebase", et _"ejs"_. Tous les autres paramètres seront laissé vides par défaut.  | X | package.json | DONE | 0.5 |
| T_Archi2 | Création du fichier server.js : initialisation d'Express, ajouter les dossiers _"database"_ et _"public" à la liste des dossiers statiques de l'application, expression des routes et permettre à l'application d'écouter sur le port 8080. Les routes sont "/ " pour la page _"index.ejs"_, _"/createAccount"_ pour la page _"createAccount.ejs"_, _"/createProject"_ pour la page _"createProject.ejs"_, _"/login"_ pour la page _"login.ejs"_, _"/project"_ pour la page _"project.ejs"_ et _"/settings"_ pour la page _"settings.ejs"_. | X | server.js | DONE | 0.5 |
| T_Depl1 | Création du fichier Dockerfile. L'image à partir de laquelle est créée l'application est _"node:10"_. Il doit installer les dépendances du projet contenues dans le fichier _"package.json"_ avec Node Package Manager. Le port à ouvrir est le port 8080. Il faut enfin démarrer le serveur node.| X | Dockerfile | DONE | 0.5 |
| T_Depl2 | Création du fichier docker-compse.yml. Le nom du container est _"app"_. | X | docker-compose.yml | DONE | 0.5 |
| T_ejs1 | Création du fichier _"menu.ejs"_ contenant la barre de navigation de l'application en HTML/CSS. Elle possède 2 boutons : "Liste des projets" permettant de retourner à la liste des projets correspondant à la page d'accueil et "Se connecter / Créer un compte" permettant d'aller sur la page de connexion. A partir de cette page l'utilisateur pourra également créer un compte. Il contient également le code Javascript permettant de personnaliser le menu en fonction de l'utilisateur. Si l'utilisateur est connecté le bouton "Se connecter / Créer un compte" est remplacé par "adressemail (Se déconnecter)" lui permettant de se déconnecter. | ? | menu.ejs | DONE | 1 |
| T_ejs2 | Création du fichier _"head.ejs"_ contenant le code javascript commun à l'application. Il  |  |  |  |  |
| T_Ad | Nommage du composant A et de l'ensemble des dépendances avec les . |  | 0.5 | faite |  |
| T_Ar | Implémentation de _"index.ejs"_. La page doit contenir un menu permettant d'accéder à la page de connexion / déconnexion / création de compte et la liste des projets déjà existants. |  | 0.5 | faite |  |
| T_Bd | nommage du fichier _"login.ejs"_ |  | 0.5 | faite |  |
| T_Br | implémentation de _"login.ejs"_ |  | 0.5 | faite |  |
| T_Cd | nommage du fichier _"createAccount.ejs"_ |  | 0.5 | faite |  |
| T_Cr | implémentation de _"createAccount.ejs"_ |  | 0.5 | faite |  |
| T_Dd | nommage du fichier _"project.ejs"_ |  | 0.5 |  |  |
| T_Dr | implémentation de _"project.ejs"_ |  | 0.5 |  |  |
| T_Ed | nommage du fichier _"settings.ejs"_ |  | 0.5 |  |  |
| T_Er | implémentation de _"settings.ejs"_ |  | 0.5 |  |  |
| T_Fd | nommage du fichier _"createProject.ejs"_ |  | 0.5 |  |  |
| T_Fr | implémentation de _"createProject.ejs"_ |  | 0.5 |  |  |
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

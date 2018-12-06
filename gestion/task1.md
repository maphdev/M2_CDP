## Liste des tâches

| ID | Description | US correspondante(s) | Dépendances |  Avancement | chiffrage (j/h) | développeur(s) |
|:--:|:------------|:--------------------:|:----------:|:-------------:|:---------------:|:-------------:|
| __T1_BE1__ | Initialisation du projet Node.js dans le fichier _package.json_. Le nom de projet sera _"cdp-2018"_, la description sera _"Planificateur de projets SCRUM"_, le main sera _"server.js"_, et les dépendances seront _"express"_, _"express-session"_, _"firebase"_, _"ejs"_, "body_parser" et _"mongoose"_. Tous les autres paramètres seront laissé vides par défaut.  | X | X | DONE | 0.5 | Manon P., Élodie G. |
| __T1_BE2__ | Création du fichier server.js : initialisation d'Express, ajouter le dossier _"public"_ à la liste des dossiers statiques de l'application, importation des fichiers de routes _"auth.js"_, _"main.js"_ et _"project.js"_, initialisation d'express-session et permettre à l'application d'écouter sur le port 8080. | X | X | DONE | 0.5 | Manon P. |
| __T1_BE3__ | Création du fichier main.js pour gérer les routes principales. Pour l'instant ce fichier ne définie que la route _"/"_ correspondant à la page d'accueil de l'application. Cette route est définie en requête GET et affiche la liste des projets existants grâce à la base de donnée MongoDB. | #5 | X | DONE | 0.5 | Manon P. |
| __T1_BE4d__ | Définition des formulaire des pages _"createAccount.ejs"_ et _"login.ejs"_ pour l'implémentation des pages _"ejs"_ côté client et des routes côté server. | #1, #2 | X | DONE | 0.5 | Manon P., Élodie G. |
| __T1_BE4r__ | Création du fichier auth.js pour gérer les routes relatives à l'authentification. Les routes à définir sont : </br> - _"/createAccount"_ en requête GET qui affiche la page _"createAccount.ejs"_, <br>- _"/createAccount"_ en requête POST qui créé un compte utilisateur dans Firebase et sa fiche utilisateur dans la base de donnée MongoDB à partir des données d'un formulaire. En cas d'erreur elle doit ré-afficher la page de création de compte tout en affichant un message d'erreur. En cas de succès elle doit rediriger l'utilisateur vers la page d'accueil. <br> - _"/login"_ en requête GET qui affiche la page de login _"login.ejs"_, <br> - _"/login"_ en requête POST qui authentifie un utilisateur à partir des données d'un formulaire. En cas d'erreur, elle doit ré-afficher la page de connexion tout en affichant un message d'erreur. En cas de succès elle doit rediriger l'utilisateur vers la page d'accueil. <br> - _"/logout"_ en requête GET qui déconnecte un utilisateur. Si aucun utilisateur n'est connecté cette route n'est pas disponible et doit rediriger l'utilisateur vers la page d'accueil. En cas de succès, l'utilisateur est redirigé vers la page d'accueil. <br> - _"/resetPassword"_ en requête GET qui envoie un email de réinitialisation de mot de passe à l'adresse email spécifiée dans un formulaire grâce à Firebase.| #1, #2 | X | DONE | 0.5 | Manon P. |
| __T1_BE5d__ | Définition des formulaire des pages _"createProject.ejs"_ et _"settings.ejs"_ pour l'implémentation des pages _"ejs"_ côté client et des routes côté server.| #3, #4, #6, #7 | X | DONE | 0.5 | Manon P., Élodie G. |
| __T1_BE5r__ | Création du fichier project.js pour gérer les routes relatives au projet. Les routes à définir sont : </br> - _"/createProject"_ en requête GET qui affiche la page de création de projet _"createProject.ejs"_. <br> - _"/createProject"_ en requête POST qui créé un nouveau projet dans la base de donnée MongoDB à partir des données d'un formulaire. En cas de succès elle redirige l'utilisateur sur la page d'accueil. <br> - _"/project"_ en requête GET qui affiche la page du projet sélectionné par l'utilisateur _"project.ejs"_ ainsi que ses informations grâce à un appel à la base de donnée MongoDB. L'identifiant du projet à afficher est disponible grâce à express-session (l'identifiant a été sauvegardé lors du clic en tant que projet courant dans la variable session.projectId). <br> - _"/project"_ en requête POST qui va récupérer l'identifiant du projet cliqué par l'utilisateur et le stocker grâce à express-session dans la variable session.projectId. <br> - _"/settings"_ en requête GET qui va afficher la page des paramètres d'un projet _"settings.ejs"_ ainsi que ses informations gràace à un appel à la base de donnée MongoDB. <br> - _"/settings"_ en requête PUT qui va mettre à jour les paramètres d'un projet dans la base de donnée MongoDB avec les valeurs d'un formulaire. En cas de succès, elle affiche à nouveau la page des paramètres avec les paramètres actualisés. <br> - _"/addDevToProject"_ en requête PUT pour ajouter l'adresse email d'un développeur à la liste des développeurs avec MongoDB. <br> - _"/deleteDevFromProject"_ en requête DELETE pour supprimer l'adresse email d'un développeur de la liste des développeurs avec MongoDB. <br> - _"/deleteProject"_ en requête DELETE pour supprimer un projet de la liste des projets dans la base de données MongoDB. En cas de succès, elle redirige l'utilisateur sur la page d'accueil de l'application. | #3, #4, #6, #7 | X | ON GOING | 0.5 | Manon P. |
| __T1_Depl1__ | Création du fichier Dockerfile. L'image à partir de laquelle est créée l'application est _"node:10"_. Il doit installer les dépendances du projet contenues dans le fichier _"package.json"_ avec Node Package Manager. Le port à ouvrir est le port 8080. Il faut enfin démarrer le serveur node.| X | X | DONE | 0.5 | Manon P. |
| __T1_Depl2__ | Création du fichier docker-compose.yml. Le nom du container est _"app"_. | X | X | DONE | 0.5 | Manon P. |
| __T1_EJS1d__ | Définition du fichier _"menu.ejs"_ contenant la barre de navigation de l'application. | X | X | DONE | 0.5 | Manon P. |
| __T1_EJS1r__ | Création du fichier _"menu.ejs"_ contenant la barre de navigation de l'application en HTML/CSS. Elle possède 2 boutons : "Liste des projets" permettant de retourner à la liste des projets correspondant à la page d'accueil et "Se connecter / Créer un compte" permettant d'aller sur la page de connexion. A partir de cette page l'utilisateur pourra également créer un compte. Le fichier contient également le code Javascript permettant de personnaliser le menu en fonction de l'utilisateur. Si l'utilisateur est connecté le bouton "Se connecter / Créer un compte" est remplacé par "adressemail (Se déconnecter)" lui permettant de se déconnecter. | X | T1_EJS1d | DONE | 0.5 | Manon P. |
| __T1_EJS2d__ | Définition du fichier _"head.ejs"_ contenant la balise <head\> commune aux fichiers .ejs de l'application. | X | X | DONE | 0.5 | Manon P. |
| __T1_EJS2r__ | Création du fichier _"head.ejs"_ contenant la balise <head> commune aux fichiers .ejs de l'application. | X | T1_EJS2d | DONE | 0.5 | Manon P. |
| __T1_EJS3d__ | Définition du fichier _"sidebar.ejs"_ contenant la sidebar commune aux pages dédiés à un projet de l'application. | X | X | TODO | 0.5 | Manon P. |
| __T1_EJS3r__ | Création du fichier _"sidebar.ejs"_ contenant la sidebar commune aux pages dédiés à un projet de l'application. La sidebar contient 7 liens : un lien vers la page récapitulative du projet _"Projet"_, un lien vers le _"Backlog"_, un lien vers les _"Sprints"_, un lien vers la _"Gestion des releases"_, un lien vers la _"Gestion des tests"_, un lien vers le _""Burn Down Chart"_ et un lien vers les _"Paramètres du projet"_.| X | T1_EJS3d | TODO | 0.5 | Manon P. |
| __T1_BDD1__ | Création du fichier _"dbConfig.js"_ contenant la configuration de la base de données. Ce fichier doit exporter un objet contenant l'ensemble des propriétés (instance mongoose, options, url, models) de la base donnée afin de pouvoir être importé sous la forme d'un module. | X | X | DONE | 0.5 | Manon P. |
| __T1_BDD2__ | Création du fichier _"authConfig.js"_ contenant la configuration du système d'authentificatio Firebase. Ce fichier doit exporter un objet contenant l'ensemble des propriétés (instance firebase, options, fonction d'initialisation) du système d'authentification de Firebase afin de pouvoir être importé sous la forme d'un module. | X | X | DONE | 0.5 | Manon P. |
| __T1_BDD3d__ | Définition du model mongoose représentant un Projet. Il faut également préciser le json attendu. |  | X | DONE | 0.5 | Manon P. |
| __T1_BDD3r__ | Création du fichier projectModel.js contenant le model Mongoose du Projet. |  | T1_BDD3d | DONE | 0.5 | Manon P. |
| __T1_BDD4d__ | Définition du model mongoose représentant un Utilisateur. Il faut également préciser le json attendu. |  | X | DONE | 0.5 | Manon P. |
| __T1_BDD4r__ | Création du fichier projectUser.js contenant le model Mongoose du Projet. |  | T1_BDD4d | DONE | 0.5 | Manon P. |
| __T1_Ad__ | Définition du fichier _"index.ejs"_ représentant la page d'accueil de l'application. Cette page affiche la liste des projets. | #5 | X | DONE | 0.5 | Gauthier L. |
| __T1_Ar__ | Implémentation de _"index.ejs"_ représentant la page d'accueil. La page contient le menu (décrit dans T1_EJS1d) et la liste des projets existants. Pour chaque projet, sont affichés son titre, sa description, la durée d'un sprint et la date de départ du premier sprint. A chaque projet est également associé un bouton permettant d'accéder à la page détaillée de ce projet. Lorsqu'on clique sur un bouton, l'identifiant du projet doit être envoyé au server afin d'être stocké dans express-session. | #5 |  | DONE | 1 | Gauthier L. |
| __T1_Bd__ | Définition du fichier _"login.ejs"_ qui permet à un utilisateur de se connecter à son compte, d'en créer un ou de réinitialiser son mot de passe. | #2 | X | DONE | 0.5 | Manon P. |
| __T1_Br__ | Implémentation de _"login.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et un formulaire avec les champs permettant de se connecter, à savoir l'adresse e-mail et le mot de passe. Un bouton _"Se Connecter"_ dans le formulaire permet de se connecter avec les informations saisies. Si les informations saisies sont incorrectes, l'utilisateur doit en être informé. Un bouton _"Créer un compte"_ dans le formulaire permet d'accéder à la page de création de compte. Un lien _"Mot de passe perdu?"_ permet d'envoyer un mail de réinitialisation de mot de passe grâce à Firebase.| #2 |  | DONE | 0.5 | Manon P. |
| __T1_Cd__ | Définition du fichier _"createAccount.ejs"_ qui permet à un utilisateur de créer un compte. | #1 | X | DONE | 0.5 | Manon P. |
| __T1_Cr__ | Implémentation de _"createAccount.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et un formulaire avec les champs permettant de créer un compte, à savoir, le nom d'utilisateur, l'adresse mail et le mot de passe. Un bouton _"Créer un compte"_ dans le formulaire permet de créer un compte développeur avec les informations saisies. Si les informations saisies sont incorrectes, l'utilisateur doit en être informé. Un bouton _"Se Connecter"_ dans le formulaire permet d'accéder à la page de connexion. | #1 |  | DONE | 0.5 | Manon P. |
| __T1_Dd__ | Définition du fichier _"project.ejs"_ qui permet d'afficher les informations dédiées à un projet. | #6 | X | DONE | 0.5 | Élodie G. |
| __T1_Dr__ | Implémentation de _"project.ejs"_. Pour l'instant, la page contient uniquement le menu (décrit dans T1_EJS1d) et la sidebar (décrite dans T1_EJS3d). | #6 |  | ON GOING | 0.5 | Élodie G. |
| __T1_Kd__ | Définition du fichier _"settings.ejs"_ qui permet de modifier les paramètres généraux d'un projet. | #4, #7 | X | DONE | 0.5 | Élodie G. |
| __T1_Kr__ | Implémentation de _"settings.ejs"_. La page contient le menu (décrit dans T1_EJS1d), la sidebar (décrite dans T1_EJS3d), et un formulaire avec les champs correspondants aux paramètres généraux d'un projet, à savoir, son nom, sa description, la durée d'un sprint, la date de début du premier sprint et les développeurs associés à ce projet. Un bouton d'ajout permet d'afficher un modal avec un formulaire permettant d'ajouter l'adresse email d'un développeur à la liste des développeurs du projet en faisant appel à la route _"/addDevToProject"_. Cliquer sur l'adresse email d'un développeur permet de supprimer ce développeur de la liste des développeurs du projet en faisant appel à la route _"/deleteDevFromProject"_. Un bouton _"Valider"_ dans le formulaire permet de soumettre les modifications. Un bouton _"Supprimer le projet"_ dans le formulaire permet de supprimer le projet définitivement de la liste des projets de l'application en faisant appel à la route _"/deleteProject"_. | #4, #7 |  | ON GOING | 0.5 | Élodie G. |
| __T1_Ld__ | Définition du fichier _"createProject.ejs"_ qui permet de créer un nouveau projet. | #3 | X | DONE | 0.5 | Élodie G. |
| __T1_Lr__ | Implémentation de _"createProject.ejs"_. La page contient le menu (décrit dans T1_EJS1d) et un formulaire avec les champs pour créer un projet, à savoir, son nom, sa description, la durée d'un sprint (en jours) et la date de début du premier sprint. Un bouton _"Valider"_ permet de créer un nouveau projet dans la base de donnnées. | #3 |  | DONE | 0.5 | Élodie G. |
| __T1_1ec__ | Écriture du test de validation de l'US #1. | #1 |  | TO DO | 0.5 | Élodie G. |
| __T1_1ex__ | Réalisation du test de validation de l'US #1. | #1 |  | TO DO | 0.5 | Élodie G. |
| __T1_2ec__ | Écriture du test de validation de l'US #2. | #2 |  | TO DO | 0.5 | Élodie G. |
| __T1_2ex__ | Réalisation du test de validation de l'US #2. | #2 |  | TO DO | 0.5 | Élodie G. |
| __T1_3ec__ | Écriture du test de validation de l'US #3. | #3 |  | TO DO | 0.5 | Élodie G. |
| __T1_3ex__ | Réalisation du test de validation de l'US #3. | #3 |  | TO DO | 0.5 | Élodie G. |
| __T1_4ec__ | Écriture du test de validation de l'US #4. | #4 |  | TO DO | 0.5 |  |
| __T1_4ex__ | Réalisation du test de validation de l'US #4. | # |  | TO DO | 0.5 |  |
| __T1_5ec__ | Écriture du test de validation de l'US #5. | #5 |  | TO DO | 0.5 | Élodie G. |
| __T1_5ex__ | Réalisation du test de validation de l'US #5. | #5 |  | TO DO | 0.5 |  |
| __T1_6ec__ | Écriture du test de validation de l'US #6. | #6 |  | TO DO | 0.5 | Élodie G. |
| __T1_6ex__ | Réalisation du test de validation de l'US #6. | #6 |  | TO DO | 0.5 |  |
| __T1_7ec__ | Écriture du test de validation de l'US #7. | #7 |  | TO DO | 0.5 | Élodie G. |
| __T1_7ex__ | Réalisation du test de validation de l'US #7. | #7 |  | TO DO | 0.5 | . |

__Total__ : (6 \* BDD + 5 \* EJS + 2 \* Déploiement + 7 \* Back-End + 2 \* 6 autres composants) + 2 \* 7 US = __46 tâches__

# Tâches non faites en fin de sprint 1

T1_BE5r : il manque la gestion de la liste des développeurs lors de la mise à jour des paramètres dans la base de données MongoDb, ainsi que la supression de projets.

T1_Kr	: il manque l'affichage de la liste des développeurs dans le formulaire de la page des paramètres, ainsi que le bouton pour supprimer un projet définitivement de la liste des projets.

T1_EJS3d & T1_EJS3r	: définition et réalisation de la sidebar.

T1_Dr	: il manque la sidebar pour pouvoir terminer la première version de la page project.ejs.
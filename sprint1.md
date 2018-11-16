# Sprint 1
## Liste des US assignées au sprint 1
|   ID  |   Description |   Priorité    |   Difficulté      | Sprint correspondant  |
|:-----:|:--------------|:-------------:|:-----------------:|:---------------------:|
|1|En tant que __visiteur__, je peux créer un compte développeur, afin de gérer mes projets Scrum. Il faudra fournir un nom d'utilisateur, un mot de passe et une adresse email.|MEDIUM| 3 | 1 |
|2|En tant que __développeur__, je peux me connecter/me déconnecter de mon compte.|MEDIUM| 2 | 1 |
|3|En tant que __développeur__, je peux créer un nouveau projet Scrum. Il faudra fournir un nom pour ce projet, une description, la durée d'un sprint et la date de début du premier sprint. |HIGH| 1 | 1 |
|4|En tant que __développeur__, je peux ajouter un autre développeur à un projet existant. Il faudra fournir le nom d'utilisateur de ce développeur.|MEDIUM| 1 | 1 |
|5|En tant que __développeur/visiteur__, je peux consulter la liste des projets existants.|HIGH| 1 | 1 |
|6|En tant que __développeur/visiteur__, je peux consulter la page dédiée à un projet. Cette page permet de récapituler les informations permettant de gérer un projet Scrum (Backlog, Sprints, Tâches, Burn Down Chart).|HIGH| 2 | 1 |
|7|En tant que __développeur__, je peux modifier les paramètres généraux d'un projet, ou le supprimer. Les modifications concernent le nom du projet, sa description, la durée d'un sprint, la date de début du premier sprint et les développeurs associés au projet (ajout/suppression d'un développeur).|HIGH| 1 | 1 |

## Architecture

L'application sera réalisée selon une architecture 2-tiers :
* le front-end en HTML/CSS/JavaScript,
* le back-end avec Firebase,

NodeJs et Express seront utilisés, ainsi que le générateur de templates EJS.

L'application sera déployée avec Docker afin de faciliter l'installation.

## Liste des composants associés
### Front-end
* __[A]__ Page HTML contenant la liste des projets
    * si on est connecté, accès à __(D)__,
    * si on n'est pas connecté, accès à  __(B)__ et __(D)__,* __[D]__ Page HTML dédiée à un projet
        * si on est connecté, accès à __(A)__, __(E)__, __(G)__ et __(I)__,
        * si on est déconnecté, accès à __(A)__, __(E)__, et __(B)__
* __[B]__ Page HTML de connexion
    * si la connexion est valide, retour à la page __(A)__,
    * accès à __(A)__, __(C)__
* __[C]__ Page HTML de création de compte
    * si la création est validée, retour à la page __(A)__,
    * accès à __(A)__, __(B)__
* __[D]__ Page HTML dédiée à un projet
    * si on est connecté, accès à __(A)__, __(E)__,
    * si on est déconnecté, accès à __(A)__, __(E)__, __(B)__ et __(C)__
* __[E]__ Page HTML dédiée aux paramètres d'un projet
    * si on est connecté, accès à __(A)__, __(D)__,
    * si on est déconnecté, accès à __(A)__, __(B)__ et __(D)__
* __[F]__ Page HTML pour la création d'un projet
    * accès à __(A)__

### Back-end
* __[G]__ Fichier JavaScript pour gérer la base de donnée Firebase
    * création de compte
    * connexion/déconnexion
    * ajout de projets
    * liste des projets existants
    * informations d'un projet
    * modifier un projet
    * supprimer un projet
    * ajouter un développeur à un projet
    * supprimer un développeur d'un projet
    * liste des développeurs associés à un projet

### Template EJS

* __[EJS1]__ Fichier template pour le menu commun à l'ensemble des pages de l'application
* __[EJS2]__ Fichier template pour la balise <head> commune à l'application

### Architecture

* __[ARCH1]__ Fichier package.json pour installer l'ensemble des dépendances avec Node.js.
* __[ARCH2]__ Fichier server.js pour servir les pages HTML.

### Déploiement

* __[DEPL1]__ Fichier Dockerfile pour le déploiement de l'application
* __[DEPL2]__ Fichier docker-compose pour le déploiement de l'application

## Annexe - Organisation des fichiers/dossiers du projets

```
/database
/public
  /css
  /img
  /js
/views
  /pages
  /partials
docker-compose.yml
Dockerfile
package.json
server.js
```

Le dossier _"database"_ contient le fichier gérant les accès à la base de donnée.

Le dossier _"public"_ contient les ressources statiques de l'application.

Le dossier _"views"_ contient les templates EJS. Le dossier _"pages"_ contient les pages entières à afficher tandis que le dossier _"partials"_ contient des blocs communs à plusieurs pages pour éviter la duplication de pages (ex: menu).

Les fichiers d'initialisation du serveur et de déploiement de l'application se trouvent à l'origine.

## Annexe - Arborescence json

```
{
 "projects" : {
   "idProject" : {
     "name" : "Project1",
     "description" : "Description1",
     "durationSprint" : 21,
     "startingDay" : "06-11-2018",
     "devList" : [ "9NVz1C5OmRYJnLAV8wrU1Nxyflm1", "jgsGNTRHJEYBqcs6NZ4ntT5bYOK2" ],
   }
 },
 "users" : {
   "9NVz1C5OmRYJnLAV8wrU1Nxyflm1" : {
     "username" : "toto",
     "mail" : "toto@domain.fr"
   },
   "jgsGNTRHJEYBqcs6NZ4ntT5bYOK2" : {
     "username" : "hello",
     "mail" : "hello@domain.fr"
   }
 }
}
```

## TODO

- US pour la gestion des releases et la gestion des résultats des tests E2E

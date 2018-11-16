# Ressources

Ce document est un recueuil de l'ensemble des ressources et spécifications du projet. Il contient l'architecture du projet, la liste des composants, la structure du projet, la structure de la base de donnée, les liens vers Trello et releases... et tout autre information utiles pour le bon déroulement du projet.

## Architecture

L'application sera réalisée selon une architecture 2-tiers :
* le front-end en HTML/CSS/JavaScript,
* le back-end avec Firebase,

NodeJs et Express seront utilisés, ainsi que le générateur de templates EJS.

L'application sera déployée avec Docker afin de faciliter l'installation.

## Composants

#### Front-end
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
    * si on est connecté, accès à __(A)__, __(E)__, __(G)__ et __(I)__,
    * si on est déconnecté, accès à __(A)__, __(E)__, __(B)__
* __[E]__ Page HTML dédiée aux paramètres d'un projet
    * si on est connecté, accès à __(A)__, __(D)__,
    * si on est déconnecté, accès à __(A)__, __(B)__ et __(D)__
* __[F]__ Page HTML pour la création d'un projet
    * accès à __(A)__
* __[H]__ Page HTML d'ajout d'une US au BackLog
    * accès à __(A)__ et __(D)__
* __[I]__ Page HTML d'ajout d'une tâche
        * accès à __(A)__ et __(D)__

#### Back-end
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

#### Template EJS

* __[EJS1]__ Fichier template pour le menu commun à l'ensemble des pages de l'application
* __[EJS2]__ Fichier template pour la balise <head> commune à l'application

#### Architecture

* __[ARCH1]__ Fichier package.json pour installer l'ensemble des dépendances avec Node.js.
* __[ARCH2]__ Fichier server.js pour servir les pages HTML.

#### Déploiement

* __[DEPL1]__ Fichier Dockerfile pour le déploiement de l'application
* __[DEPL2]__ Fichier docker-compose pour le déploiement de l'application

## Structure du projet

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

## Structure de la base de donnée (JSON)

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

## Lien vers les releases

Releases disponibles :
- v0.1.0

Les releases sont accessibles [ici](https://github.com/maphdev/M2_CDP/releases).

## Lien vers les Trello

- [Sprint 2](https://trello.com/b/FUHfe35Q)

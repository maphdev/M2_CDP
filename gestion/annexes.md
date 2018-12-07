# Annexes

Ce document est un recueil de l'ensemble des ressources et spécifications du projet. Il contient l'architecture du projet, la liste des composants, la structure du projet, la structure de la base de donnée, les liens vers Trello et releases... et tout autre information utiles pour le bon déroulement du projet.

## Architecture

L'application sera réalisée selon une architecture 3-tiers :
* le front-end en HTML/CSS/JavaScript ainsi qu'avec le générateur de templates EJS,
* le back-end avec NodeJs et Express,
* la base de donnée avec MongoDB (Mongoose),

Le système d'authentification sera géré par Firebase Auth.

L'application sera déployée avec Docker afin de faciliter l'installation.

## Composants

#### Front-end

Les pages entières :

* __[A]__ Page HTML contenant la liste des projets
    * si on est connecté, accès à __(D)__,
    * si on n'est pas connecté, accès à  __(B)__ et __(D)__,
* __[B]__ Page HTML de connexion
    * si la connexion est valide, retour à la page __(A)__,
    * accès à __(A)__, __(C)__
* __[C]__ Page HTML de création de compte
    * si la création d'un compte est validée, retour à la page __(A)__,
    * accès à __(A)__, __(B)__
* __[D]__ Page HTML dédiée à un projet
    * si on est connecté, accès à __(A)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__,
    * si on est déconnecté, accès à __(A)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__, __(B)__
* __[E]__ Page HTML contenant le Backlog d'un projet
    * si on est connecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__,
    * si on est déconnecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__, __(B)__
* __[F]__ Page HTML contenant un sprint d'un projet
    * si on est connecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__,
    * si on est déconnecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__, __(B)__
* __[G]__ Page HTML contenant la gestion des releases
    * si on est connecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__,
    * si on est déconnecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__, __(B)__
* __[H]__ Page HTML contenant la gestion des tests
    * si on est connecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__,
    * si on est déconnecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__, __(B)__
* __[I]__ Page HTML contenantle Burn Down Chart
    * si on est connecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__,
    * si on est déconnecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__, __(B)__
* __[K]__ Page HTML contenant les paramètres d'un projet
    * si on est connecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__,
    * si on est déconnecté, accès à __(A)__, __(D)__, __(E)__, __(F)__, __(G)__, __(H)__, __(I)__, __(J)__, __(B)__
* __[L]__ Page HTML pour la création d'un projet
    * accès à __(A)__

Les templates EJS :

* __[EJS1]__ Fichier template pour le menu commun à l'ensemble des pages de l'application
* __[EJS2]__ Fichier template pour la balise <head\> commune à l'application
* __[EJS3]__ Fichier template pour le sidebar commun à l'ensemble des pages dédiées à un projet

#### Back-end

* __[BE1]__ Fichier package.json pour installer l'ensemble des dépendances avec Node.js
* __[BE2]__ Fichier server.js pour initialiser le server
* __[BE3]__ Fichier main.js pour gérer les routes principales
* __[BE4]__ Fichier auth.js pour gérer les routes relatives à l'authentification
* __[BE5]__ Fichier project.js pour gérer les routes relatives au projet

#### Base de donnée
* __[BDD1]__ Fichier dbConfig.js avec la configuration de la base de donnée
* __[BDD2]__ Fichier authConfig.js avec la configuration de lu système d'authentification
* __[BDD3]__ Fichier projectModel.js avec le model d'un projet pour Mongoose
* __[BDD4]__ Fichier userModel.js avec le model d'un utilisateur pour Mongoose


#### Déploiement

* __[DEPL1]__ Fichier Dockerfile pour le déploiement de l'application
* __[DEPL2]__ Fichier docker-compose pour le déploiement de l'application

## Structure du projet

```
/__test__
/database
/doc
/models
/public
  /css
  /img
  /js
/routes
/views
  /pages
  /partials
docker-compose.yml
Dockerfile
package.json
server.js
```

Le dossier *"__test_\_"* contient les tests E2E réalisés avec Puppeteer et Jest.

Le dossier _"database"_ contient le fichier gérant les accès à la base de donnée.

Le dossier _"doc"_ contient la documentation utilisateur et administrateur.

Le dossier _"models"_ contient les models pour la base de donnée (Mongoose).

Le dossier _"public"_ contient les ressources statiques de l'application.

Le dossier _"routes"_ contient l'ensemble des fichiers de routes.

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
     "backlog": [
        {
            "_id": {
                "$oid": "5bf819b03e4d9952c27e473a"
            },
            "id": 1,
            "description": "aaaaa",
            "difficulty": 1
        }
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

## Définitions

__DONE__ : Une tâche est "DONE" lorsque le code a été copié sur la branche master et que le code compile.

__Définir__ : Définir un fichier signifie le nommer, définir les fichiers dont il dépend, éventuellement définir les noms des variables ou méthodes créées/appelées.

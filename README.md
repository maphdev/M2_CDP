# Résumé de CDP

Ce document met en avant la réalisation des points de contrôle pour chaque artefact intervenants dans la conduite de projet

## Issues

L'intégralité des issues sont décrites dans le fichier [backlog.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/backlog.md).

Chaque issue est définie par :
- un __identifiant unique__,
- une __description__ pour préciser l'issue,
- un niveau de __priorité__ (LOW / MEDIUM / HIGH),
- un niveau de __difficulté__ (1 / 2 / 3 / 5 / 7),
- sa __planification__ dans les sprints.

Un travail d'__homogénéisation__ des issues a été fourni afin de cibler une granularité moyenne des issues.

## Tâches

Chaque sprint [X] a été abordé par la réalisation d'un fichier sprint[X].md récapitulant les issues du sprint et un fichier task[X].md listant les tâches du sprint.

| Sprint | Récapitulatif des issues | Tâches |
|:--:|:------------|:--------------------:|
| 1 | [sprint1.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/sprint1.md) | [task1.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/task1.md) |
| 2 | [sprint2.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/sprint2.md) | [task2.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/task2.md) |
| 3 | [sprint3.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/sprint3.md) | [task3.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/task3.md) |

Chaque tâche est définie par :
- un identifiant,
- une __description__ afin de préciser le travail à réaliser,
- son __lien aux issues__.
- ses dépendances,
- son __avancement__ (TO DO / ON GOING / DONE) pour assurer un suivi de la tâche,
- son __chiffrage en j/h__ afin de s'assurer que la tâche ait une granularité fine,
- le(s) __développeur(s) en charge de la réalisation__ de la tâche afin de s'organiser.

## Release

La page des releases accessible via le [gestionnaire de releases](https://github.com/maphdev/M2_CDP/releases) de Github permet d'__archiver les releases__.

Chaque release est __horodatée__ et __liste les issues réalisées__.

Un fichier Dockerfile et un fichier docker-compose.yml sont mis à disposition dans chaque release afin de __faciliter l'installation des releases__.

## Tests

Il n'y a pas de __tests unitaires__ car dans le cadre de ce projet, il n'est pas pertinent de tester notre code ou nos fonctions.

Les __tests de validation__ sont décrits dans le fichier [tests.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/tests.md) dans la section *Écriture des tests*. Il s'agit principalement de tests End To End (E2E) réalisés avec Puppeteer et Jest.

Les tests sont __mis à jour__ à chaque évolution du code.

Les tests sont régulièrement exécutés et les résultats des tests sont __suivis__ dans le fichier [tests.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/tests.md) dans la section *Résultats des Tests E2E en local*. Ils sont réexécutés au moins avant chaque release pour assurer un bon fonctionnement de l'application.

Nous avons utilisé Travis afin d'__automatiser les tests__. Ce processus d'automatisation est décrit dans le fichier [tests.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/tests.md) dans la section *Automatisation des tests*.

## Code

## Documentation

Une __documentation du code__ a été réalisée. L'architecture de l'application, les composants, la structure du projet, la structure de la base de donnée (JSON) ainsi que d'autres informations utiles aux développeurs sont présents dans le fichier [annexes.md](https://github.com/maphdev/M2_CDP/blob/master/gestion/annexes.md). Le code source est également commenté lorsque vraiment nécessaire.

La __documentation administrateur__ se trouve dans le fichier [doc_administrateur.md](https://github.com/maphdev/M2_CDP/blob/master/cdp-2018/doc/doc_administrateur.md). Cette documentation présente les différentes méthodes de déploiement de l'application ainsi que la marche à suivre pour exécuter les tests.

La __documentation utilisateur__ se trouve dans le fichier [doc_utilisateur](https://github.com/maphdev/M2_CDP/blob/master/cdp-2018/doc/doc_utilisateur.md). Cette documentation aide l'utilisateur à utiliser le logiciel.

Les documentations ont été __versionnées__ et ciblent une seule release pour assurer la __cohérence de la documentation__.

----------

__Documentation administrateur pour la release [v0.3.0](https://github.com/maphdev/M2_CDP/releases/tag/v0.3.0).__

__Dernière mise à jour le 06/12/2018 à 20h22.__

----------

# Documentation Administrateur

Cette documentation concerne le déploiement de l'application ainsi que le lancement des tests.

## Déploiement de l'application

L'application peut être déployée avec un Dockerfile, un docker-compose ou le package.json. Une fois déployée, l'application est accessible à l'adresse : http://localhost:8080/.

#### docker-compose

Lancer l'image de l'application dans un container :

```
docker-compose up
```

Arrêter le container et le supprimer :

```
docker-compose down
```

#### Dockerfile

Construire l'image de l'application :

```
docker build -t cdp-app .
```

Lancer l'image de l'application dans un container :

```
docker run cdp-app
```

#### package.json

Installation des dépendances :

```
npm install
```

Lancer le serveur :

```
node server.js
```

## Lancement des tests

Installer les dépendances de test (si ce n'est pas déjà fait) :

```
npm install
```

Lancer les tests :

```
npm test
```

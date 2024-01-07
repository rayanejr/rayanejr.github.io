---
title: Santé-App
publishDate: 2024-01-07
img: /assets/sante-app.jpg
img_alt: Une capture d'écran de l'application Santé-App
description: |
  Santé-App est une application web innovante développée avec Laravel, destinée à cartographier les coûts des actes de santé à l'échelle mondiale. Elle permet également d'estimer l'empreinte carbone des déplacements et propose des recommandations pour le tourisme de santé. Cette application est un outil précieux pour les professionnels de santé et les voyageurs soucieux de leur impact environnemental.
tags:
  - Santé
  - Laravel
  - Empreinte Carbone
  - Tourisme de Santé
---

## "Santé-App: Votre Guide Numérique pour la Santé et le Tourisme Durable!"

Santé-App allie technologie et santé pour offrir une expérience utilisateur unique, favorisant une prise de conscience écologique dans le secteur de la santé.

### 🚀 Sommaire

- [🌟 Caractéristiques Principales](#-caractéristiques-principales)
- [🛠 Technologies Utilisées](#-technologies-utilisées)
- [🔧 Installation et Configuration](#-installation-et-configuration)
- [🖥 Utilisation](#-utilisation)

### 🌟 Caractéristiques Principales

- **Cartographie des Coûts des Actes de Santé** : Visualisez les coûts de santé à travers le monde.
- **Estimation de l'Empreinte Carbone** : Calculez l'impact écologique de vos déplacements.
- **Recommandations pour le Tourisme de Santé** : Obtenez des conseils pratiques pour un tourisme de santé responsable.
- **Interface Utilisateur Intuitive** : Profitez d'une navigation facile et d'une expérience utilisateur optimale.

### 🛠 Technologies Utilisées

- **Framework** : Laravel
- **Base de Données** : MySQL
- **Containerisation** : Docker

### 🔧 Installation et Configuration

1. **Clonez le dépôt**

   ```bash
   git clone https://github.com/rayanejr/sante-app.git
   cd sante-app

2. **Configuration de l'Environnement**

   - Copiez et configurez `.env.example` en `.env`.

3. **Installation de Composer et Démarrage du Conteneur**

   ```bash
   docker run --rm -v $(pwd):/app composer install

4. **Ajout des Permissions**

   ```bash
   sudo chmod -R 777 storage bootstrap/cache
   sudo chown -R www-data:www-data /var/www/html

5. **Démarrez les Containers Docker**

   ```bash
   docker-compose up -d --build

6. **Exécution des Migrations et des Seeders**

   ```bash
   docker-compose exec app php artisan migrate --seed

### 🖥 Utilisation

- **Accueil** : Accédez à la page d'accueil de l'application.
- **Admin** : Gérez les actes de santé, les pays, et les recommandations.
- **Login/Inscription** : Authentifiez-vous ou inscrivez-vous pour accéder aux fonctionnalités complètes.


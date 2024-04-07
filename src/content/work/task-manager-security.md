---
title: Projet Gestionnaire de Tâches Personnelles - Sécurité Web
publishDate: 2024-03-20
img: /assets/task-manager-security.jpg
img_alt: Une capture d'écran de l'application Gestionnaire de Tâches Personnelles
description: |
  Ce document détaille le projet de développement d'une application de gestion de tâches personnelles en deux versions : une vulnérable et une sécurisée. L'objectif était de mettre en lumière les vulnérabilités courantes dans le développement web et de démontrer l'efficacité des mesures de sécurité adéquates.
tags:
  - Sécurité Web
  - Cybersécurité
  - Développement Web
  - Best Practices
---

# Projet Gestionnaire de Tâches Personnelles - Sécurité Web

## Introduction

### Contexte du Projet

Ce projet s'inscrit dans le cadre de notre formation en développement et sécurité informatique. Il a pour but de concevoir et développer une application de gestion de tâches personnelles en deux versions distinctes : une vulnérable et une sécurisée, pour illustrer l'importance des pratiques de développement sécurisé.

### Technologies Utilisées

- **Frontend**: HTML, CSS, JavaScript (React js, React native)
- **Backend**: PHP
- **Base de données**: SQL, MongoDB
- **Outils de sécurité**: Burp Suite, Kali Linux

## Version Vulnérable

### Objectif

Illustrer comment des vulnérabilités courantes telles que les injections SQL, XSS, et les mauvaises gestions de session peuvent être introduites dans une application web.

### Scénarios d'Attaque

Des tests d'attaque ont été menés pour exploiter ces vulnérabilités, avec des techniques d'injection SQL et de cross-site scripting (XSS), révélant des failles significatives dans la gestion de la sécurité.

## Version Sécurisée

### Objectif

Mettre en œuvre des pratiques de sécurité robustes pour prévenir les vulnérabilités identifiées dans la version vulnérable.

### Mesures de Sécurité Implémentées

Validation des entrées, échappement des sorties, gestion sécurisée des sessions, et d'autres techniques de sécurisation ont été appliquées pour renforcer la sécurité de l'application.

## Comparaison des Résultats

Une analyse comparative a montré l'efficacité des mesures de sécurité. Les tests ont démontré une résistance significative de la version sécurisée face aux tentatives d'attaque, soulignant l'efficacité des pratiques sécurisées.

## Conclusion

Ce projet a non seulement démontré les vulnérabilités courantes dans les applications web mais aussi souligné l'importance de l'adoption de mesures de sécurité dès les premières phases de développement. Les résultats obtenus prônent pour une approche proactive dans la sécurité des applications web.

## Livrables

- **Code Source**: [Version Vulnérable](https://github.com/rayanejr/ToDoListApp-Vulnerable), [Version Sécurisée](https://github.com/rayanejr/ToDoListApp-Securise)
- **Rapport Détaillé**: Documentant les phases de conception, développement, attaques et défense.
- **Présentation Orale**: Prévue pour le 20/03/2024.

## Critères d'Évaluation

Les deux versions ont été évaluées sur la base de l'intégration et la résistance aux vulnérabilités, la qualité de l'implémentation des mesures de sécurité, et la clarté de la documentation produite.

---
title: Exploration des Attaques d'Injection avec DVWA
publishDate: 2024-02-07
img: /assets/dvwa-injection.jpg
img_alt: Une capture d'écran montrant une attaque d'injection réussie sur DVWA
description: |
  Ce document détaille le travail pratique (TP) réalisé sur les attaques d'injection en utilisant DVWA (Damn Vulnerable Web Application). L'objectif de ce TP était de se familiariser avec les techniques d'injection SQL et Command Injection à travers les différents niveaux de sécurité proposés par DVWA: Low, Medium, et High, en utilisant Kali Linux et Burp Suite comme environnement de test principal.
tags:
  - Sécurité Web
  - Pentest
  - DVWA
  - Injection SQL
  - Command Injection
---

# Exploration des Attaques d'Injection avec DVWA

## Introduction

### Contexte du TP

Ce TP s'inscrit dans le cadre de notre formation en sécurité informatique, avec pour objectif la familiarisation aux attaques d'injection. Utilisant DVWA, une application web intentionnellement vulnérable, nous avons exploré et exploité des vulnérabilités d'injection SQL et Command Injection à différents niveaux de sécurité.

### Outils et Environnement de Test

- **DVWA** : Hébergé sur une machine virtuelle Kali Linux pour simuler un environnement réel d'attaques.
- **Burp Suite** : Utilisé pour intercepter, analyser et modifier les requêtes HTTP, facilitant l'exploitation des vulnérabilités.

## Partie 1 : Injection SQL au Niveau de Sécurité "Low"

### Objectif

Démontrer la récupération des informations sensibles (noms d'utilisateurs, hashs de mots de passe, etc.) de la base de données via une injection SQL.

### Méthodologie et Résultats

Une requête SQL a été injectée, exploitant la vulnérabilité au niveau "Low" pour extraire des informations critiques de la table `users`. La requête utilisée était :

 ```bash
    1' OR 1=1 UNION SELECT null, concat(user, 0x0a, password, 0x0a, last_login, 0x0a, failed_login, 0x0a, user_id) FROM users#
   ```

## Partie 2 : Injection SQL au Niveau de Sécurité "Medium"

### Méthodologie

Adaptation de la technique d'injection pour contourner les mesures de sécurité renforcées du niveau "Medium".

### Exploitation de la Vulnérabilité

L'injection adaptée suivante a été employée pour extraire les données :

```bash
    -1 UNION SELECT user, password FROM users#
   ```

## Conclusion

Ce TP a permis une compréhension approfondie des attaques d'injection, démontrant que même des protections renforcées peuvent être contournées. La nécessité d'une validation et d'un nettoyage approfondis des entrées utilisateur pour prévenir les attaques d'injection est ressortie comme une leçon cruciale. Cette expérience souligne l'importance de pratiques de développement sécurisé et de tests de pénétration réguliers pour renforcer la sécurité des applications web.


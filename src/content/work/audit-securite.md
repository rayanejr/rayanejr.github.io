---
title: Audit de Sécurité Informatique
publishDate: 2024-01-01
img: /assets/audit-securite.jpg
img_alt: Une image représentant l'audit de sécurité informatique
description: |
  L'Audit de Sécurité Informatique est un projet qui évalue les vulnérabilités et les risques associés à un système d'information fictif. Utilisant une approche en boîte noire basée sur les standards de l'OWASP, ce projet simule un environnement réel pour identifier les failles de sécurité potentielles et propose des stratégies de mitigation.
tags:
  - Audit de Sécurité
  - Cybersécurité
  - OWASP
  - Vulnérabilités
---

# Synthèse Managériale et Technique

## Introduction

### Contexte du Projet

Dans le cadre de notre projet en sécurité des applications, nous avons réalisé un audit de sécurité informatique pour évaluer les vulnérabilités et les risques associés à un système d'information fictif. L'objectif était d'appliquer nos connaissances théoriques et développer une compréhension pratique des défis de la cybersécurité.

### Objectifs du Projet

Nous visons à identifier et analyser les failles de sécurité potentielles en adoptant le rôle d'auditeurs, en découvrant les vulnérabilités, évaluant les risques potentiels, et proposant des stratégies de mitigation.

### Méthodologie Adoptée

Nous avons utilisé une approche en boîte noire, simulant un attaquant externe sans connaissance préalable du système, basée sur les standards de l'OWASP.

## Synthèse Technique

### Liste des Vulnérabilités Détectées

Classification selon la méthode de risque de l’OWASP :

| Réf. | Nom | Risque | Vraisemblance | Impact | Correction |
| ---- | --- | ------ | ------------- | ------ | ---------- |
| V1 | ISC BIND 9.4.2 | Élevé | Élevé | Élevé | Mettre à jour ISC BIND |
| V2 | MySQL 5.0.51a-3ubuntu5 | Élevé | Élevé | Moyen | Mettre à jour MySQL |
| V3 | SMTP - Postfix smtpd | Élevé | Élevé | Moyen | Mettre à jour Postfix smtpd |
| V4 | vsftpd 2.3.4 | Critique | Élevé | Élevé | Appliquer correctif de vsftpd |
| V5 | Telnet | Critique | Élevé | Élevé | Désactiver le service Telnet |

### Détails Techniques du Test d’Intrusion

#### Audit en Boîte Noire : Vulnérabilités

##### Vulnérabilité V1 : ISC BIND 9.4.2

Vulnérabilité critique dans BIND, un serveur DNS. Risque de déni de service et compromission de confidentialité. Mise à jour recommandée pour corriger ces vulnérabilités.

##### Vulnérabilité V2 : MySQL 5.0.51a-3ubuntu5

Failles dans MySQL permettant des attaques sur la sécurité des bases de données. Mise à jour immédiate et pratiques de sécurisation robustes recommandées.

##### Vulnérabilité V3 : SMTP - Postfix smtpd

Vulnérabilités dans le service SMTP pouvant mener à des accès non autorisés et fuites d'informations. Maintenance des mises à jour de sécurité nécessaire.

##### Vulnérabilité V4 : vsftpd 2.3.4

Vulnérabilité critique dans vsftpd permettant l'accès root non autorisé. Application immédiate du correctif officiel recommandée.

##### Vulnérabilité V5 : Telnet

Utilisation de Telnet, un service non sécurisé, augmente le risque de compromission des informations d'identification. Recommandation de désactiver Telnet au profit de SSH.

## Conclusion

### Synthèse des Découvertes

Notre audit a révélé plusieurs vulnérabilités critiques dans le système fictif. Ces vulnérabilités pourraient permettre l'accès à des informations sensibles et compromettre l'intégrité du système dans un environnement réel.

### Recommandations et Implications

Nous recommandons la mise à jour des composants vulnérables et l'amélioration des pratiques de sécurité. Ce projet souligne l'importance de la vigilance en matière de cybersécurité.

### Réflexions et Perspectives d'Apprentissage

Ce projet a été une occasion précieuse pour comprendre les défis de la sécurité informatique et a renforcé notre compréhension des menaces et de l'importance d'une approche proactive en cybersécurité.

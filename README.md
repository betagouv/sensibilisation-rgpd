# Sensibilisation RGPD

Des diapositives interactives pour une sensibilisation RGPD de **30 minutes**.

Ce projet est un fork de [sensibilisation-securite-vulnerabilites](https://github.com/betagouv/sensibilisation-securite-vulnerabilites) : même système de slides, même charte graphique.

## Plan

1. **Introduction** : le RGPD, de quoi parle-t-on ?
2. **Donnée personnelle** : définition, quiz interactif, données sensibles, pseudonymisation et anonymisation
3. **Responsable de traitement** : définition, sous-traitant, responsables conjoints, DPO
4. **Durée de conservation** : principe, cycle de vie (base active, archivage intermédiaire, archivage définitif), mise en pratique
5. **Accès et rectification** : droit d'accès, droit de rectification, mise en situation
6. **Grands principes** : article 5 du RGPD, focus sur la minimisation, finalité et bases légales
7. **Conclusion** : quiz final, points clés et ressources

## Sources

Le contenu est sourcé et **la référence est le site de la [CNIL](https://www.cnil.fr)**. Chaque slide affiche ses sources en pied de page. La liste complète des liens se trouve dans [`src/data/cnil-sources.ts`](src/data/cnil-sources.ts).

## Comment utiliser ce projet ?

La seule exigence est d'avoir Node.js & npm installés - [installer avec nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
npm i
npm run dev
```

Raccourcis : flèches gauche/droite pour naviguer, `F` pour le plein écran.

## Comment puis-je déployer ce projet ?

Le workflow GitHub Actions déploie automatiquement la branche `main` sur GitHub Pages. Le chemin de base est défini dans `vite.config.ts` (`/sensibilisation-rgpd/`) et doit correspondre au nom du dépôt.

Pour un autre hébergeur de site statique :

1. Construire le projet : `npm run build`
2. Déployer le dossier `dist`.

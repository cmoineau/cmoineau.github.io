# cmoineau.github.io
A repository for my web site.


Reminder : command to launch the jekyll server on Linux :

```bash
jekyll serve --host=localhost --trace
```

## TODO :
- [ ] Rajouter les langues parlées ?
- [ ] Bouger les scripts dans un fichier script pour séparer HTML et JS.

## Fonctionnalitées optionelles :

### Affichage de la dernière édition :
 
Il est important pour moi de laisser une trace du dernier moment où j'ai mis à jour ce site web.

J'ai donc d'abord ajouté un texte à la main que je modifiais à chaque modification. Cependant, cette approche était plus contraignante qu'autre chose. Notamment car je modifiais les champs pour la version Française et Anglaise du site web.

J'ai donc décidé d'utiliser l'API https://api.github.com/ afin de récupérer la date du dernier commit. 

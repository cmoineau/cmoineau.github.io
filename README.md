# cmoineau.github.io
A repository for my web site.


Reminder : command to launch the jekyll server on Linux :

```bash
jekyll serve --host=localhost --trace
```

## TODO :
- [X] Sur les expériences mettre un format
    - durée 
    - entreprise
    - lieux
    - description du poste
- [ ] Liste de mes capacités technologiques;
- [ ] Liste des softs skills;
- [ ] Faire une version mobile;
- [ ] Rédiger README;
- [ ] Ajouter CEA;
- [ ] Changer info de la bio;
- [ ] Changer la police; 
- [ ] Améliorer la barre pour mettre le bouton light mode;
- [ ] Ajout d'une barre verticale pour sommaire ?

## Fonctionnalitées optionelles :

### Affichage de la dernière édition :
 
Il est important pour moi de laisser une trace du dernier moment où j'ai mis à jour ce site web.

J'ai donc d'abord ajouté un texte à la main que je changeais à chaque modification. Cependant, cette approche était plus contraignante qu'autre chose. Notamment car je modifiais les champs pour la version Française et Anglaise du site web.

J'ai donc décidé d'utiliser l'API https://api.github.com/ afin de récupérer la date du dernier commit sur github. 

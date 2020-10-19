# cmoineau.github.io
A repository for my web site.


Reminder : command to launch the jekyll server on Linux :

```bash
jekyll serve --host=localhost --trace
```

## TODO :
- [X] Bouger les scripts dans un fichier script pour séparer HTML et JS;
- [X] Changer la langue sans revenir à l'accueil
- [X] Rédiger stage dans l'équipe shaman de l'IRISA;
    - [X] FR;
    - [X] EN.
- [ ] Sur les expériences mettre un format
    - durée 
    - entreprise
    - lieux
    - description du poste
    - conclusion
- [ ] Liste de mes capacités technologiques;
- [ ] Faire des tests au lancement du site ?;
- [X] Faire une page 404 plus "propre";
- [ ] Liste des softs skills.

## Fonctionnalitées optionelles :

### Affichage de la dernière édition :
 
Il est important pour moi de laisser une trace du dernier moment où j'ai mis à jour ce site web.

J'ai donc d'abord ajouté un texte à la main que je changeais à chaque modification. Cependant, cette approche était plus contraignante qu'autre chose. Notamment car je modifiais les champs pour la version Française et Anglaise du site web.

J'ai donc décidé d'utiliser l'API https://api.github.com/ afin de récupérer la date du dernier commit sur github. 

Description: ce ci et une page web de gestion de location les client peuvent louer un materiel et les admin peuvent gerer toute les locations


ou toruver les document:
les documents qui se trouve dans un fichier ignore :
    -  image de l'organisation de la bdd
    -   bdd en format sql 
pour l'oragnisation de travail vous pouvez le trouver dans projet sur le github 


comment l'installer 
cloner le projet avec github 
faire un npm i  pour installer les dependances
crée une base de donnée sur php my admin il faut aussi crée les table qui vont avec et faire un fichier de connexion
crée un .env a la racine du projet et marquer les information necessaire dedans comme dans le fichier .env.example
lancer le serveur avec npm start 
lancerun live server sur le front dans Acceuil

comment utiliser: 

partie User:

l'application permet de crée un user qui serra enregistrer dans la base de donée ensuite il peut se connecter une fois connecter il pourra consulter les article disponible en magasin meme faire une recherche par categorie en cliquant sur les images du dessus.
il pourra aussi louer l'article se qui l'ajoutera au panier dans le panier il pourra valider sa location ou supprimer si il l'a valide cela la retire du stock tant que l'utilisateur ne valide pas sa location l'objet reste disponible a la vente une fois valider il ne pourra plus changer sa location si besoin il pourra conatcter le support par le biais du bouton contacter qui permettra d'envoyer un mail au support  l'utilisateur peut aussi consulter ces location dans profile mais aussi changer son mots de passe en recevant un mail qui le redirigera sur une page ou il devra se connecter et changer son mot de passe 

partie admin : 

l'admin peut consulter tout les articles meme les indisponibles il peut les modifier et les supprimer il peut aussi faire une recherche par nom dans la barre de recherche et une recherche par category avec les images dans recherche par category il aura aussi acces a un bouton crée un article ou la il pourra ajouter des article a mettre en location  il peut aussi acceder un pannel d'admin suite au bouton admin dedans il pourra avoir acces a tout les user mais aussi a tout les article indisponible , article non louer  et toute les location 
sur les location il peut modifier la location ou la supprimer cela permettra de la remettre en stock si elle est en cours de location si la location est a valider il peut la supprimer ou la valider aussi 




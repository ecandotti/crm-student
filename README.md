# Student Manager  
## Front-End  

Mise en place d'une CI comprenant le build de l'app ainsi que la dockerisation de l'app  
Cette dernière sera disponible dans le Container Registry

**Dependences :** 
- React
- ReactDOM
- React Router
- React Icons
- MaterializeCSS

**Informations :**  
- [X] Authentification 
- [X] Supprimer un utilisateur  
- [X] Ajouter un utilisateur   
- [X] Lister tous les utilisateurs   
- [X] Afficher un utilisateur  
- [X] Dockerization de l'app  

**Pipeline :**  
- [X] Build de l'app  
- [ ] Test de l'app  
- [X] Update docker image  
- [ ] Deploy  

Avoir l'image Docker de l'app Front :  
`docker login registry.gitlab.com`  
`docker pull registry.gitlab.com/devops-2020-2021-student_manager/front:latest`  
`docker run -p 8787:80 -d --name studentContainer registry.gitlab.com/devops-2020-2021-student_manager/front`  

Il est important de _docker pull_ avant de créer le container (pour avoir la dernière version de l'image)

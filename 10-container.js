/********* (Containers) ************/ 

// Containers

/*
    => Microservices
    => Containers
    => Orchestration
    => Load balancers
    => Deployments

    Microservices :- Software architecture of loosely connected services.

    Monolith :- Software architecture of tightly coupled services.
    // easy and only one language

    // VPS :- virtual private server.


    // containers
    |----------|                        ubuntu
    |----------|                        NodeJS
    |----------|                        MySQL
    |          |                        Nginx
    |     |    |                        Python
    |     .    |
    |          |
    ------------



    // containers
    |----------|                            ubuntu
    |----------|                        NodeJS  MySQL
    |----------|                        
    |          |                        Nginx   Python
    |     |    |   ------------->          
    |     .    |
    |          |                        // in one container
    ------------



        OSX                                 Fedora

    NodeJS  MySQL                       NodeJS  MySQL
    
    Nginx   Python                      Nginx   Python

    // multiple container


   Defination 
 ----------------   
    Dockers :- Docker is a software platform that allows you to build, test, and deploy applications quickly.
               Docker packages software into standardized units called containers that have everything the 
               software needs to run including libraries, system tools, code, and runtime.

    1.) Amazon ECS (Elastic Container Service)
    2.) Apache
    3.) CoreOS rkt


    // containers :-

    => Lightweight
    => portable
    => easier for development
    => easier to manage
    => faster startup
    => Decouple application from infrastructure

*/ 


    // Creating a Docker Container

/*
 1.) create a docker contaimer for our app
      https://github.com/young/fullstack-for-frontend3/blob/main/apps/simpleServer/Dockerfile

         terminal

    pwd
    cd /var/www/app/
    clear

    vi Dockerfile
    docker
    sudo apt install docker.io      // y
    docker
    clear

    docker build -t node-fsfe
    docker build -t node-fsfe .
    sudo !!

    search in browser node docker (19 alpine, 3.6)

    docker image
    docker image ls
    sudo !!
    sudo docker run -d -p 3000:3000 node-fsfe
    pm2 stop index_ws.js    // error
    sudo docker run -d -p 8080:8080 node-fsfe
    docker ps
    sudo !!

*/    


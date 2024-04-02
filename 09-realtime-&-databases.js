
    /********* Websockets ***********/

/*
Q. what is wensocket ?

ans -> A communication protocol that enables real-time, two-way
	communication between a client and a server over a presistent connection.


Exercise : websocket 

    1. updating nginx configuration
    2. create a new node.js server
    3. Enable websockets


 Adding default server

    ---> location / {
        proxy_set_header Upgrade #http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_pass https://127.0.0.1:3000;
    }




    Createing a new server using node.js,express.

    =====> 
        const express = require('express');
        const server = require('htpp').createServer();
        const app = express();

        app.get('/',function(req,res){
            res.sendFile('index.html',{root:'public'});
        });


        server.on('request', app);
        server.listen(3000,function (){console.log("listening on 3000")})



    */    


//Databases 

        /*
            Relational
         -----------------
                * SQL
                * Table
                * Related data
                * Strict structure
                
            Non Relational 
          ----------------

                * NoSQL 
                * Data agnostic
                * Loose structure
        */

/*
        HTTP (Hypertext Transfer Protocol)
    ------------

                -------------------->
        request                         response           
                <--------------------


                
  Headers
    
                    Common headers
                 --------------------
    * User-agent     ->     The requesting device type
    * Accept         ->     What the device will handle
    * Accept-language->     Browser language
    * Content-type   ->     The type of media
    * Set-cookie     ->     Sets stateful information
    * X-             ->     Typically used for custom headers
                     

 Status Code 
        
        * 200       Ok
        * 301       Moved permanently
        * 302       Found (temporary redirct)
        * 401       Not authorized
        * 500       Internal server error 
        * 404       Page Not Found

    Status Code -> indicates status of an http resuest 


        * 1xx       Information
        * 2xx       Success
        * 3xx       Redirect 
        * 4xx       Client error
        * 5xx       Server error

    Note :- What is the proper status code for a successful POST request?
        ans -> 201 (create successfull)
        
 HTTPS :-

        1.) yourwebsite.com -------> visa 4235529596901600 -------> server
                                password 123455


                                    EVIL server
        2.) yourwebsite.com -------> visa 4235529596901600 -------> server                                



        2.) yourwebsite.com -------> *Ifkfi24fh243&&o9#$kD#!8b -------> server


 */          
        /******** (Implementing HTTPS with Certbot) ************/


/*
    HTTPS

        Certbot is an easy-to-use client that fetches a certificate from Let's Encrypt—an open certificate
         authority launched by the EFF, Mozilla, and others—and deploys it to a web server.

            1.) INstall and use certbot
            2.) Open firewall

            // https://certbot.eff.org/instructions

            // terminal

            sudo snap install core; sudo snap refresh core
            sudo apt-get remove certbot
            sudo snap install --classic certbot     // error - work painding
            sudo ln -s 
            man ln
            sudo certbot --nginx    // enter email  Y, N
            sudo cat /etc/nginx/sites-enabled/fsfe
            sudo certbot renew --dry-run
            clear

            sudo ufw allow https
            sudo ufw status
            
 */        

/*

         (Supporting HTTP/2)

         HTTP/2
        
                            http/1.1
        
        main.js  ----TCP----->
                 <------------
                 
        index.html  ----TCP--->         SERVER
                <--------------
                
        dog.png  ----TCP------>
                 <-------------               
                 

                            http/2

        main.js
        
        index.html  -----TCP----->      SERVER
                    <-------------
        dog.png                   
        
        
        method      status      protocol        scheme
        GET         200           h2             https
        GET         200           h2             https


        1.) Update nginx server
        // sudo vi /etc/nginx/sites-enabled/fsfe
                                |
                               \|/
                  liisten 443 http2 ssl;


    sudo vi /etc/nginx/sites-enabled/fsfe   // some changes in file
    sudo nginx -t
    sudo service nginx restart
*/ 
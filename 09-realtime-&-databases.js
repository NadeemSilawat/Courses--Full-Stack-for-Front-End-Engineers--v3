
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
        
 */          


        /******* Setup Nginx Web Server ***********/    


// What is Web Server ?

        //A computer program that stores, porcesses , and delivers web pages to users.


// Web Server 

        // * Apache  * Nginx


        /**
                * Web Server
                * Reverse proxy                        Nginx
                * Forward proxy                      (engine-x)
         * */        


/*
                                                Server
                   __server__                           
                   |         |
    request        |         |                  Appliction        
--------------->   |         |  
                   |_________|
                                                Database
                 
*/        





/*
                                                        Server
                   __server__                           
                   |         |
    request        |         |                          Appliction        
--------------->   |         |-----> Nginx ----->  
                   |_________|
                                                        Database
                 
*/        




// Exercise Nginx

        /*
           Nginx

                1. Install nginx
                   sudo apt install nginx

                2. Start nginx
                   sudo service nginx start

                3. Navigate to your server in the browser.
        
        
        */

        /*
                --> View default nginx configuration
                        less /etc/nginx/sites-availabe/default
        */                



// Nginx configuration

        /*
            root /var/www.html;  <------------  base directory for requests
            
            # Add index.php to the list if you are using PHP           
            index index.html index.htm index.nginx-debian.html;       ----------> html defaults

            server_name_;

            location / {    <------------ location block
                # First attempt to serve request  as file, then 
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
            }        /|\
                      |
                    directive                 
        */      



       /*
        ---->   Create and edit default page
                    sudo vi /var/www/html/index.html
       */             


                        /******** Application setup *********/  

// Exercise Appliction setup

        
            /*
                Node.js

              request
            ---------->  Server ----> nginx  -----> Node.js

            */
        

            /*
                1. Establish apllication file system
                2. Enable version control
                3. Create a node.js server
            */


            /*
                1. Change ownership of /www
                        sudo chown -R $USER:$USER /var/www

                2. Make an appliication directory
                        mkdir /var/www/app

                3. Initalize empty git repo in /app
                        git init
             */

            /*
                1. Create app file
                        touch app.js
                2. initialize project 
                        npm init

                3. Create a basic node server in app.js
                4. Start your application 
            */

// Basic node server
        
            /*
                const http = require("http");

                http.createServer(function (res,req){
                        res.write("On the way to being a full stack engineer!");
                        res.end();
                }).listen(3000);

                console.log("Server started on port 3000");

            */



              /*
                proxy pass
               --------------
               
                        location /{
                                proxy_pass URL_TO_PROXY_TO
                        }
                
                        ----------------------

                        * create a new nginx server and proxy requests
                                sudo vi /etc/nginx/sites-enable/fsfe
                        
                        ------------------------
                        
                        server{
                                listen80 default_server;
                                listen [::]:80 default_server;

                                root /var/www/html;
                                index index.html;

                                server_name <your_domain>;

                                location /{
                                        proxy_pass http://127.0.0.1:3000/;
                                }
                        }
                                
                        --------Virtual server-----------------

                        * Point nginx to server
                                sudo vi /etc/nginx/nginx.conf   


                        ##
                        # Virtual Host Configs
                        ##

                        include /etc/nginx/conf.d/*.conf;
                        include /etc/nginx/sites-enabled/fsfe

              */

                        /********** Virtual Server & PM2 *************/
//Application setup

                /*
                        * Validation nginx configruration
                                sudo nginx -t
                        * Resatart nginx
                                sudo service nginx restart
                */

// PM2 -> Process Manager 
                /*
                        1. install PM2
                                sudo npm i -g pm2
                        2. Start PM2
                                pm2 start app.js -watch

                        3. Setup auto restart
                                pm2 save
                                pm2 startup
                */

                                //END
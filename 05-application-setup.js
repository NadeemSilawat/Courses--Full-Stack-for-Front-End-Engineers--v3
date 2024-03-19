
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
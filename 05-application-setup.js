
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

                        
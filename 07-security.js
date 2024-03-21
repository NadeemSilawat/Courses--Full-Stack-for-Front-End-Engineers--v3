                        /********** Security *************/


/*
    1. Access Control
    2. Securing application
    3. Firewalls
    4. Permissions
    5. Updating software


                * Read auth log
                        sudo cat /var/log/auth.log


*/                      




// Security 
            /*
                * SSH
                * Firwalls
                * Updates
                * Two factor authentication
                * VPN
                        
            
            */




//Ports

            /**
                * port ->  Communication endpoint that maps
                            to specific process or network service
                
                            
                        --> See well known ports
                            less /etc/services
            */

                            
// Exercise nmap

                /*
                    1. Install nmap
                        sudo apt install nmap

                    2.  Run nmap
                        nmap <your_server_ip>
                    
                    3. Extra services/version information
                        nmap -sV <your_server_ip>
                */

                        // Firewall & UFW

// What is Firewall ?
            /*
                A firewall is a network security device 
                that monitors incoming and outgoing network 
                traffic and decides whether to allow or block specific traffic 
                based on a defined set of security rules.

            */      
           
//ufw --> uncomplicated firewall


/*
  Firewall
        command

                        http 
                        https
              $ufw allow ssh
                   deny 
                   reject     
*/
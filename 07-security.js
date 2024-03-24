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
                   deny         // Jem meant to say "Deny" will silently reject you.
                   reject     
*/


/*
        1. cheack firewall status
            sudo ufw status

        2. Allow ssh
            sudo ufw allow ssh

        3. Allow http 
            sudo ufw allow http

        4. Enable firewall
            sudo ufw enable 
          
            
          How would you create a ufw rule
          to block all HTTP connections?  

          sudo ufw reject http
*/


// Permissions

        /*
                owner       group       enveryone else
               -------     ------       ---------------
                rwx         rwx             rwx

                                                        read    4
                                                        write   2
                                                        execute 1
        */


// Exercise Application updates

            /*
                    * install unattended upgrades
                        sudo apt-get install unattended-upgrades
                    * Enable upgrades 
                        sudo  dpkg-reconfigure --priority=low unattended-upgrades
            */
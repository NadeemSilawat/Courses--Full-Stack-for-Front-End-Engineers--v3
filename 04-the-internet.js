


/*
    Topic:

   * How the internet works
   * Buying a domain
   * putting it together
*/        

        /********* How to Internet Works ************/

        
//The internet is built on cooperation and rules

    /*
        computer
            |
        network card                        Server
            |                                 /|\          
          router                          Load balancer
            |                                 /|\ 
           ISP                             Server cluster
            |                                 /|\  
        Tier 1 ISP ---> Tier 1 ISP -----> Datacenter
    */



//Terminology
    /*
        Internet - A Network of Networks

        Intranet - Private Network

        LAN - Local Area Network

        WAN - Wide area Network

    */

     /*
        IP - Internet Protocl

        IP Address - numerical label assigned to  an internet connected device.

                IPv34                       IPv6
                0.0.0.0                   2001:db8::ff00:4288   

     */   

                

// Exercise : Network Tool

        /*
            1. Check status of a network host
                ping google.com
            
            2. Follow the path of your request
                traceroute google.com

            3. Show network status
                netstat -lt | less                
        */


                // Internet & Networking Terminology
            
        /*
          TCP - transmission contrl protocol
            
          UDP - User datagram protocol

          ICMP - internet control message protocol

          Packet  - unit of data transmitted over a network
        */

// How to internet works

    /*  
           TCP/IP 
             _ _ _ -> google.com _ _ _ _ 
            /                           \
       [PC]/                             \[Server]
    127.0.0.1                                  ??

    */

//Terminology 

    /*
        DNS - domain name server

        Nameserver - hold DNS records to translate
                    domain names into IP addresses
    */



// DNS records

    /*
        A record - maps name to IP adress

        CNAME - maps name to name
    */


// Exercise - DNS

    /*
        1. Lookup the nameservers for an domain
            nslookup frontendmasters.com
        
        2. Lookup the DNS records for a domain
            dig frontendmaster.com


            View browser DNS cache
            Chrome - chrome://net-internet/#dns
            Firfox - about:networking#dns
    */


// Antonomy of a URL

        /*
        
                                URL - uniform resource locator

                blog.yourdomain.com/en/fulllstack?test=true                                
        
            * blog.yourdomain.com - subdomain
            * yourdomain.com    - domain
            * .com   - tld
            * /en/fullstack?   - Path
            * test=true - query paramete
        */

    
//Buying a Domain
        /*
            1. Buy a domain with a register 
                a. Update the nameserver to use Digital Ocean
            2. On Digital Ocean, add two A record with your IP Address
                * @
                * www

        */                



                                    /************ Server Setup *****************/

/*
    Topics : 

    1. Server setup
    2. Web Servers
    3. NodeJS
*/



//Brand new server

        /*
            1. Update software
            2. Restart your server
            3. Create a new user
            4. Make that user a superuser
            5. Enable login for new user
            6. Disable root login
        */



// Updating  and restarting
        
        /*
            1. ssh into your server
            2. update software
                apt update 
                apt upgrade
            3. restart the server
                shutdown now -r
        */  


//commands
    //sudo 

            /*
                root - highest permission level.
                    Allows unrestricted access to the OS

                sudo - super user do. Allows you to
                    run command and programs as root                    
            */



// Creating and updating users
            
            /*
                1. Create a new user
                    adduser <your_username>
                    
                2. Add user to "sudo" group
                    usermod -aG sudo <your_username>
                    
                3. Switch user
                    su <your_username>
                    
                4. Cheak sudo access
                    sudo cat /var/log/auth.log

            */

// Enable login as new user

            /*
                1. Create authorized_key file
                    ~/.ssh/authorized_keys

                2. Paste your public key 
                3. Exit
                4. Login with new user
                
                    ssh <your_username>@<your_IP>
            */


// Security 

        /*
        
            1. Change file premission
                chmod 644 ~/.ssh/authorized_keys
            2. Disable root login 
                sudo vi /etc/ssh/sshd_config
            3. Restart ssh daemon
                sudo service sshd restart

        */


                
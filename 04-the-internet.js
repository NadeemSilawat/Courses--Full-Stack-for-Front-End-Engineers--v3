


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
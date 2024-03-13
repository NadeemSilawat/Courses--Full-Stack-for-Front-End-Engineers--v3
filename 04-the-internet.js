


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
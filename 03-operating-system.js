
                /******* Operating System *********/

// Operating System 
        /*
            1. User
            2. Shell 
       ____ 3. Kernal_______
      |____ 4. Hardware_____|

            */            


                /********* Security & Hashing *********/

// Security 
        
        /*
            * Username / Password
            * Biomatric
            * SSH Key
        */


// What is Hashing?
    //Hashing algorithms are One-ways while encryption algorithms are two-ways..


// openssl(OPENSSL):- openssl is a cryptography toolkit implementing the TLS(Transport Layer Security)  


// command
    /*
        ~ temp openssl md5 foo | awk 
        ~ temp openssl md5 foo | awk -F'{print $2}' 
        ~ temp openssl md5 foo 
            // MD5(foo)= 286755fad04869ca523320acce0dc6a4
    */

                // Hasing With Salt

// command
    /*
        ~ temp openssl md5 foo | awk 
        ~ temp openssl md5 foo | awk -F'{print $2}' 
        ~ temp openssl sha1 foo 
        SHA1(foo)= c8fed00eb2e87f1cee8e90ebbe870c190ac3848c
        ~ temp openssl sha256 foo                           ----> 256 - 65 Character long
        SHA2-256(foo)= 6b3a55e0261b0304143f805a24924d0c1c44524821305f31d9277843b8a10f4e                 

    */        
            

        
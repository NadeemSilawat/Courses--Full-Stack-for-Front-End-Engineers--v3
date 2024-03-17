
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
            

// Hashing + Salt

    /*
        INPUT + SALT + HASH FUNCTION  =  SALTED HASH

        ./FOO + SALT + SHA1           =  ??
    */

// Note : sha256 or something more complex would be better than md5    

//What is Ransomware?
    //Since hashing is one-way, Ransomware typically uses encryption algorithms which are two-way


        // SSH Key Pair
// 1. Public Key    2. Private Key


    /*
    your Computer                       Server
    --------------                    ------------
    Private Key     <------------      Public Key
                    ------------>  
    Password        <------------      Encrypted
    */




//Exercise 
    /*
        SSH key
       -----------
       
            1. Move into the ~./ssh directory
            2. Genrate a key using ssh-keygen
            3. Nmae your key "fsfe"
    */    


//Command
    /*
        ~ temp cd ~/.sssh   
        ~ ssh  ls
        ~ ssh  ssh-keygen          ---> ssh key genrate fsfe is name
        ~ ssh  cat  fsfe          -----> show private key
            -----BEGIN OPENSSH PRIVATE KEY-----
            dommykeyjhdfhyu6777c8jjn008095mnkhjasdmmnbnjd=i884651132vhgd5233hjssabc=
            QyNTUxOQAAACBPtjHdW03Y6cFVei5W0fzu60oS3FlyTynJ0HJi8euxpgAAAJi4o00guKNN
            IAAAAAtzc2gtZWQyNTUxOQAAACBPtjHdW03Y6cFVei5W0fzu60oS3FlyTynJ0HJi8euxpg
            AAAEC9LEh8Qad3vZnSO4SHiHHdivLTbejZ8+LFEbiv35lWwk+2Md1bTdjpwVV6LlbR/O7r
            ShLcWXJPKcnQcmLx67GmAAAAFGRlbGxAREVTS1RPUC03NTFJTk01AQ==
            -----END OPENSSH PRIVATE KEY-----
        ~ ssh  cat fsfe.pub          ----> show public key
        ssh-ed25519 AAAAC3NzaCL88XCDlZDI1NTE5AAAAIE+2Md1bTdjpwVV6LlbR/O7rShLcWXJPKcnQcmLx7667Gm dell@DESKTOP-751INM5

        ~ ssh ls | grep fsfe
            fsfe    
            fsfe.pub
    */


    /*
        1. Move into the ~/.ssh directory
            cd ~/.ssh
        2. Genrate a key using ssh-keygen
            ssh-keygen
    */



    /*
        -> .ssh ls | grep fsfe
        fsfe   <------------------      private Key 
        fsfe.pub  <---------------      Public Key

        1. Copy the public key into Digital Ocean
        2. Finish setting up the server
    */     

    
// Exercise Login 
//         --------


    /*
        1. ssh into your server
            ssh root@<your_IP>
        2. ssh into your server your private key 
            ssh -i ~/.ssh/fsfe root<your_IP>            
        3. Exit your sever
            exit
    */

           
    /*
        1. Make sure Keychain is active
            vi ~/.ssh/config
        2. Add private key to keychain
            ssh-add --apple-use-keychain fsfe


                Host *
                 AddkeysToAgent yes
                 UseKeychain  yes

    */





         

    
    
        /******** Git Exercise **********/

//Version Control 

        /**
                * version control -> record changes to a file system to preserve history
                
                * git subversion mercurial 
         */



        /****** Git ***********/

//Exercise Git


/*
        1. create a git repository
        2. On your server, create an SSH key called gh_key
        3. Add the SSH key to Github
        4. Add remote repo 
        5. Ensure new SSH key is used
        6. Push local repository to Github


*/

/*
        Git 
     ----------

                1. Ensure git uses your new ssh key
                        vi ~/.ssh/config
                2. Changes Permission of config to 600
                        chmod 600 ~/.ssh/config
                3. Changes Permission of gh_key to 600
                        chmod 600 ~/.ssh/gh_key

                
                HOST -> github.com
                HOSTNAME -> github.com
                IDENTITYFILE -> ~/.ssh/gh_key
        
*/



// In case you get stuck

        /*Note
                1.Stop running process
                   --> pkill <process>
                
                2. Test your ssh connection
                   --> ssh -vT git@github.com

                3. Save a readonly file in vim
                   --> :w !sudo tee %
                   
                4. View permission as numbers
                   --> stat -c %a <file_name>
        */


                   
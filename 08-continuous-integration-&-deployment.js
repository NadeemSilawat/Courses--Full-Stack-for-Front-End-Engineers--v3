
/*
    1. CL/CD
    2.Shell scripting
    3. Cron

*/



                        /******** CL/CD **********/

    /*
        CL/CD
       --------
       
       Continuous integration -> Code changes are validated and merged back into
                                main branch as often as possible.

       Continuous delivery -> Code changes are automatically built and 
                                ready for production.

       Continuous deployment -> Builds are automatically deployed 
                                to production enviroments.                                
    */                        


                               
// https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment


/*
    cron 
   -------

   cron -> executes command on a schedule

   ------> 0 10 * * 1-5 sh./myscript.sh
        "Run./myscript.sh at 10:00 in every day-of-week
        from Monday through Friday."

        Shell Scripting
       -----------------
       
       #! /user/bin/bash

       now =$(date + "%r")
       read -p "What is your name> " name
       echo "The time is &now. Have a wonderful day $name"

       What is your name? Jem
       The time is 05:03:04 AM. Have a wonderful day Jem

*/

// Exercise -> Fake CL/CD 

        /*
              1. Create a bash script that git pulls from main branch.
              2. Creaet a crob job to execute script every 2 minutes
              
                                            #! <location of bash>
                                            <command to run>

                                      --> Shows location of bash shell       
                                            which bash
        */  


                /****Logging, Stream, & Redirection ***/


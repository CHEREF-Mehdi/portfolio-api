#!/bin/bash

printf  "\n================================== Start heroku build =================================="

printf  "\n\n1. Printing env variables\n\n" 
exec heroku run -a mcheref-portfolio-api printenv &
wait

printf  "\n\n1. Pushing code to heroku\n\n" &
exec git push heroku main &
wait

printf  "\n\n2. Run one instance of the app\n\n" &
exec heroku ps:scale web=1 &
wait
printf  "\n\n================================== End heroku build ==================================" 

printf  "\n\n================================== Opening the application ==================================\n\n" 
exec heroku open &
wait

printf  "\n\n================================== Heroku app logs ==================================\n\n"
exec heroku logs --tail
#!/bin/bash


echo "======================== Start heroku build ========================"

echo "1. Start push code to heroku"

exec git push heroku main

echo "2. Run one instance of the app"
exec heroku ps:scale web=1

echo "======================== End heroku build ========================"

exec heroku open

echo "======================== Heroku app logs ========================"
exec heroku logs --tail
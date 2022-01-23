# E-commerce Back End Starter Code# ORM_ECommerceBackend

#Target#
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

#ACCEPTANCE CRITERIA#
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database


Link to code: https://github.com/avneetk3/ORM_ECommerceBackend/master
Link to video:https://drive.google.com/file/d/1S0lJcQGHK0Ci9h6gPexBNfvyGOr5uhUu/view?usp=sharing

#Technology Used#
Node JS
MySQL
SEQUELIZE
EXPRESS.JS

#TOOLS USED#
Visual studio code
MySQL client
Powershell terminal
Insomnia and Firfox for testing routing 

#DEPENDENCIES#
node js 
mysql2
sequelize
express.js 
dotenv

#To Execute code#
npm install express sequelize mysql2
npm install dotenv

In terminal run command : source db/schema.sql
To seed the DB , run, : npm run seed 
Check DB by logging into terminal mysql2
show databases 
and change to use ecommerce_db 
and check tables : select * from product, select * from product_tag, select * from category, select * from tag

now run command npm start from the terminal and execute the code 
Check for api routing in insomina 

Screen shot of app:
![image](https://user-images.githubusercontent.com/92407474/150691739-cfee7d9e-b78c-4850-b6bc-858fc485657b.png)

Screen shot of Insomnia:
![image](https://user-images.githubusercontent.com/92407474/150691758-741ce7df-a9ec-43b6-b249-021c6ce82e63.png)

Created by Avneet Kaur , git hub: https://github.com/avneetk3

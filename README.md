# Contacts App

### Technologies: 

| Backend 	| Frontend 	| Database   	|
|---------	|----------	|------------	|
| Node    	| Vite     	| PostgreSQL 	|
| Express 	| React    	| SQL        	|
| Postman 	|     	    |         	    |

### Dependencies: 

| Backend      	| Frontend        	| Database 	|
|--------------	|-----------------	|----------	|
| cors         	| react-bootstrap 	| pg       	|
| dotenv       	| bootstrap       	|          	|
| concurrently 	| eact-router-dom 	|          	|
| nodemon      	|                 	|          	|
 

![Contact App Demo](contactApp.gif)

## Project Setup

1. The data for this project can be found in db.sql. If you have PostgreSQL installed on your local machine, you can follow the instructions inside db.sql to set up the database.

2. Go to your source directory in your terminal and run the command: `git clone https://github.com/beyzanurck/contacts-app.git`.

3. Go to the project folder (`cd contacts-app`) and clean owner's git: `rm -rf .git`.

4. Go to the server folder in the project (`cd server`) and run the command `npm install`.

5. Go to the client folder (`cd .. and cd client`) and run the command `npm install`.

6. Go to the server folder in the project (`cd server`) and run the command `touch .env`.

7. Place `DB_URL="postgresql://localhost/contactapp"` inside .env.

8. While you are in the sever folder, run the command `npm run dev` to start both servers.

9. Open your web browser and visit `http://localhost:1212` and `http://localhost:5173`.
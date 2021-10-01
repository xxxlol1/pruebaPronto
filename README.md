# PruebaPronto
Coding Challenge

## Instalattion of Package
Go to the server and front end server directory and run the package command installation: `npm install`

Starting running server:

Go to `cd server` and then run the server whit `npm run dev`.

Starting running Front-End:

Go to `cd front-end` and then run the server whit `npm start`.

## Views
![1](https://user-images.githubusercontent.com/23411606/134118600-e06652e8-c123-429c-94ed-1bf7ddbe1e4f.PNG)
![2](https://user-images.githubusercontent.com/23411606/134118603-7626bc18-317d-4804-aecd-5574b786c2d1.PNG)
![image](https://user-images.githubusercontent.com/23411606/135655656-00f9294f-270d-424a-83a0-3219d3b2d9f0.png)


## SQL SCRIPT
![image](https://user-images.githubusercontent.com/23411606/134114494-7aced616-64d5-487e-bce5-856fe5636820.png)

## DATABASE INSTALLATION
For the project to work without any problems, you need to create the database with their respective tables. MySQL is used for the database and the Script is in the folder called "sql" so that the database can be created
![image](https://user-images.githubusercontent.com/23411606/135655209-fc367bc7-a2db-4a11-849f-a81fe8c1ec6c.png)

## Available users exported in a JSON file 
A JSON file is created showing all available users from 8 a.m. to 5 p.m.
![image](https://user-images.githubusercontent.com/23411606/135656360-5e1a82d5-2d42-4017-8eeb-293116c228c8.png)


## TOOLS
 Name | Description |
:-----| ------------|
 [FontAwesome](http://fontawesome.io/) | Conjunto de herramientas de fuentes e íconos basado en CSS y Less. A partir de 2020, Font Awesome fue utilizado por el 38% de los sitios que utilizan scripts de fuentes de terceros, colocando a Font Awesome en el segundo lugar después de Google Fonts
 [Bootstrap](http://getbootstrap.com)  | Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.
 [Angular](https://angular.io/) |  Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.
---
## Explanation 
Para este proyecto se trabajo un Web Application el cual trataba sobre una calendarizacion de meetings. Para ello, se utilizo MYSQL, una base de datos relacional y tambien se utilizo un REST API, lo cual se utilizo para el WEB Service designado en angular utilizando la informacion mas accesible usando los metodos GET/POST/DELETE. Para la logica de buscar usuarios que esten tiempo libre, se hizo una consulta de MYSQL el cual la query consiste en buscar en todos los horarios menos en las horas de almuerzo.

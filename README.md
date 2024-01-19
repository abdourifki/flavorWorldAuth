## FlavorWorld Recipe Book API
## Overview
The development of a robust API for the 'FlavorWorld' Online Recipe Book is at the core of our project. This API, built using Express.js and MongoDB, empowers users to access a myriad of features, including recipe exploration, addition, modification, and deletion.

## Features
## Recipe Exploration:

Endpoint: /recipes
Method: GET
Description: Retrieve a list of recipes, categorized for easy exploration.
## Recipe Details:

Endpoint: /recipes/{recipeId}
Method: GET
Description: Obtain comprehensive details about a specific recipe.
## Add a New Recipe:

Endpoint: /recipes
Method: POST
Description: Add a new recipe to the FlavorWorld collection.
## Modify Existing Recipe:

Endpoint: /recipes/{recipeId}
Method: PUT
Description: Update an existing recipe with new information.
## Delete Recipe:

Endpoint: /recipes/{recipeId}
Method: DELETE
Description: Remove inappropriate or unwanted recipes from the collection.

## Technology Stack
Express.js:

A minimal and flexible Node.js web application framework that simplifies handling HTTP requests.
MongoDB:

A NoSQL database system that efficiently stores and retrieves recipe data.
## Setup the Environment

To run this project, you will need to install all the Dependencies using : 

`yarn`  **or**  `npm i`

you will need to create `.env` file and add the following environment variables to your `.env` file :

`PORT`  **and**  `DB_URL`

Then start the server by running:

`npm start`  **or**  `yarn start` 
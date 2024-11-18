## Setting up Backend Application using NodeJS + ExpressJS + MongoDB

1. Create a new directory.

2. Open the terminal and navigate to the directory.

3. Run the command npm init to create a package.json file or run npm init -y to create a package.json file with default values.

4. Create a new file index.js.
Install the required packages using the command npm install mongoose.

5. Initialize the repository as a git repository using the command git init.

6. Create a .gitignore file and add the node_modules folder to it.

7. In the index.js file, write a code to connect to the MongoDB database.

8. Run the application using the command node index.js.
Install express using the command npm install express.

## Schema - MongoDB

1. A Schema defines the structure of the document.
2. A Schema is a blueprint of the document.

## API Versioning

1. API versioning is the practice of versioning the API to manage changes in the API.

2. Example: /api/v1/recipes, /api/v2/recipes.

## Status Codes

1. 200: OK
2. 201: Created
3. 301: Moved Permanently
4. 400: Bad Request
5. 401: Unauthorized
6. 403: Forbidden
7. 404: Not Found
8. 500: Internal Server Error

## Example Data
{
    "_id": "6738b407521f225b5b14a346",
    "title": "Caesar Salad",
    "description": "A refreshing salad with romaine lettuce, croutons, and Caesar dressing.",
    "ingredients": [
        {
            "name": "Romaine lettuce",
            "quantity": "1 head",
            "_id": "6738b407521f225b5b14a347"
        },
        {
            "name": "Croutons",
            "quantity": "1 cup",
            "_id": "6738b407521f225b5b14a348"
        },
        {
            "name": "Parmesan cheese",
            "quantity": "50g",
            "_id": "6738b407521f225b5b14a349"
        },
        {
            "name": "Caesar dressing",
            "quantity": "1/2 cup",
            "_id": "6738b407521f225b5b14a34a"
        },
        {
            "name": "Chicken breast",
            "quantity": "optional, 200g",
            "_id": "6738b407521f225b5b14a34b"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "instruction": "Wash and chop the romaine lettuce.",
            "_id": "6738b407521f225b5b14a34c"
        },
        {
            "stepNumber": 2,
            "instruction": "Grill the chicken breast (if using) and slice.",
            "_id": "6738b407521f225b5b14a34d"
        },
        {
            "stepNumber": 3,
            "instruction": "Combine lettuce, croutons, and Parmesan cheese in a bowl.",
            "_id": "6738b407521f225b5b14a34e"
        },
        {
            "stepNumber": 4,
            "instruction": "Add Caesar dressing and toss to coat evenly.",
            "_id": "6738b407521f225b5b14a34f"
        },
        {
            "stepNumber": 5,
            "instruction": "Top with sliced chicken if desired. Serve immediately.",
            "_id": "6738b407521f225b5b14a350"
        }
    ],
    "category": "Lunch",
    "createdAt": "2024-11-16T15:02:31.828Z",
    "updatedAt": "2024-11-16T15:02:31.828Z",
    "__v": 0
}

## Api End Points

### 1. Create Recipe
- **URL**: `/api/recipes`
- **Method**: `POST`
- **Description**: Creates a new recipe.

### 2. Get All Recipe
- **URL**: `/api/recipes`
- **Method**: `GET`
- **Description**: Gets all recipes.

### 3. Get All By ID
- **URL**: `/api/recipes/id`
- **Method**: `GET`
- **Description**: Gets recipes by id.

### 4. Update Recipe
- **URL**: `/api/recipes/id`
- **Method**: `PUT`
- **Description**: Update recipes by id.

### 5. Delete Recipe
- **URL**: `/api/recipes/id`
- **Method**: `DELETE`
- **Description**: Delete recipe by id.

POSTMAN DOCUMENTATION LINK [here](https://documenter.getpostman.com/view/39771320/2sAYBPmEMN)
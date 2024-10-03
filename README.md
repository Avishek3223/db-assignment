# User and Address Management API

This project provides a backend API where users can register and store their addresses. The system implements a **one-to-many** relationship between **Users** and **Addresses** using Node.js and MongoDB.

## Features

- Create users and store their names.
- Create multiple addresses for a user.
- One-to-many relationship between users and addresses.

## Prerequisites

- Node.js installed on your machine
- MongoDB connection string (you can use a local MongoDB instance or MongoDB Atlas)
- Postman for testing API requests

## Getting Started

### 1. Clone the repository

To get started, clone this repository to your local machine.

```bash
git clone https://github.com/Avishek3223/db-assignment.git

```
### 2. Install dependencies

```bash
cd backend
npm install
```
### 3.Run the development server

```bash
npm run dev
```
### 4.Testing the API with Postman

- You can use Postman to send requests to the API and test the functionality. Below are the available API routes:
  
## Create a User
- Method: POST
- Endpoint:
  ```bash
  http://localhost:3000/api/users
  ```
- Body: Send a JSON payload with the user's name
  ```bash
  {
  "name": "John Doe"
  }
  ```
- Respons:
  ```bash
  {
  "_id": "USER_ID",
  "name": "John Doe",
  "__v": 0
  }
  ```
  
## Create an Address

- Method: POST
- Endpoint:
  ```bash
  http://localhost:3000/api/addresses
  ```
- Body: Send a JSON payload with the user's name
  ```bash
  {
  "userId": "USER_ID",
  "address": "123 Main St"
  }
  ```
- Respons:
  ```bash
  {
  "_id": "ADDRESS_ID",
  "user": "USER_ID",
  "address": "123 Main St",
  "__v": 0
  }
  ```
## Checking:

Use the connection string give below to see the data base additionally i am adding a screenshot if you counter any difficulties while checking.
```bash
mongodb+srv://avishekmishra56:B7kTQtULHlMXhQ3j@cluster0.bswxt.mongodb.net/
```
# User Table
![image](https://github.com/user-attachments/assets/942ea0a3-757e-4026-922c-d5ca49dcc6cc)

# Address Table
![image](https://github.com/user-attachments/assets/b322a706-b77f-4c67-9669-81d18b0adec8)




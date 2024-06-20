# Modular-Login-System-withUI
A modular login system built with Node.js and MongoDB for user registration and authentication, featuring JWT-based authentication and middleware to protect routes. This system includes a modern and aesthetic frontend for user interaction.

## Table of Contents
* Features
* Installation
* Usage
* API Endpoints
* Screenshots
* License

## Features
* User Registration with Username, Email, and Password
* User Login with Email and Password
* JWT-based Authentication
* Protected Routes
* Responsive and Modern Frontend Design
* Error Handling and Validation

## Installation
* Clone the repository:
  
  ``
  git clone https://github.com/BhargavA29/Modular-Login_System-withUI.git ``

  ``
  cd Modular-Login_System-withUI
  ``
* Install backend dependencies:

  `` cd backend ``

  `` npm install ``

* Install frontend dependencies:

  `` cd ../frontend ``

  `` npm install ``

* Set up environment variables:

  Create a .env file in the backend directory and add your MongoDB URI and JWT secret:

  `` MONGO_URI=your_mongodb_connection_string ``
  
  `` JWT_SECRET=your_jwt_secret ``

## Usage

* Start Backend Server

  `` cd backend ``

  `` npm start / node backend.js ``

## API Endpoints

* User Registration

  URL: /api/auth/register

  Method: POST

  Body :
  {

  "username": "testuser",

  "email": "testuser@example.com",

  "password": "password123"

  }

* User Login

  URL: /api/auth/login

  Method: POST

  Body :

  {

  "email": "testuser@example.com",

  "password": "password123"

  }

* Protected Route

  URL: /api/protected

  Method: GET

  Headers: Authorization: Bearer <token>

  ## Screenshots

  Check the Repository

  ## Contributing

  Contributions are welcome! Please open an issue or submit a pull request.

  ## License

  This project is licensed under the MIT License.
  

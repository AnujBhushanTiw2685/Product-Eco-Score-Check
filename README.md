# Full-Stack Application with ReactJS, NodeJS, & MongoDB

This project is a full-stack web application using ReactJS for the frontend, NodeJS for the backend, and MongoDB as the database. This guide provides detailed instructions on how to set up and run the application locally.

### Technologies Used:
- **Frontend**: ReactJS (with Vite for development server)
- **Backend**: NodeJS with Express
- **Database**: MongoDB

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Frontend Setup (ReactJS)](#frontend-setup-reactjs)
3. [Backend Setup (NodeJS)](#backend-setup-nodejs)
4. [Setting Up MongoDB](#setting-up-mongodb)
5. [Connecting Frontend and Backend](#connecting-frontend-and-backend)
6. [Testing the API with Postman](#testing-the-api-with-postman)
7. [Additional Configuration](#additional-configuration)

---

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v14.x or higher)
  - [Download and install Node.js](https://nodejs.org/)
- **MongoDB** (v4.x or higher)
  - [Download and install MongoDB](https://www.mongodb.com/try/download/community)
- **Postman** (optional, for testing APIs)
  - [Download and install Postman](https://www.postman.com/downloads/)

---

## Frontend Setup (ReactJS)

The frontend of this application is built using ReactJS, with Vite providing fast development server and hot module replacement (HMR).

### 1. Navigate to the Frontend Directory
Open a terminal or command prompt and navigate to the ReactJS project folder:



# Install Frontend Dependencies
Run the following command to install the necessary dependencies for the React app:


`npm install`
This will install all required libraries for the React app.

3. Run the React Development Server
To start the React development server, run the following command:


`npm run dev`
By default, this will start the frontend server at `http://localhost:3000`.

# Backend Setup (NodeJS)
The backend of the application is built using NodeJS and Express to handle API requests and interact with the MongoDB database.

1. Navigate to the Backend Directory
Open another terminal window and navigate to the NodeJS backend folder:


`cd /path/to/your/backend`

2. Install Backend Dependencies
Run the following command to install the necessary dependencies for the backend:


`npm install`
This will install all required libraries for the backend, including Express, MongoDB client, and other utilities.

3. Configure the Environment
In the backend project, create a `.env` file (if it doesn't already exist) in the root of the project and configure your MongoDB connection URI and other environment variables. Example .env file:


`MONGO_URI=mongodb://localhost:27017/your-database-name
PORT=5000
JWT_SECRET=your-secret-key`

Replace your-database-name with the name of your MongoDB database.
Replace your-secret-key with a secret key used for JWT authentication (if applicable).

4. Start the NodeJS Backend Server
Once the environment is configured, you can start the backend server by running the following command:


`npm start`

This will start the backend server on port 5000 (by default, or the port specified in .env). You can access the backend API at `http://localhost:5000`.


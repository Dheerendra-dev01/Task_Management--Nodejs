# Task Management Application

This is a simple Task Management application built with Node.js, Express, and MongoDB.

## Features

- Create tasks with title and description
- View a list of all tasks
- Mark tasks as completed
- Edit task details
- Delete tasks

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/dhiree/Task_Management--Nodejs
   cd task-management
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   MONGODB_URI=''
   PORT=4000
   ```
   Adjust the MONGODB_URI if your MongoDB is hosted elsewhere.

4. Start the application:
   ```
   npm start
   ```
   For development with auto-restart on file changes, use:
   ```
   npm run dev
   ```

## API Endpoints

- POST /task - Create a new task
- GET /task - Get all tasks
- GET /task/:id - Get a specific task
- PATCH /task/:id - Update a task
- DELETE /task/:id - Delete a task

## Code Structure

- `app.js`: Main application file
- `models/task.js`: Mongoose model for tasks
- `routes/tasks.js`: Defines the API routes and connects them to the appropriate controller functions.
- `controller/taskController.js`: Contains the logic for handling task-related requests (create, get, update, delete, etc.).

## Key Decisions

1. Used MongoDB for its flexibility with document-based storage.
2. Implemented RESTful API design for clear and standard endpoints.
3. Used environment variables for configuration to enhance security and flexibility.
4. Implemented basic validation to ensure task titles are not empty.
5. Used async/await for cleaner handling of asynchronous operations.

## Error Handling

- The application provides meaningful error messages for invalid operations.
- HTTP status codes are used appropriately to indicate the nature of responses.

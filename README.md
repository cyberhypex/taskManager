Task Manager App (MERN Stack)

A simple and efficient Task Manager Application built using the MERN stack.
You can create, update, delete, and manage your daily tasks seamlessly.

Project Structure
taskManager/
│
├── backend/     # Express + MongoDB API
├── frontend/    # React (Vite) client

Backend Setup

Follow these steps to set up and run the backend server:

1. Clone the Repository
git clone <your-repo-url>
cd taskManager/backend
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file in the backend directory and add:

MONGO_URI=your_mongodb_atlas_uri


Use a MongoDB Atlas connection string for MONGO_URI.

4. Run the Backend Server
npm run start


Frontend Setup

Follow these steps to set up and run the frontend:

1. Navigate to Frontend Directory
cd ../frontend/fend
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file in the frontend/fend directory and add:

VITE_BACKEND_URL=http://localhost:3000
4. Run the Frontend
npm run dev


Running Tests (Backend)

To run backend tests:

cd backend
npm run test

Tech Stack
Frontend: React (Vite)
Backend: Node.js + Express
Database: MongoDB Atlas
Testing: Jest / Supertest


Notes
Ensure MongoDB Atlas is properly configured.
Default backend runs on: http://localhost:3000

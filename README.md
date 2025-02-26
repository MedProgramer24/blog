## 🚀 Blog Application
A simple and powerful blog application built with React and Node.js! This app allows users to view, create, update, and delete blog posts seamlessly. It comes with an admin role for restricted operations and supports image uploads for blog posts.

## 📸 Features
CRUD Operations:
✍️ Create, 📖 Read, 📝 Update, and ❌ Delete blog posts
Image Upload: Add images to your blog posts effortlessly
Admin Role: Access control to ensure only authorized users can update or delete posts
🛠️ Technologies Used
## Frontend
⚛️ React - Build fast and interactive user interfaces
🔄 React Router - Seamless navigation in a single-page application
🌐 Axios - For making HTTP requests to the backend
🎨 React Icons - For icons like trash and edit
💬 React Hot Toast - Display beautiful toast notifications
## Backend
🖥️ Node.js - JavaScript runtime built on Chrome’s V8 engine
🌐 Express.js - Fast and minimalist web framework
🗄️ MongoDB (Mongoose) - NoSQL database for storing blog data
📸 Multer - For handling file uploads (like images)
🔐 JWT - JSON Web Token for authentication
🔑 Bcrypt.js - Secure password hashing

## 📥 Installation
Prerequisites
Ensure you have these installed:

Node.js
MongoDB
Git
Backend Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/MedProgramer24/blog.git
cd blog
Navigate to the backend folder and install dependencies:

bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend folder with the following environment variables:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
Start the backend server:

bash
Copy
Edit
npm start
Now, your backend should be running at http://localhost:5000.

Frontend Setup
Navigate to the frontend folder and install dependencies:

bash
Copy
Edit
cd frontend
npm install
Create a .env file in the frontend folder with the following variable:

ini
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Start the frontend development server:

bash
Copy
Edit
npm start
Your frontend should be running at http://localhost:3000.

## 🎯 Usage
Frontend
View all blog posts in an elegant grid view
Create a new blog post with a rich text editor
Edit and update your blog posts with ease
Delete unwanted posts with a confirmation prompt
Backend
POST /blog/create: Create a new blog post
GET /blog/GetPosts: Get all blog posts
PUT /blog/update/:id: Update a specific blog post (requires admin authentication)
DELETE /blog/delete/:id: Delete a blog post (requires admin authentication)
## 🔧 Contributing
Want to contribute to this project? Follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to your branch (git push origin feature-branch).
Open a pull request and submit it!
## 📜 License
This project is licensed under the MIT License.

## 🙏 Acknowledgements
React: A JavaScript library for building user interfaces
Node.js: A JavaScript runtime built on Chrome's V8 engine
MongoDB: NoSQL database for storing blog data
Express.js: A minimal web framework for Node.js
Multer: Middleware for handling multipart/form-data (used for uploading images)
JWT: Authentication middleware using JSON Web Tokens
Bcrypt.js: Password hashing library
## ⚡ Demo Screenshot

<img src="./images/WhatsApp Image 2025-02-25 at 22.48.37_021820b6.jpg" alt="preview">

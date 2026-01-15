# Perfume Shop – Full Stack Web Development Internship Assignment

A full-stack perfume selling web application built as part of the Web Development Internship assignment.  
The project demonstrates end-to-end development including frontend UI, backend APIs, and database integration.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Database
- MongoDB Atlas (Cloud)

---

## ✨ Features

### Homepage
- Responsive navigation bar
- Call-to-action banner
- Dynamic product cards
- Hover effects on product cards
- Clickable product cards leading to product detail pages

### Product Detail Page
- Product image gallery
- Product name, description, and price
- Available size information
- Share product button
- Customer reviews section
- Add review functionality

### Backend & Database
- RESTful APIs for products and reviews
- MongoDB schemas with proper relations
- Dynamic data fetching (no hardcoded data)
- Error handling and clean code structure

---

## 🧩 Project Structure

perfume-shop-fullstack/
│
├── Backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── database/
│ │ ├── utils/
│ │ ├── app.js
│ │ └── index.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
│ └── package.json
│
├── screenshots/
│
└── README.md-



---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd perfume-shop-fullstack


2️⃣ Backend Setup
cd Backend
npm install
npm run dev


Create a .env file inside Backend/src with:

MONGO_URI=your_mongodb_connection_string
PORT=8000
CORS_ORIGIN=http://localhost:5173

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173


Backend will run on:

http://localhost:8000

🧪 Mock Data

Initial product and review data are inserted using MongoDB Atlas.

Products and reviews are fetched dynamically from the database.

No static or hardcoded data is used in the UI.

📸 Screenshots

Screenshots of:

Homepage

Product Detail Page

Reviews Section

MongoDB Collections

are included in the screenshots/ folder.

🧠 Learning Outcomes

Built a full-stack application from scratch

Hands-on experience with React and Express

Implemented REST APIs with MongoDB

Debugged real-world issues like CORS, database mismatches, and routing

Structured scalable backend architecture

📌 Conclusion

This project demonstrates my ability to design, develop, debug, and deliver a complete full-stack web application.
It reflects practical knowledge of modern web technologies and real-world development workflows.
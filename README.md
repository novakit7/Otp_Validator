# OTP Validator (Beginner Learning Project)

## About the Project

This is a **small beginner project** created to learn how **OTP (One Time Password) verification works in a MERN stack application**.

The goal of this project is to understand:

* How to build forms in **React**
* How to send requests using **Axios**
* How a **Node.js / Express backend** handles requests
* Basic **OTP verification flow**

This project is made for **learning purposes only** and is not meant for production use.

---

## Project Structure

```id="p9j3l8"
otp-validator
│
├── validator-client   (React Frontend)
│
└── server             (Node.js / Express Backend)
```

---

## Features

* User signup form
* Send OTP to user
* OTP verification
* Display API response messages
* Simple user profile page
* Clean UI using external CSS
* React Router navigation

---

## Application Flow

```id="n43j8k"
Signup Form
     ↓
Send OTP
     ↓
Enter OTP
     ↓
Verify OTP
     ↓
Profile Page
```

---

## Tech Stack

### Frontend (validator-client)

* React
* Axios
* React Router
* CSS

### Backend

* Node.js
* Express
* MongoDB

---

## How to Run the Project

### 1. Clone the repository

```bash id="a7q2lx"
git clone https://github.com/yourusername/otp-validator.git
```

---

### 2. Install Frontend Dependencies

```bash id="7l9z2m"
cd validator-client
npm install
```

Run frontend:

```bash id="5x2h9f"
npm run dev
```

---

### 3. Install Backend Dependencies

```bash id="3c0o1p"
cd server
npm install
```

Run backend:

```bash id="2m5n9y"
npm start
```

---

## Learning Objectives

This project helped me practice:

* React components
* Handling forms in React
* Sending API requests using Axios
* Express routing
* OTP verification logic
* Passing data between components
* Basic MERN project structure

---

## Future Improvements

Possible improvements for this project:

* Add password hashing (bcrypt)
* Add JWT authentication
* Add OTP expiration timer
* Add resend OTP feature
* Improve UI design
* Store user sessions

---

## Note

This project is built by a **student for learning purposes** while practicing the MERN stack and authentication concepts.

It focuses on understanding the **basic OTP verification flow** rather than production-level security.


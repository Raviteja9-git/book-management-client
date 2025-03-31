# Book Manager App – Frontend

Welcome to the Book Manager App — a full-stack application that allows users to register, log in, and manage their personal book collections.

This repository contains the frontend codebase built with:

- React + TypeScript
- Tailwind CSS
- JWT-based authentication
- Clean and responsive UI/UX

---

## Features

- User Authentication (Register & Login)
- Secure JWT token handling
- Add, Edit, Delete, and View books
- Protected Dashboard (only accessible when logged in)
- Fully responsive design using Tailwind CSS
- Clean, minimal UI/UX with component-based architecture

---

## Tech Stack

| Frontend        | Description                            |
|-----------------|----------------------------------------|
| React (Vite)    | Fast React app with Vite as build tool |
| TypeScript      | Strongly typed code                    |
| Tailwind CSS    | Utility-first styling                  |
| React Router    | Client-side routing                    |
| React Icons     | Beautiful icons for inputs/actions     |

---

## Folder Structure

```
src/
├── api/               # Handles API calls (auth & books)
├── components/        # Reusable components (form, list, etc.)
├── pages/             # Page components (Home, Dashboard)
├── utils/             # Utility functions (e.g., token management)
├── App.tsx            # Routes configuration
└── main.tsx           # App entry point
```

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)

---

## Getting Started

### 1️ Clone the Repository

```bash
git clone https://github.com/your-username/book-manager-frontend.git
cd book-manager-frontend
```

### 2️ Install Dependencies

```bash
npm install
```

### 3️ Create Environment File

Create a `.env` in the root of the project:

```env
VITE_AUTH_API_URL=http://localhost:5000/api/auth
VITE_BOOK_API_URL=http://localhost:5000/api/books
```

> Replace the URL if your backend is hosted elsewhere.

---

## Running the App Locally

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

##  Connecting to the Backend

This app connects to a pre-built backend API that exposes the following routes:

###  Auth Routes

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | `/api/auth/register` | Register new user    |
| POST   | `/api/auth/login`    | User login           |

###  Book Routes (JWT Protected)

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/books`     | Get all books            |
| POST   | `/api/books`     | Add new book             |
| PUT    | `/api/books/:id` | Update a book            |
| DELETE | `/api/books/:id` | Delete a book            |

---

##  How Authentication Works

- On login/register, a JWT token is received from the backend.
- The token is saved in `localStorage`.
- Every book-related API call sends this token in the `Authorization` header:

```http
Authorization: Bearer <your-token>
```

- Logging out removes the token from `localStorage`.

---

##  Build for Production

```bash
npm run build
```

The final static site will be generated inside the `dist/` folder.  
You can deploy it to:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Hostinger](https://www.hostinger.com/)
- or any static hosting platform

---


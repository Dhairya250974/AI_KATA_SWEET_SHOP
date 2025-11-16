👉 [Click here to read the full Problem Statement](./Problem-Statement.md)

# AI Kata Sweet Shop Management System

A full-stack **Sweet Shop Management System**, built as a **TDD (Test-Driven Development) kata**.  
It demonstrates skills in API development, database management, frontend implementation, DevOps practices, and the responsible use of AI tools.


---

## 📖 Project Overview
This application is a small e-commerce-style Sweet Shop.

- Users can register and log in.
- Browse sweets, search & filter sweets.
- Purchase sweets (lowers stock & records purchases in profile).
- Admin users can **create, update, delete, and restock** sweets.

The project was developed following a **TDD mindset**: tests were written before implementation.  
See the **Test Reports** section for details.

---

## ✨ Features

### 👤 User
- ✅ Register & Login (JWT authentication)
- ✅ View sweets
- ✅ Search/filter sweets (name, category, price range)
- ✅ Purchase sweets (with stock validation, purchase history stored in profile)

### 🔑 Admin
- Role-based access control (admin vs user)
- Add / Update / Delete sweets
- Restock sweets

### 🎨 Frontend
- React + Tailwind CSS
- Pages: `Home`, `All Sweets`, `Sweet Detail`, `Profile`, `Admin Dashboard`, `Add Sweet`, `About`, `Contact`
- Debounced searching & filtering
- Responsive SPA with clean UI

### 🧪 Testing
- Jest + Supertest (backend)
- React Testing Library (frontend)
- High coverage for critical flows

---

## 🛠 Tech Stack
- **Backend:** Node.js + Express  
- **Database:** MongoDB (local / Atlas)  
- **Auth:** JWT  
- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS  
- **HTTP Client:** axios  
- **Testing:** Jest, Supertest, React Testing Library  
- **Deployment:** Vercel  
- **CI/CD:** GitHub Actions  
- **Version Control:** GitHub (AI co-author metadata where AI-assisted)  

---

## 🏗 Architecture
```
[React SPA] <--> [Express API (JWT auth, routes)] <--> [MongoDB]
```
- API endpoints under `/api/*`
- Authentication middleware verifies JWT
- Admin middleware checks `req.user.role === 'admin'`

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- Git

### Repository Structure
```
/ Sweet-Shop-Management-System
├─ backend/                # Express API
├─ frontend/               # React app 
└─ README.md        
```

### Environment Variables
Backend `.env` file example:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/candycloud
JWT_SECRET=change_this_secret
NODE_ENV=development
JWT_EXPIRE=1d
ADMIN_USERNAME=username-here
ADMIN_PASSWORD=password-here
```

### Run Locally
**Backend**
```bash
cd backend
npm install
npm run dev
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

---

## 📚 API Reference

### Auth
- `POST /api/auth/register` → Register user
- `POST /api/auth/login` → Login user
- `GET /api/auth/me` → Current user

### Sweets
- `GET /api/sweets` → All sweets
- `GET /api/sweets/search?...` → Search sweets
- `GET /api/sweets/:id` → Sweet by ID
- `POST /api/sweets` → Add sweet (Admin)
- `PUT /api/sweets/:id` → Update sweet (Admin)
- `DELETE /api/sweets/:id` → Delete sweet (Admin)

### Inventory
- `POST /api/sweets/:id/purchase` → Purchase sweet
- `POST /api/sweets/:id/restock` → Restock sweet (Admin)

---

## 🗄 Database Schema
**User**
```json
{ "username": "string", "password": "string", "role": "admin | user", "purchases": [] }
```
**Sweet**
```json
{ "name": "string", "category": "string", "price": "number", "quantity": "number", "image": "string" }
```

---

## 🧪 Testing (TDD)
- Covers: auth, protected routes, CRUD, purchase, search
```bash
cd backend
npm test
```

---

## 🔐 Security Checklist
- [x] Helmet for secure headers  
- [x] Rate limiting on auth/purchase routes  
- [x] Input validation & sanitization  
- [x] Env vars via `.env` (never commit real secrets)  
- [x] CORS with whitelist  


---

## 🤖 AI Usage
This project used AI tools responsibly to speed up scaffolding, debugging, and testing.  
- **ChatGPT** → Backend logic, debugging, test brainstorming  
- **Gemini** → UI design ideas  

Co-authorship trailers are included in commits where AI contributed.

---

## 📝 Commit Conventions
Small, focused commits with messages describing what/why.  
Example with AI co-author:
```bash
feat: implement user register endpoint
Used ChatGPT for input validation boilerplate. Adjusted manually.
Co-authored-by: ChatGPT <chatgpt@openai.com>
```

---

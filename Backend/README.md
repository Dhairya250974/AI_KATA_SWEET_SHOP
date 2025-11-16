# Backend API - Sweet Shop

A robust Node.js/Express REST API for managing a sweet shop e-commerce platform with authentication, product management, and purchase functionality.

## Features

### Authentication & Authorization
- User registration with password hashing (bcryptjs)
- JWT-based authentication with protected routes
- Role-based access control (admin/user)
- Automatic admin user initialization on startup
- User profile retrieval endpoint

### Sweet Management
- Full CRUD operations for sweets (Create, Read, Update, Delete)
- Public product listing and search functionality
- Advanced search with filters (name, category, price range)
- Stock management with quantity tracking
- Admin-only product management endpoints
- Purchase functionality with stock validation

### Security & Validation
- Input validation for all endpoints
- Password strength requirements (min 6 characters)
- Username uniqueness validation
- Protected routes with JWT middleware
- Admin-only route protection
- Environment variable validation on startup

### Database
- MongoDB integration with Mongoose ODM
- User model with purchase history tracking
- Sweet model with timestamps and categories
- Automatic database connection handling

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.18.1
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **Password Hashing**: bcryptjs 3.0.2
- **Validation**: express-validator 7.2.1
- **Testing**: Jest 30.1.3 with Supertest 7.1.4
- **Development**: Nodemon 3.1.10

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register a new user | No |
| POST | `/login` | Login and receive JWT token | No |
| GET | `/me` | Get current user profile | Yes |

### Sweet Routes (`/api/sweets`)

| Method | Endpoint | Description | Auth Required | Admin Only |
|--------|----------|-------------|---------------|------------|
| GET | `/` | Get all sweets | No | No |
| GET | `/search` | Search sweets with filters | No | No |
| GET | `/:id` | Get sweet by ID | Yes | No |
| POST | `/:id/purchase` | Purchase a sweet | Yes | No |
| POST | `/` | Add new sweet | Yes | Yes |
| PUT | `/:id` | Update sweet details | Yes | Yes |
| DELETE | `/:id` | Delete a sweet | Yes | Yes |
| POST | `/:id/restock` | Restock sweet inventory | Yes | Yes |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health status |

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Configure environment variables:**
   See [ENV_SETUP.md](./ENV_SETUP.md) for detailed configuration guide.

   Minimum required variables:
   ```env
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/sweet_shop
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=1d
   ADMIN_USERNAME=candyAdmin
   ADMIN_PASSWORD=your-secure-password
   ```

4. **Start the server:**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

5. **Verify server is running:**
   ```bash
   curl http://localhost:3001/api/health
   ```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 5000 |
| `NODE_ENV` | Environment mode | No | development |
| `MONGO_URI` | MongoDB connection string | Yes | - |
| `JWT_SECRET` | Secret key for JWT signing | Yes | - |
| `JWT_EXPIRE` | JWT token expiration | No | 1d |
| `ADMIN_USERNAME` | Default admin username | No | candyAdmin |
| `ADMIN_PASSWORD` | Default admin password | No | - |

## Project Structure

```
Backend/
├── src/
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── adminInit.js       # Admin user initialization
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── sweetController.js # Sweet CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication & admin check
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Sweet.js           # Sweet schema
│   ├── routes/
│   │   ├── auth.js            # Auth routes
│   │   └── sweets.js          # Sweet routes
│   ├── tests/
│   │   ├── auth.test.js       # Auth tests
│   │   ├── login.test.js      # Login tests
│   │   └── sweets.test.js     # Sweet tests
│   └── index.js               # Server entry point
├── .env                        # Environment variables (not in git)
├── .env.example               # Environment template
├── package.json
└── README.md
```

## API Request/Response Examples

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123",
  "role": "user"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "username": "john_doe",
    "role": "user"
  }
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "username": "john_doe",
    "role": "user"
  }
}
```

### Get All Sweets
```bash
GET /api/sweets
```

**Response:**
```json
{
  "data": [
    {
      "_id": "...",
      "name": "Chocolate Bar",
      "category": "Chocolate",
      "price": 5.99,
      "quantity": 100,
      "image": "https://...",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Search Sweets
```bash
GET /api/sweets/search?name=chocolate&minPrice=5&maxPrice=10&category=Chocolate
```

### Purchase Sweet
```bash
POST /api/sweets/:id/purchase
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 2
}
```

### Add Sweet (Admin Only)
```bash
POST /api/sweets
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "New Sweet",
  "category": "Candy",
  "price": 3.99,
  "quantity": 50,
  "image": "https://..."
}
```

## Testing

Run the test suite:
```bash
npm test
```

The test suite includes:
- Authentication tests (register, login)
- Sweet CRUD operation tests
- Authorization and validation tests

## Error Handling

The API returns standardized error responses:

```json
{
  "error": "Error message",
  "status": 400
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

## Security Best Practices

- ✅ Passwords are hashed using bcryptjs
- ✅ JWT tokens for stateless authentication
- ✅ Protected routes require valid JWT
- ✅ Admin-only routes enforce role checking
- ✅ Input validation on all endpoints
- ✅ Environment variables for sensitive data
- ✅ CORS enabled for frontend integration

## Development

### Code Quality
```bash
# Run ESLint
npm run lint
```

### Auto-reload
The `npm run dev` command uses nodemon for automatic server restart on file changes.

## Troubleshooting

### Port Already in Use
If port 5000 is in use (common on macOS with AirPlay), change `PORT` in `.env`:
```env
PORT=3001
```

### MongoDB Connection Issues
- Verify MongoDB is running: `mongod --version`
- Check connection string in `.env`
- For MongoDB Atlas, ensure IP whitelist includes your IP

### JWT Errors
- Ensure `JWT_SECRET` is set in `.env`
- Verify token is included in `Authorization: Bearer <token>` header

## Contributing

1. Follow the existing code structure
2. Add tests for new features
3. Update this README for new endpoints
4. Ensure all environment variables are documented

## License

ISC

---

**Note**: Remember to update the frontend `.env` file with the correct `VITE_BACKEND_URL` to match your backend port.


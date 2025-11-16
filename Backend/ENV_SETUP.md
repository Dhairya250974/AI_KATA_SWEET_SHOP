# Environment Variables Setup Guide

This guide will help you set up the `.env` file for the backend.

## Steps to Setup

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** and fill in your actual values:

### Required Variables

#### Server Configuration
- `PORT`: The port on which the server will run (default: 5000)
- `NODE_ENV`: Environment mode - `development`, `production`, or `test`

#### MongoDB Connection
- `MONGO_URI`: Your MongoDB connection string
  - **Local MongoDB**: `mongodb://localhost:27017/sweet_shop`
  - **MongoDB Atlas**: `mongodb+srv://username:password@cluster.mongodb.net/sweet_shop?retryWrites=true&w=majority`
  - Replace `username`, `password`, and `cluster` with your actual MongoDB credentials

#### JWT Configuration
- `JWT_SECRET`: A secret key for signing JWT tokens
  - **Generate a strong secret**: Run `openssl rand -base64 32` in your terminal
  - **IMPORTANT**: Use a strong, random string in production
- `JWT_EXPIRE`: Token expiration time (default: "1d" for 1 day)
  - Examples: "1h", "7d", "30d"

#### Admin User Configuration
- `ADMIN_USERNAME`: Username for the default admin account (default: "candyAdmin")
- `ADMIN_PASSWORD`: Password for the default admin account
  - **IMPORTANT**: Change this to a strong password in production

## Example .env File

```env
PORT=5000
NODE_ENV=development

MONGO_URI=mongodb://localhost:27017/sweet_shop

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=1d

ADMIN_USERNAME=candyAdmin
ADMIN_PASSWORD=change-this-password-in-production
```

## Security Notes

1. **Never commit `.env` file to version control** - it's already in `.gitignore`
2. **Use strong passwords** for admin account
3. **Generate a secure JWT_SECRET** using: `openssl rand -base64 32`
4. **Use environment-specific values** for development, staging, and production

## Frontend Configuration

For the frontend, create a `.env` file in the `Frontend` directory:

```env
VITE_BACKEND_URL=http://localhost:5000
```

For production, update this to your deployed backend URL:
```env
VITE_BACKEND_URL=https://your-backend-url.com
```

## Troubleshooting

- **MongoDB Connection Issues**: Check that MongoDB is running and the connection string is correct
- **JWT Errors**: Ensure JWT_SECRET is set and not empty
- **Port Already in Use**: Change the PORT value in `.env` to an available port


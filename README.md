# Wavenet Backend API

A Node.js/Express backend API with MongoDB for managing users, invoices, and group management.

## Project Structure

```
backend/
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── userController.js     # User management
│   ├── invoiceController.js  # Invoice operations
│   └── groupController.js    # Group management
├── middleware/
│   ├── auth.js              # JWT authentication
│   └── authorize.js         # Role-based authorization
├── models/
│   ├── User.js              # User schema
│   ├── Invoice.js           # Invoice schema
│   ├── AdminGroup.js        # Admin group schema
│   └── UnitManagerGroup.js  # Unit manager group schema
├── routes/
│   ├── auth.routes.js       # Auth endpoints
│   ├── user.routes.js       # User endpoints
│   ├── invoice.routes.js    # Invoice endpoints
│   └── group.routes.js      # Group endpoints
├── utils/
│   └── helpers.js           # Utility functions
├── server.js                # Main server file
├── .env                     # Environment variables
└── package.json             # Dependencies
```

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file in the root directory:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## Running the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get users
- `POST /api/users` - Create user
- `PATCH /api/users/:id` - Update user role
- `DELETE /api/users` - Delete users

### Invoices
- `GET /api/invoices` - Get invoices
- `POST /api/invoices` - Create invoice
- `PATCH /api/invoices/:invoiceNumber` - Update invoice
- `DELETE /api/invoices` - Delete invoices

### Groups
- `POST /api/groups/admin/create` - Create admin group
- `POST /api/groups/unit/create` - Create unit manager group
- `PATCH /api/groups/admin/:id/add` - Add admin to group
- `PATCH /api/groups/unit/:id/add` - Add unit manager to group

## Features

- JWT-based authentication
- Role-based access control (SUPERADMIN, ADMIN, UNIT_MANAGER, USER)
- User hierarchy and group management
- Invoice management with financial year tracking
- Secure password hashing with bcryptjs
- MongoDB integration with Mongoose

# 🎫 Professional CRM Ticket Management System

A full-stack Customer Relationship Management (CRM) system built with the MERN stack, featuring modern UI/UX design and comprehensive ticket management capabilities.

![CRM Dashboard](https://img.shields.io/badge/CRM-Dashboard-blue)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/React-16.13.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)

## 🚀 Live Demo

**Frontend:** [Deploy your React app to Vercel/Netlify]
**Backend:** [Deploy your Node.js API to Heroku/Railway]

## ✨ Features

### 🔐 Authentication & Security
- **User Registration & Login** with JWT authentication
- **Password Reset** with email OTP verification
- **Protected Routes** with role-based access control
- **Session Management** with Redis integration

### 🎫 Ticket Management
- **Create, Read, Update, Delete** tickets
- **Priority Levels** (High, Medium, Low)
- **Status Tracking** (Open, Pending, Closed)
- **Message History** with real-time updates
- **File Attachments** support

### 📊 Dashboard & Analytics
- **Real-time Statistics** with modern cards
- **Ticket Overview** with filtering
- **Search & Filter** functionality
- **Responsive Design** for all devices

### 🛠 Technical Features
- **RESTful API** with proper error handling
- **Redux Toolkit** for state management
- **Modern UI/UX** with glassmorphism design
- **Responsive Design** for mobile/tablet/desktop
- **Email Integration** with Nodemailer
- **Database Optimization** with MongoDB

## 🏗 Tech Stack

### Frontend
- **React 16.13.1** - UI Framework
- **Redux Toolkit** - State Management
- **React Router** - Navigation
- **React Bootstrap** - UI Components
- **Axios** - HTTP Client
- **Font Awesome** - Icons

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password Hashing
- **Nodemailer** - Email Service
- **Redis** - Session Storage

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Redis (optional, for session management)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OmarShahwanGitHub/crm-frontend.git
   cd crm-project
   ```

2. **Backend Setup**
   ```bash
   cd client-api
   npm install
   # Create .env file with your MongoDB connection
   echo "MONGO_URL=mongodb://localhost:27017/crm-database" > .env
   echo "PORT=3001" >> .env
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd crm-frontend-complete
   npm install
   npm start
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📱 API Endpoints

### Authentication
- `POST /v1/user` - Register new user
- `POST /v1/user/login` - User login
- `POST /v1/user/reset-password` - Request password reset
- `PATCH /v1/user/reset-password` - Update password
- `DELETE /v1/user/logout` - User logout

### Tickets
- `GET /v1/ticket` - Get all tickets
- `GET /v1/ticket/:id` - Get ticket by ID
- `POST /v1/ticket` - Create new ticket
- `PUT /v1/ticket/:id` - Update ticket
- `PATCH /v1/ticket/close-ticket/:id` - Close ticket
- `DELETE /v1/ticket/:id` - Delete ticket

## 🎨 UI/UX Features

- **Modern Glassmorphism Design** with gradient backgrounds
- **Responsive Cards** with hover effects
- **Interactive Statistics** with real-time data
- **Professional Color Scheme** with accessibility in mind
- **Mobile-First Design** for optimal mobile experience

## 🔧 Environment Variables

Create a `.env` file in the `client-api` directory:

```env
MONGO_URL=mongodb://localhost:27017/crm-database
PORT=3001
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
REDIS_URL=redis://localhost:6379
```

## 📦 Deployment

### Frontend (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Backend (Heroku/Railway)
1. Create a new app
2. Connect your GitHub repository
3. Add environment variables
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Omar Shahwan**
- GitHub: [@OmarShahwanGitHub](https://github.com/OmarShahwanGitHub)
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Built following MERN stack best practices
- Inspired by modern CRM systems
- UI/UX design inspired by contemporary web applications

---

**⭐ Star this repository if you found it helpful!**

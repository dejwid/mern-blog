# MERN Blog Application

A full-stack blogging platform built with MongoDB, Express, React, and Node.js. Users can register, authenticate, create, edit, and publish blog posts with rich text editing capabilities.

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for cloud database) or local MongoDB instance

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-blog-
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Configuration

**⚠️ Important: Set up environment variables before running**

Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.pflplid.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=your-secret-key-here
PORT=4000
REACT_APP_API_URL=http://localhost:4000
```

Create a `.env` file in the `client/` directory:
```
REACT_APP_API_URL=http://localhost:4000
```

### Running the Application

**Terminal 1 - Start the Backend:**
```bash
node api/index.js
```
The API will run on `http://localhost:4000`

**Terminal 2 - Start the Frontend:**
```bash
cd client
npm start
```
The app will run on `http://localhost:3000`

## Project Structure

```
mern-blog-/
├── api/
│   ├── index.js              # Express server and routes
│   ├── models/
│   │   ├── User.js          # MongoDB User schema
│   │   └── Post.js          # MongoDB Post schema
│   └── uploads/             # Uploaded post cover images
├── client/
│   ├── src/
│   │   ├── pages/           # Route pages
│   │   │   ├── IndexPage.js         # Home page - all posts
│   │   │   ├── LoginPage.js         # User login
│   │   │   ├── RegisterPage.js      # User registration
│   │   │   ├── CreatePost.js        # Create new post
│   │   │   ├── PostPage.js          # View single post
│   │   │   └── EditPost.js          # Edit existing post
│   │   ├── App.js           # Main React app with routing
│   │   ├── UserContext.js   # Authentication state management
│   │   ├── Header.js        # Navigation header
│   │   ├── Layout.js        # Page layout wrapper
│   │   ├── Post.js          # Post preview component
│   │   ├── Editor.js        # Rich text editor (React Quill)
│   │   └── index.js         # React entry point
│   └── package.json
├── package.json
└── README.md
```

## Features

### Authentication
- User registration with password hashing (bcryptjs)
- JWT-based login with HTTP-only cookies
- Protected routes for authenticated users

### Blog Posts
- Create posts with rich text editor (React Quill)
- Add cover images for posts
- Edit your own posts
- View all posts on homepage
- View individual post details
- Posts sorted by creation date (newest first)

### User Experience
- Responsive design
- Clean, minimal UI
- Real-time form validation
- Secure authentication

## Technology Stack

### Backend
- **Express.js** - Web framework
- **MongoDB + Mongoose** - Database and ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **multer** - File upload handling
- **CORS** - Cross-origin requests

### Frontend
- **React 18** - UI library
- **React Router v7** - Client-side routing
- **React Quill** - Rich text editor
- **date-fns** - Date formatting
- **CSS** - Styling

## API Endpoints

### Authentication
- `POST /register` - Create new user account
- `POST /login` - User login (returns JWT cookie)
- `POST /logout` - User logout (clears cookie)
- `GET /profile` - Get current user info (requires auth)

### Posts
- `GET /post` - Get all posts (20 most recent)
- `GET /post/:id` - Get single post by ID
- `POST /post` - Create new post (requires auth, multipart form-data)
- `PUT /post` - Update post (requires auth, must be author)

## Usage Guide

### Creating an Account
1. Click "Register" in the header
2. Enter username (minimum 4 characters) and password
3. Click register - you'll be logged in automatically

### Creating a Blog Post
1. Click "Create" in the header (must be logged in)
2. Enter title and summary
3. Write content using the rich text editor
4. Upload a cover image
5. Click "Create post"

### Editing a Blog Post
1. View the post you created
2. Click "Edit" (only visible on your own posts)
3. Make changes to title, summary, content, or cover image
4. Click "Save post"

### Viewing Posts
- **Homepage** - See all published posts (newest first)
- **Click a post** - View full content and author name

## Development

### Running Tests
```bash
cd client
npm test
```

### Building for Production
```bash
cd client
npm run build
```
This creates an optimized build in `client/build/`

### Common Issues

**Backend won't start:**
- Ensure MongoDB connection string is correct in `.env`
- Check that MongoDB cluster is accessible
- Verify port 4000 is not in use

**Frontend won't connect to backend:**
- Ensure backend is running on port 4000
- Check `REACT_APP_API_URL` environment variable
- Clear browser cache and cookies

**Image uploads not working:**
- Ensure `api/uploads/` directory exists
- Check file permissions on the uploads directory
- Verify multer configuration in `api/index.js`

## Security Notes

⚠️ **Important for Production:**
- Move hardcoded secrets to environment variables (`.env`)
- Never commit `.env` files to version control
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Add input validation and sanitization
- Use environment-specific CORS settings

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on the GitHub repository.

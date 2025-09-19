# MomentumAI Frontend

Advanced React application with cutting-edge authentication, animations, and modern UI components.

## 🚀 Features

### 🔐 Advanced Authentication System
- **Firebase Authentication** integration with Email/Password and Google OAuth
- **Animated Login/Signup** forms with glassmorphism design
- **Password Strength Indicator** with real-time validation
- **Email Verification** and password reset functionality
- **Protected Routes** with loading states
- **User Dashboard** with modern interface

### 🎨 Advanced Animations
- **GSAP** for complex timeline animations
- **Framer Motion** for React component animations
- **Glassmorphism Effects** with backdrop blur
- **Particle Systems** and floating elements
- **Responsive Design** with smooth transitions

### 💎 Modern UI Components
- **Tailwind CSS** with custom gradients
- **Lucide React Icons** for consistent iconography
- **React Hot Toast** for elegant notifications
- **Mobile-First** responsive design
- **Dark Theme** with gradient backgrounds

## 🛠 Tech Stack

- **React 19** with Vite for fast development
- **Firebase** for authentication and backend services
- **GSAP & Framer Motion** for advanced animations
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for state management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd momentum-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Firebase** (See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md))
   - Create a Firebase project
   - Enable Authentication (Email/Password + Google)
   - Update `.env` with your Firebase config

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Environment Variables

Update `.env` with your Firebase configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-firebase-app-id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🧭 Routes

- `/` - Home page with company information
- `/login` - Advanced animated login form
- `/signup` - Advanced animated signup form
- `/forgot-password` - Password reset form
- `/dashboard` - Protected user dashboard
- `/product` - Product information
- `/team` - Team page
- `/contact` - Contact form

## 🏗 Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthLayout.jsx          # Animated auth wrapper
│   │   ├── Login.jsx               # Login form
│   │   ├── Signup.jsx              # Signup form
│   │   ├── ForgotPassword.jsx      # Password reset
│   │   └── AnimatedBackground.jsx  # Background animations
│   ├── Dashboard.jsx               # User dashboard
│   ├── ProtectedRoute.jsx          # Route protection
│   ├── Navbar.jsx                 # Navigation with auth
│   └── ... (other components)
├── contexts/
│   └── AuthContext.jsx             # Authentication context
├── config/
│   └── firebase.js                 # Firebase configuration
├── pages/
│   └── ... (page components)
└── App.jsx                         # Main app with routes
```

## 🎯 Authentication Features

### Login System
- Email/password authentication
- Google OAuth integration
- Remember me functionality
- Password visibility toggle
- Real-time form validation
- Animated error messages

### Signup System
- Account creation with email verification
- Real-time password strength checking
- Confirm password validation
- Display name collection
- Animated success states
- Google signup option

### Security Features
- Email verification required
- Protected route system
- Secure password requirements
- Automatic session management
- CSRF protection via Firebase

## 🎨 Animation Features

### GSAP Animations
- Timeline-based animations
- Particle system effects
- Background gradient movement
- Form entrance animations
- Button interaction effects

### Framer Motion
- Page transitions
- Component animations
- Gesture handling
- Layout animations
- Stagger effects

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions
- Accessible navigation

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

### Environment Setup
1. Set up Firebase project for production
2. Update environment variables
3. Configure domain in Firebase settings
4. Deploy to your preferred platform

## 📖 Documentation

- [Firebase Setup Guide](./FIREBASE_SETUP.md) - Complete Firebase configuration
- [Component Documentation](./docs/components.md) - Component usage guide
- [Animation Guide](./docs/animations.md) - Animation implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the [Firebase Setup Guide](./FIREBASE_SETUP.md)
2. Review the browser console for errors
3. Ensure all environment variables are set
4. Verify Firebase project configuration

## 🔗 Links

- [Firebase Console](https://console.firebase.google.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [React Router Documentation](https://reactrouter.com/)

---

**Built with ❤️ using React, Firebase, and modern web technologies**

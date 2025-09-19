# Firebase Authentication Setup Guide

This project includes advanced animated authentication with Firebase. Follow these steps to set up Firebase authentication:

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "momentum-ai")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication

1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click on the **Sign-in method** tab
3. Enable the following sign-in providers:
   - **Email/Password**: Click on it and toggle "Enable"
   - **Google**: Click on it, toggle "Enable", and add your project's support email

## 3. Get Firebase Configuration

1. Go to **Project Settings** (gear icon in the left sidebar)
2. Scroll down to "Your apps" section
3. Click on the web app icon `</>` to add a web app
4. Register your app with a name (e.g., "momentum-web")
5. Copy the Firebase configuration object

## 4. Update Environment Variables

Update your `.env` file with the Firebase configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-actual-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-actual-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-actual-sender-id
VITE_FIREBASE_APP_ID=your-actual-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-actual-measurement-id
```

## 5. Configure Google OAuth (Optional)

For Google Sign-In to work:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Go to **APIs & Services** > **Credentials**
4. Add your domain to **Authorized JavaScript origins**:
   - `http://localhost:3000` (for development)
   - Your production domain

## 6. Set up Firestore Database (Optional)

If you want to store user profiles:

1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location for your database

## Features Included

✅ **Email/Password Authentication**
- Advanced animated login form
- Real-time password strength indicator
- Email verification
- Password reset functionality

✅ **Google OAuth Integration**
- One-click Google sign-in
- Automatic user profile creation
- Seamless authentication flow

✅ **Advanced UI/UX**
- Glassmorphism design
- GSAP and Framer Motion animations
- Responsive design
- Loading states and error handling

✅ **Security Features**
- Protected routes
- Email verification requirement
- Secure password validation
- Automatic session management

## Authentication Flow

1. **Sign Up**: Users can create accounts with email/password or Google
2. **Email Verification**: Email verification required for password-based accounts
3. **Sign In**: Animated login with error handling
4. **Dashboard**: Protected dashboard accessible after authentication
5. **Password Reset**: Forgot password functionality with email reset

## Components Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthLayout.jsx      # Animated auth layout wrapper
│   │   ├── Login.jsx           # Advanced login form
│   │   ├── Signup.jsx          # Advanced signup form
│   │   └── ForgotPassword.jsx  # Password reset form
│   ├── Dashboard.jsx           # Protected dashboard
│   ├── ProtectedRoute.jsx      # Route protection component
│   └── Navbar.jsx             # Updated with auth status
├── contexts/
│   └── AuthContext.jsx        # Authentication context & hooks
├── config/
│   └── firebase.js            # Firebase configuration
└── App.jsx                    # Updated with auth routes
```

## Deployment Notes

- Make sure to add your production domain to Firebase Authentication settings
- Update CORS settings in Firebase if needed
- Set environment variables in your hosting platform
- Test authentication flow in production environment

## Troubleshooting

**Common Issues:**

1. **Firebase not initialized**: Check if environment variables are correctly set
2. **Google Sign-In not working**: Verify OAuth configuration in Google Cloud Console
3. **Email verification not sent**: Check Firebase Authentication settings
4. **CORS errors**: Add your domain to Firebase authorized domains

**Development vs Production:**

- Use different Firebase projects for development and production
- Update environment variables accordingly
- Test all authentication flows before deployment

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify Firebase configuration in the console
3. Ensure all required APIs are enabled
4. Check Firebase Authentication logs for debugging
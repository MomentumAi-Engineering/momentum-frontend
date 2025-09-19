import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  GoogleAuthProvider
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../config/firebase';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  // Sign up with email and password
  const signup = async (email, password, displayName) => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      if (displayName) {
        await updateProfile(result.user, { displayName });
      }

      // Send email verification
      await sendEmailVerification(result.user);
      
      // Create user document in Firestore
      await createUserDocument(result.user, { displayName });
      
      toast.success('Account created successfully! Please check your email to verify your account.');
      return result;
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(getAuthErrorMessage(error));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in with email and password
  const signin = async (email, password) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      if (!result.user.emailVerified) {
        toast.error('Please verify your email before signing in.');
        await signOut(auth);
        return null;
      }
      
      toast.success('Welcome back!');
      return result;
    } catch (error) {
      console.error('Signin error:', error);
      toast.error(getAuthErrorMessage(error));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      
      // Check if this is a new user
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const isNewUser = result._tokenResponse?.isNewUser;
      
      // Create user document if new user
      if (isNewUser) {
        await createUserDocument(result.user);
        toast.success('Welcome! Your account has been created.');
      } else {
        toast.success('Welcome back!');
      }
      
      return result;
    } catch (error) {
      console.error('Google signin error:', error);
      toast.error(getAuthErrorMessage(error));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth);
      setUserProfile(null);
      toast.success('Signed out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to sign out');
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent');
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error(getAuthErrorMessage(error));
      throw error;
    }
  };

  // Create user document in Firestore
  const createUserDocument = async (user, additionalData = {}) => {
    if (!user) return;
    
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();
      
      try {
        await setDoc(userRef, {
          displayName: displayName || additionalData.displayName || '',
          email,
          photoURL: photoURL || '',
          createdAt,
          lastLoginAt: createdAt,
          ...additionalData
        });
      } catch (error) {
        console.error('Error creating user document:', error);
      }
    } else {
      // Update last login time
      try {
        await setDoc(userRef, { lastLoginAt: new Date() }, { merge: true });
      } catch (error) {
        console.error('Error updating last login:', error);
      }
    }
  };

  // Get user profile from Firestore
  const getUserProfile = async (uid) => {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        setUserProfile(userSnap.data());
        return userSnap.data();
      }
    } catch (error) {
      console.error('Error getting user profile:', error);
    }
    return null;
  };

  // Get authentication error message
  const getAuthErrorMessage = (error) => {
    switch (error.code) {
      case 'auth/user-not-found':
        return 'No account found with this email';
      case 'auth/wrong-password':
        return 'Incorrect password';
      case 'auth/email-already-in-use':
        return 'An account already exists with this email';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later';
      case 'auth/popup-closed-by-user':
        return 'Authentication popup was closed';
      case 'auth/popup-blocked':
        return 'Authentication popup was blocked by the browser';
      default:
        return error.message || 'An error occurred during authentication';
    }
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        await getUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    loading,
    signup,
    signin,
    signInWithGoogle,
    logout,
    resetPassword,
    getUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
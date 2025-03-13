'use client';

import { useEffect } from 'react';
import { app, analytics } from '../../firebase';

export function FirebaseInitializer() {
  useEffect(() => {
    // Firebase is already initialized in the imported file
    // This component exists to ensure Firebase is loaded on the client side
    console.log('Firebase initialized');
  }, []);

  return null; // This component doesn't render anything
}

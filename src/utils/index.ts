import {FirebaseErrors} from 'types';

export const FIREBASE_ERRORS: {[lang: string]: FirebaseErrors} = {
  en: {
    'auth/email-already-in-use': 'Email is already in use.',
    'auth/invalid-email': 'Invalid email address.',
    'auth/user-not-found': 'User not found.',
    'auth/wrong-password': 'Wrong password.',
    'auth/user-disabled': 'User is disabled.',
    'auth/something-went-wrong':
      'Something went wrong. Please try again later.',
  },
};

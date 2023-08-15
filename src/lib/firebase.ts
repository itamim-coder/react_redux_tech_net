import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-vIycfhXPvR_JJh9ELO9VxBWx3yra9VM',
  authDomain: 'technet-react-redux-97a44.firebaseapp.com',
  projectId: 'technet-react-redux-97a44',
  storageBucket: 'technet-react-redux-97a44.appspot.com',
  messagingSenderId: '551862073936',
  appId: '1:551862073936:web:d65e34c6a844f462d5ef55',
  measurementId: 'G-GLNCTC04ZD',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/stylesheet.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

import { createContext } from 'react';

const BaseContext = createContext('light');

export const firebaseApp  = initializeApp({
  apiKey: "AIzaSyAPNwvC-fKXD6rYq3Q4TOEBOvfjfXakxKk",
  authDomain: "skifitnespro.firebaseapp.com",
  databaseURL: "https://skifitnespro-default-rtdb.firebaseio.com",
  projectId: "skifitnespro",
  storageBucket: "skifitnespro.appspot.com",
  messagingSenderId: "578724001271",
  appId: "1:578724001271:web:8ff13ab7237fc54b18eaf2",
  measurementId: "G-96MHBRP868"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
const database = getDatabase(firebaseApp);

const dataRef = ref(database, '/courses');


root.render(
  <React.StrictMode>
    <BaseContext.Provider value={firebaseApp}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </BaseContext.Provider>
  </React.StrictMode>
);



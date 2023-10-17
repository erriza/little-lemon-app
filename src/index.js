import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import BookingPage from './Components/BookingPage/BookingPage';
import Navigation from './Components/Navigation';

import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path='/bookingPage' element={<BookingPage/>}/>
        </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

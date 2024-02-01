import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/BookList';
import Form from './components/RegisterForm';
import './App.css';

function App() {

  const booksRoute = <Route path="/" element={<Books />} />;
  const formRoute = <Route path="/form" element={<Form />} />;


  return (
    <Router>
    <Routes>
      {booksRoute}
      {formRoute}
    </Routes>
  </Router>
);
}


export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/auth/*" element={<Authentication />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;

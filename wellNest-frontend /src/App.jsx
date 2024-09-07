import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';
import LandingPage from './pages/LandingPage/LandingPage';
import { getProfileAction } from './redux/Auth/auth.action';

function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt && !auth.user) {
      dispatch(getProfileAction(jwt));
    }
  }, [dispatch, jwt, auth.user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/*" element={<Authentication />} />
        <Route path="/home/*" element={auth.user ? <HomePage /> : <Navigate to="/auth/signin" replace />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;

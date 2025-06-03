import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Authentication from './pages/Authentication/Authentication';
import MainLayout from './pages/MainLayout/MainLayout';
import LandingPage from './pages/LandingPage/LandingPage';
import Message from './pages/Message/Message';
import Communities from './pages/Communities/Communities';
import HomePage from './components/MiddlePart/MiddlePart';
import ProfilePage from './pages/Profile/ProfilePage';
import { getProfileAction } from './redux/Auth/auth.action';
import CreateCommunityPage from './components/Communities/CreateCommunityForm';
import Journal from './pages/Journal/Journal';

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
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/*" element={<Authentication />} />

        {/* Protected layout (with sidebar) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/journal" element={<Journal />} />
        </Route>
        <Route path="/create-community" element={<CreateCommunityPage />} />
        <Route path="/message" element={<Message />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
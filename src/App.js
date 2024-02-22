import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store

import UserDashboard from './Components/UserDashboard/UserDashboard';
import ClientDashboard from './Components/ClientDashboard/ClientDashboard';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your application with Provider and pass the Redux store */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

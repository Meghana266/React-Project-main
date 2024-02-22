import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store

import UserDashboard from './Components/UserDashboard/UserDashboard';
import ClientDashboard from './Components/ClientDashboard/ClientDashboard';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your entire application with Provider */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/client" element={<ClientDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

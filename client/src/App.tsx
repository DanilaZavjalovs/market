import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import LoginModal from './components/login/login';
import RegisterModal from './components/register/register';
import store from './actions/stores';
import HomePage from './pages/homePage/homePage';

function App() {
  return (
    <Provider store={store}>
      <RegisterModal />
      <LoginModal />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

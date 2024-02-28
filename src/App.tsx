import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import theme from './theme';

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/search" element={<Search />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;

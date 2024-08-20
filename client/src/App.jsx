import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Doctorhome from './pages/doctorhomepage';
import Userhome from './pages/userhomepage';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/doctorhome" element={<Doctorhome />} />
        <Route path="/userhome" element={<Userhome />} />
      </Routes>
    </>
  );
};

export default App;

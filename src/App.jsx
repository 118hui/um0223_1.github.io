import Header from './components/Header';
import Footer from './components/Footer';
import Cta from './components/Cta';
import Hero from './components/Hero';
import Login from './pages/Login';
import Register from './pages/Register';
import Course from './pages/Course';
import Know from './pages/Know';
import Forms from './pages/Forms';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/course' element={<Course />} />
            <Route path='/know' element={<Know />} />
            <Route path='/forms' element={<Forms />} />
          </Routes>
        </div>
        <Cta />
        <Footer />
      </Router>
    </>
  );
};

export default App;

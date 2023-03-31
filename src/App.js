import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home'
import Footer from './components/footer/Footer';
import Booking from './components/booking/Booking';
import Menu from './components/pages/Menu';
import Login from './components/pages/Login';


function App() {
  return (
    <div style={{margin: 0, padding: 0, boxSizing: 'border-box'}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import './App.css'
import AboutPage from "./pages/about/About";
import Apartments from './pages/apartments/Apartments';
import Single from './pages/single/Single';
import Services from "./pages/services/Services";
import Terms from './pages/terms/Terms';
import Lease from './pages/lease/Lease';
import Review from './pages/review/Review';
import Contact from './pages/contact/Contact';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/hotel/:id" element={<Single/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element = {<AboutPage/>}/>
        <Route path="/apartments" element = {<Apartments/>}/>
        <Route path="/services" element = {<Services/>}/>
        <Route path="/terms" element = {<Terms/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/review" element = {<Review/>}/>
        <Route path="/lease" element = {<Lease/>}/>
        <Route path="/checkout" element = {<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

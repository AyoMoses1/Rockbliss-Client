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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element = {<AboutPage/>}/>
        <Route path="/apartments" element = {<Apartments/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

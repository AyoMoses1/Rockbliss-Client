import About from "../../components/about/About";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Remark from "../../components/remark/Remark";
import Services from "../../components/services/Services";
import card1 from '../../assets/highlights/sadelsrockblis45.jpg'
import card2 from "../../assets/card2.webp"
import SecondRemark from './../../components/secondRemark/SecondRemark';
import "./home.css";



const Home = () => {

  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <About/>
        <FeaturedProperties/>
        <div className="homeCards">
            <div className="flex">
              <div className='gridCard'>
                <img src={card1}/>
                <h3>Reception 24h / 7 Days</h3>
                <p>We are always available to attend to your hospitable needs</p>
              </div>
              <div className='gridCard'>
                <img src={card2}/>
                <h3>Reservation Online</h3>
                <p>Book your favorite apartment from the comfort of your home</p>
              </div>
            </div>
        </div>
        <SecondRemark/>
      </div>
      <Services/> 
      <Footer/>
    </div>
  );
};

export default Home;

import About from "../../components/about/About";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Remark from "../../components/remark/Remark";
import Services from "../../components/services/Services";
import card1 from "../../assets/card1.webp"
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
              </div>
              <div className='gridCard'>
                <img src={card2}/>
                <h3>Reservation Online</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
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

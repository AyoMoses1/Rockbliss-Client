import { Grid } from "@material-ui/core";
import About from "../../components/about/About";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Remark from "../../components/remark/Remark";
import Services from "../../components/services/Services";
import "./home.css";
import card1 from "../../assets/card1.webp"
import card2 from "../../assets/card2.webp"
import SecondRemark from './../../components/secondRemark/SecondRemark';
import { api } from "../../services/api";


const Home = () => {

  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Remark/>
        <About/>
        {/* <Featured/> */}
        {/* <h1 className="homeTitle">Browse by property type</h1> */}
        {/* <PropertyList/> */}
        {/* <h1 className="homeTitle">Homes guests love</h1> */} {/* Please remember to uncoment this later*/}
        <FeaturedProperties/>
        <div className="homeCards">
            <div className="flex">
              <div className='gridCard'>
                <img src={card1}/>
                <h3>Reception 24h / 7 Days</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
              </div>
              {/* <Grid item md={1}></Grid> */}
              <div className='gridCard'>
                <img src={card2}/>
                <h3>Reservation Online</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
              </div>
            </div>
        </div>
        {/* <MailList/> */}
      </div>
      <Services/>
      <SecondRemark/>
      <Footer/>
    </div>
  );
};

export default Home;

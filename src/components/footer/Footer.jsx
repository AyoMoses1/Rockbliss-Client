import "./footer.css";

const Footer = () => {
  return (
    <footer className="kilimanjaro_area">
        {/* <!-- Top Footer Area Start --> */}
        <div className="foo_top_header_one section_padding_100_70">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="kilimanjaro_part">
                            <h5>About Us</h5>
                            <p>Our goal is to make you feel like you never left home. It provides you with all the usual comforts you are used to at home and more. Also, we strive to provide all your needs,comfort and more, allowing you to focus on your core business or leisure activities at less than half the cost of the average room.</p>
                        </div>
                        <div className="kilimanjaro_part m-top-15">
                            <h5>Social Links</h5>
                            <ul className="kilimanjaro_social_links">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a></li>
                                <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {/* <div className="kilimanjaro_part">
                            <h5>Tags Widget</h5>
                            <ul className=" kilimanjaro_widget">
                                <li><a href="#">ClassNamey</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Creative</a></li>
                                <li><a href="#">One Page</a></li>
                                <li><a href="#">Multipurpose</a></li>
                                <li><a href="#">Minimal</a></li>
                                <li><a href="#">ClassNameic</a></li>
                                <li><a href="#">Medical</a></li>
                            </ul>
                        </div> */}

                        <div className="kilimanjaro_part m-top-15">
                            <h5>Important Links</h5>
                            <ul className="kilimanjaro_links">
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Terms & Conditions</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>About Licences</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Help  Support</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Careers</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Privacy Policy</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Community & Forum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="kilimanjaro_part">
                            <h5>Quick Contact</h5>
                            <div className="kilimanjaro_single_contact_info">
                                <h5>Phone:</h5>
                                <p>+234 803 461 4213 <br/> +234 803 461 4213</p>
                            </div>
                            <div className="kilimanjaro_single_contact_info">
                                <h5>Email:</h5>
                                <p>rockblissapartments@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer Bottom Area Start --> */}
        <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>© All Rights Reserved by <a href="#">Rockbliss Serviced Apartments<i className="fa fa-love"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import './contact.css'
import Navbar from './../../components/navbar/Navbar';
import './bootstrap.min.css'

const Contact = () => {
  return (
    <>
      <Navbar/>  
      <div className="content">
        <div className="container">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-6 ">
              <div className="form h-100">
                <h3>Send us a message</h3>
                <form className="mb-5" method="post" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6 form-group mb-5">
                      <label htmlFor="" className="col-form-label">Name *</label>
                      <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                    </div>
                    <div className="col-md-6 form-group mb-5">
                      <label htmlFor="" className="col-form-label">Email *</label>
                      <input type="text" className="form-control" name="email" id="email"  placeholder="Your email" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group mb-5">
                      <label htmlFor="" className="col-form-label">Phone</label>
                      <input type="text" className="form-control" name="phone" id="phone"  placeholder="Phone #" />
                    </div>
                    <div className="col-md-6 form-group mb-5">
                      <label htmlFor="" className="col-form-label">Company</label>
                      <input type="text" className="form-control" name="company" id="company"  placeholder="Company  name" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group mb-5">
                      <label htmlFor="message" className="col-form-label">Message *</label>
                      <textarea className="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>

                <div id="form-message-warning mt-4"></div> 
                <div id="form-message-success">
                  Your message was sent, thank you!
                </div>

              </div>
            </div>
            <div classNameName="col-md-6">
              <div className="contact-info h-100">
                {/* <a href="https://www.google.com/maps" target="_blank"></a> */}
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contact
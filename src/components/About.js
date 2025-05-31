import React from 'react';
import Vision from './vision.jpg';
import Mission from './mission.jpg';

export default function About() {
  return (
    <div className="about-us-container">
      <div className="container py-5">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6 order-md-2">
            <h4>Xenex Overseas</h4>
            <h1>Crafting Tomorrow's Brass Components, Today</h1>
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="about-us-heading">Welcome to Xenex Overseas</h2>
            <p className="about-us-text">
              Xenex Overseas is a premier name in the manufacturing and export of high-quality brass components.
              With years of experience and a commitment to excellence, we have established ourselves as a trusted
              partner for businesses worldwide.
            </p>
            <p className="about-us-text">
              Our dedication to precision engineering, stringent quality control, and customer satisfaction
              sets us apart. We specialize in a wide array of brass products, catering to diverse industrial needs,
              including Brass Hardware, Brass Pipe Fittings, and Brass Auto Components.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="about-us-card">
              <h3 className="about-us-subheading">Our Vision</h3>
              <p className="about-us-text">
                To be a global leader in the brass component industry, recognized for our superior products,
                sustainable practices, and commitment to technological advancement. We aspire to expand our
                reach and contribute positively to the industries we serve.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="about-us-image">
              <img src={Vision} alt=" Xenex Overseas" className="img-fluid rounded shadow-sm about-us-image" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="about-us-image">
              <img src={Mission} alt="Xenex Overseas" className="img-fluid rounded shadow-sm about-us-image" />
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="about-us-card">
              <h3 className="about-us-subheading">Our Mission</h3>
              <p className="about-us-text">
                To deliver innovative and reliable brass solutions that exceed customer expectations,
                driven by a passion for quality, integrity, and continuous improvement. We aim to foster
                long-term relationships with our clients by providing exceptional value and service.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="about-us-card">
              <h3 className="about-us-subheading">Our Strength</h3>
              <p className="about-us-text">
                Our strength lies in the base of vital principles giving our clients complete satisfaction.
                We are dedicated to meeting the quality needs of our customers through our sound infrastructure,
                high qualified manpower, and continuous efforts of the R&D division.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="about-us-card">
              <h3 className="about-us-subheading">Client Satisfaction</h3>
              <p className="about-us-text">
                Our clients are assured of receiving quality service at a competitive price. We make a promise to exceed your expectations.
                With our demonstrated commitment to customer satisfaction, loyalty is evidence that we are making continuous efforts
                in order to be sure that each and every customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
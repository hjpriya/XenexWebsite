import React from 'react';
import logo from './svg/logo.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12 ft-info">
                        <div className="footer-logo"><img src={logo} alt="Logo" width={"100px"} /></div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12 ft-info">
                        <h3>Quick Link</h3>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <br/>
                    <div className="col-md-3 col-sm-12 col-xs-12 ft-info">
                        <h3>Our Product</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Brass Hardware</a></li>
                            <li><a href="/">Brass Pipe Fitting</a></li>
                            <li><a href="/">Brass Auto Component</a></li>                            
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12 ft-info">
                        <h3>Contact</h3>
                        <div>
                            <div className="address">
                                <p> <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    &nbsp; RS no-24/1, Shivam Park, plot no 19/2, near GIDC phase-3, GIDC Phase-2, Dared, Jamnagar, Gujarat 361005, India </p>
                            </div>
                            <div className="mail">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                &nbsp; <a href="mailto:darshanxenex@gmail.com">darshanxenex@gmail.com</a>
                            </div>
                            <div className="txt-number">
                                <p> <i className="fa fa-phone" aria-hidden="true"></i>
                                    &nbsp; <a href="tel:+917779058757">+91 7779058757</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <p>CopyRights &copy; {new Date().getFullYear()} Xenex. All rights reserved.</p>  </div>
                    {/* <div className="col-md-5 col-sm-12 col-xs-12">
                        <p className="text-right">Desigend By <a href="/" target="_blank" rel="noopener noreferrer">Priya Hirapara</a></p>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
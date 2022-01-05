import React from 'react';


function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="top-pattern-layer-dark"></div>


                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row clearfix">


                            <div className="column col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                        <a href="#"><img src="images/logo.png" alt="" /></a>
                                    </div>
                                    <div className="text">Amet consectetur adipisicing elitm ipsum sed incididunt labore dolore magna.</div>
                                    <div className="info">
                                        <ul>
                                            <li>47 Wood Circle, Pana City FL 32401</li>
                                            <li>Call us <a href="tel:(+1)-000000"><strong>(+1) 00000000</strong></a></li>
                                            <li><a href="mailto:support@ASINDIAINNOVATIONS">support@ASINDIAINNOVATIONS</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-xl-9 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <div className="widget-content">
                                        <div className="row clearfix">
                                            <div className="col-lg-8 col-md-12 col-sm-12">
                                                <div className="row clearfix">
                                                    <div className="column col-lg-4 col-md-4 col-sm-12">
                                                        <div className="widget-title">
                                                            <h4>What We Do</h4>
                                                        </div>
                                                        <ul className="links">
                                                            <li><a href="#">Cloud Integration</a></li>
                                                            <li><a href="#">Business Security</a></li>
                                                            <li><a href="#">Startup Projects</a></li>
                                                            <li><a href="#">Product Engineering</a></li>
                                                            <li><a href="#">Data Infrastructure</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-lg-4 col-md-4 col-sm-12">
                                                        <div className="widget-title">
                                                            <h4>About Us</h4>
                                                        </div>
                                                        <ul className="links">
                                                            <li><a href="#">Who We Are</a></li>
                                                            <li><a href="#">Case Studies</a></li>
                                                            <li><a href="#">Career Opportunities</a></li>
                                                            <li><a href="#">Our Clients</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-lg-4 col-md-4 col-sm-12">
                                                        <div className="widget-title">
                                                            <h4>Support</h4>
                                                        </div>
                                                        <ul className="links">
                                                            <li><a href="#">View Help Topics</a></li>
                                                            <li><a href="#">Latest Articles</a></li>
                                                            <li><a href="#">Technology Consulting</a></li>
                                                            <li><a href="#">Terms Of Service</a></li>
                                                            <li><a href="#">Contact Us</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column col-lg-4 col-md-12 col-sm-12">
                                                <div className="widget-title empty-title">
                                                    <h4>Get In Touch</h4>
                                                </div>

                                                <div className="newsletter-form">
                                                    <form method="post" action="contact.html">
                                                        <div className="form-group clearfix">
                                                            <input type="email" name="email" value="" placeholder="Email address" required />
                                                            <button type="submit" className="theme-btn newsletter-btn"><span className="icon fa fa-paper-plane"></span></button>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="social-links">
                                                    <div className="title text">Get the latest news & updates</div>
                                                    <ul className="clearfix">
                                                        <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                                                        <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                                        <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                                                        <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                                                        <li><a href="#"><span class="fab fa-pinterest"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="copyright">&copy; 2020 <strong>Asindia Innovations</strong>. All rights reserved. <a href="#">Privacy Policy</a></div>
                        </div>
                    </div>
                </div>

            </footer>
        </>

    );

}
export default Footer;

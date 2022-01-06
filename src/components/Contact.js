import React from 'react';


function Contact() {
    return (
        <>
        {/* <!--Contact Section--> */}
    <section className="contact-section-two">
        <div className="auto-container">
            <div className="upper-row">
                <div className="row clearfix">
                    {/* <!--Text Column--> */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="sec-title">
                                <div className="upper-text">AsIndia - Send us a Message</div>
                                <h2>Do You Have Any Questions? We’ll Be Happy To Assist!</h2>
                                <div className="lower-text">Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.</div>
                            </div>

                            <div className="social-links">
                                <ul className="clearfix">
                                    <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                    <li><a href="#"><span className="fab fa-pinterest"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!--Form Column--> */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            {/* <!--Form Box--> */}
                            <div className="form-box">
                                <div className="default-form contact-form">
                                    <form method="post" action="sendemail.php" id="contact-form">
                                        <div className="row clearfix">                                    
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" placeholder="Your Name" required="" value=""/>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email" required="" value=""/>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="phone" placeholder="Phone" required="" value=""/>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="subject" placeholder="Subject" required="" value=""/>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Message" required=""></textarea>
                                            </div>
                    
                                            <div className="form-group col-md-12 col-sm-12">
                                                <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Make a Request</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="lower-row">
                <div className="row clearfix">
                    {/* <!--Info Block--> */}
                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="content-box">
                                <div className="title-box">
                                    <h4><a href="case-studies.html">Asia Office</a></h4>
                                    <div className="sub-text">Singapore</div>
                                </div>
                                <div className="text-content">
                                    <div className="info">
                                        <ul>
                                            <li>47 Wood Circle, Pana City FL 32401</li>
                                            <li>Call us <a href="tel:(+1)-500.369.2580"><strong>(+1) 500.369.2580</strong></a></li>
                                            <li><a href="mailto:support@zentec.com">support@zentec.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
{/* 
                            <!--Map Box--> */}
                            <div className="map-box">
                                <div className="map-canvas"
                                    data-zoom="12"
                                    data-lat="-37.817085"
                                    data-lng="144.955631"
                                    data-type="roadmap"
                                    data-hue="#ffc400"
                                    data-title="Singapore"
                                    data-icon-path="images/icons/map-marker.png"
                                    data-content="Singapore VIC 3000, USA<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!--Info Block--> */}
                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="content-box">
                                <div className="title-box">
                                    <h4><a href="case-studies.html">USA Office</a></h4>
                                    <div className="sub-text">California</div>
                                </div>
                                <div className="text-content">
                                    <div className="info">
                                        <ul>
                                            <li>47 Wood Circle, Pana City FL 32401</li>
                                            <li>Call us <a href="tel:(+1)-500.369.2580"><strong>(+1) 500.369.2580</strong></a></li>
                                            <li><a href="mailto:support@zentec.com">support@zentec.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Map Box--> */}
                            <div className="map-box">
                                <div className="map-canvas"
                                    data-zoom="12"
                                    data-lat="-37.817085"
                                    data-lng="144.955631"
                                    data-type="roadmap"
                                    data-hue="#ffc400"
                                    data-title="California"
                                    data-icon-path="images/icons/map-marker-2.png"
                                    data-content="California VIC 3000, USA<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!--Info Block--> */}
                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="content-box">
                                <div className="title-box">
                                    <h4><a href="case-studies.html">Europe office</a></h4>
                                    <div className="sub-text">Manchester, UK</div>
                                </div>
                                <div className="text-content">
                                    <div className="info">
                                        <ul>
                                            <li>47 Wood Circle, Pana City FL 32401</li>
                                            <li>Call us <a href="tel:(+1)-500.369.2580"><strong>(+1) 500.369.2580</strong></a></li>
                                            <li><a href="mailto:support@zentec.com">support@zentec.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
{/* 
                            <!--Map Box--> */}
                            <div className="map-box">
                                <div className="map-canvas"
                                    data-zoom="12"
                                    data-lat="-37.817085"
                                    data-lng="144.955631"
                                    data-type="roadmap"
                                    data-hue="#ffc400"
                                    data-title="Europe"
                                    data-icon-path="images/icons/map-marker-3.png"
                                    data-content="Manchester VIC 3000, Europe<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                                </div>

                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>

);

}
export default Contact;
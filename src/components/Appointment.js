import React from 'react';


function Appointment() {
    return (
        <>
            <section className="appointment-section">
                <div className="pattern-layer"></div>

                <div className="auto-container">
                    <div className="row clearfix">
                        {/* <!--Text Column--> */}
                        <div className="text-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <div className="upper-text">AsIndia - Welcome to IT Solutions</div>
                                    <h2>Why Choose <strong>AsIndia Innovation Pvt Ltd.</strong></h2>
                                    <div className="lower-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet velit sed quia non numquam eius modi tempora incidunt labore.</div>
                                </div>

                                <div className="content">
                                    {/* <!--Service Block--> */}
                                    <div className="service-block-two">
                                        <div className="inner-box">
                                            <div className="icon-outer">
                                                <span className="icon-bg"></span>
                                                <div className="icon-box"><img src="images/icons/services/6.png" alt="" title="" /></div>
                                            </div>
                                            <h3><a href="services.html">Easier To Implement</a></h3>
                                            <div className="text">Sed incididunt labore dolore magna sed aliquatenim veniam quis ipsum nostrud exercitation ullamco</div>
                                        </div>
                                    </div>
                                    {/* <!--Service Block--> */}
                                    <div className="service-block-two">
                                        <div className="inner-box">
                                            <div className="icon-outer">
                                                <span className="icon-bg"></span>
                                                <div className="icon-box"><img src="images/icons/services/7.png" alt="" title="" /></div>
                                            </div>
                                            <h3><a href="services.html">Increase Growth Rates</a></h3>
                                            <div className="text">Sed incididunt labore dolore magna sed aliquatenim veniam quis ipsum nostrud exercitation ullamco</div>
                                        </div>
                                    </div>
                                    {/* <!--Service Block--> */}
                                    <div className="service-block-two">
                                        <div className="inner-box">
                                            <div className="icon-outer">
                                                <span className="icon-bg"></span>
                                                <div className="icon-box"><img src="images/icons/services/8.png" alt="" title="" /></div>
                                            </div>
                                            <h3><a href="services.html">Branding Of The Future</a></h3>
                                            <div className="text">Sed incididunt labore dolore magna sed aliquatenim veniam quis ipsum nostrud exercitation ullamco</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Form Column--> */}
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInRight' }}>
                                <figure className="image"><img src="images/resource/featured-image-1.jpg" alt="" title="" /></figure>
                                {/* <!--Form Box--> */}
                                <div className="form-box">
                                    <div className="title">
                                        <h3>Book Your Appointment</h3>
                                        <div className="text">We Help Customers Digital Transformation By IT Solutions</div>
                                    </div>
                                    <div className="default-form appointment-form">
                                        <form method="post" action="contact.html">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="field-name" placeholder="First Name" required="" value="" />
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="field-name" placeholder="Last Name" required="" value="" />
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="field-name" placeholder="Email" required="" value="" />
                                                </div>

                                                <div className="form-group col-md-6 col-sm-12">
                                                    <select className="custom-select-box" name="field-name" id="ui-id-1" style={{ display: 'none' }}>
                                                        <option>Inquiry About</option>
                                                        <option>IT Cloud Integration</option>
                                                        <option>Business Security</option>
                                                        <option>Product Engineering</option>
                                                    </select>
                                                    <span tabindex="0" id="ui-id-1-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-1-menu" aria-haspopup="true" className="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget">
                                                        <span className="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span>
                                                        <span className="ui-selectmenu-text">Inquiry About</span>
                                                    </span>
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
            </section>
        </>

    );

}
export default Appointment;
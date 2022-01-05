import React from 'react';


function Header() {
    return (
        <>

            {/* Main Header */}
            <header className="main-header header-style-one">
                {/* Header Top */}
                <div className="header-top header-top-one">
                    <div className="auto-container">
                        <div className="inner clearfix">
                            <div className="top-left clearfix">
                                <div className="top-text">IT solutions that are designed to integrate multiple sectors</div>
                            </div>

                            <div className="top-right clearfix">
                                {/*Info*/}
                                <div className="info">
                                    <ul className="clearfix">
                                        <li className="phone"><a href="tel:500.369.2580"><span className="icon sl-icon-call-in"></span>Phone <strong>500.369.2580</strong></a></li>
                                        <li className="email"><a href="mailto:info@zentec.com"><span className="icon sl-icon-envelope-open"></span>info@asindia.net</a></li>
                                    </ul>
                                </div>
                                {/*Language*/}
                                <div className="language">
                                    <div className="lang-btn">
                                        <span className="flag"><img src="images/icons/icon-lang.png" alt="" title="English" /></span>
                                        <span className="txt">En</span>
                                        <span className="arrow fa fa-angle-down"></span>
                                    </div>
                                    <div className="lang-dropdown">
                                        <ul>
                                            <li><a href="#">German</a></li>
                                            <li><a href="#">Italian</a></li>
                                            <li><a href="#">Chinese</a></li>
                                            <li><a href="#">Russian</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo"><a href="index.html" title="Zentec - Business and Consulting HTML Template">
                                    <img src="images/logo.png" alt="Zentec - Business and Consulting HTML Template" title="Zentec - Business and Consulting HTML Template" /></a></div>
                            </div>
                            <div className="right-nav clearfix">
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>

                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li className="current dropdown"><a href="index.html">Home</a>
                                                    <ul>
                                                        <li><a href="index.html">Home Variant 01</a></li>
                                                        <li><a href="index-2.html">Home Variant 02</a></li>
                                                        <li className="dropdown"><a href="index.html">Header Styles</a>
                                                            <ul>
                                                                <li><a href="index.html">Header Style 01</a></li>
                                                                <li><a href="index-2.html">Header Style 02</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="about.html">About Us</a>
                                                    <ul>
                                                        <li><a href="about.html">About Us</a></li>
                                                        <li><a href="case-studies.html">Case Studies</a></li>
                                                        <li><a href="faqs.html">FAQ's</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="services.html">IT Solutions</a>
                                                    <ul>
                                                        <li><a href="services.html">All Services</a></li><li><a href="data-infrastructure.html">Data Infrastructure</a></li>
                                                        <li><a href="cloud-integration.html">IT Cloud Integration</a></li>
                                                        <li><a href="it-startup.html">IT Startup Projects</a></li>
                                                        <li><a href="product-engineering.html">Product Engineering</a></li>
                                                        <li><a href="business-security.html">Business Security</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="case-studies.html">Case Studies</a>
                                                    <ul>
                                                        <li><a href="case-studies.html">Case Studies</a></li>
                                                        <li><a href="case-single.html">Project Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="blog-grid.html">News</a>
                                                    <ul>
                                                        <li><a href="blog-grid.html">Blog Grid Style</a></li>
                                                        <li><a href="blog-fullwidth.html">Blog Fullwidth</a></li>
                                                        <li><a href="blog-single.html">Blog Post Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                {/*Search Btn*/}
                                <div className="search-btn">
                                    <button type="button" className="theme-btn search-toggler"><span className="fa fa-search"></span></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}

                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container clearfix">
                        {/*Logo*/}
                        <div className="logo pull-left">
                            <a href="index.html" title=""><img src="images/sticky-logo.png" alt="" title="" /></a>
                        </div>
                        {/*Right Col*/}
                        <div className="pull-right">
                            {/* Main Menu */}
                            <nav className="main-menu clearfix">
                                {/*Keep This Empty / Menu will come through Javascript*/}
                            </nav>{/* Main Menu End*/}
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}

                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-targeting-cross"></span></div>

                    <nav className="menu-box">
                        <div className="nav-logo"><a href="index.html"><img src="images/nav-logo.png" alt="" title="" /></a></div>
                        <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                        {/*Social Links*/}
                        <div className="social-links">
                            <ul className="clearfix">
                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>{/* End Mobile Menu */}
            </header>
            {/* End Main Header */}

           
        </>

    );

}
export default Header;

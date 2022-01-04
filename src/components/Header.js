import React from 'react';

function Header() {
    return (
        <>
            <div>
                {/* Main Header */}
                <header class="main-header header-style-one">
                    {/* Header Top */}
                    <div class="header-top header-top-one">
                        <div class="auto-container">
                            <div class="inner clearfix">
                                <div class="top-left clearfix">
                                    <div class="top-text">IT solutions that are designed to integrate multiple sectors</div>
                                </div>

                                <div class="top-right clearfix">
                                    {/*Info*/}
                                    <div class="info">
                                        <ul class="clearfix">
                                            <li class="phone"><a href="tel:500.369.2580"><span class="icon sl-icon-call-in"></span>Phone <strong>500.369.2580</strong></a></li>
                                            <li class="email"><a href="mailto:info@zentec.com"><span class="icon sl-icon-envelope-open"></span>info@zentec.com</a></li>
                                        </ul>
                                    </div>
                                    {/*Language*/}
                                    <div class="language">
                                        <div class="lang-btn">
                                            <span class="flag"><img src="images/icons/icon-lang.png" alt="" title="English" /></span>
                                            <span class="txt">En</span>
                                            <span class="arrow fa fa-angle-down"></span>
                                        </div>
                                        <div class="lang-dropdown">
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
                    <div class="header-upper">
                        <div class="auto-container">
                            <div class="inner-container clearfix">
                                {/*Logo*/}
                                <div class="logo-box">
                                    <div class="logo"><a href="index.html" title="Zentec - Business and Consulting HTML Template">
                                        <img src="images/logo.png" alt="Zentec - Business and Consulting HTML Template" title="Zentec - Business and Consulting HTML Template" /></a></div>
                                </div>
                                <div class="right-nav clearfix">
                                    <div class="nav-outer clearfix">
                                        {/*Mobile Navigation Toggler*/}
                                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu-1"></span></div>

                                        {/* Main Menu */}
                                        <nav class="main-menu navbar-expand-md navbar-light">
                                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                                <ul class="navigation clearfix">
                                                    <li class="current dropdown"><a href="index.html">Home</a>
                                                        <ul>
                                                            <li><a href="index.html">Home Variant 01</a></li>
                                                            <li><a href="index-2.html">Home Variant 02</a></li>
                                                            <li class="dropdown"><a href="index.html">Header Styles</a>
                                                                <ul>
                                                                    <li><a href="index.html">Header Style 01</a></li>
                                                                    <li><a href="index-2.html">Header Style 02</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown"><a href="about.html">About Us</a>
                                                        <ul>
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li><a href="case-studies.html">Case Studies</a></li>
                                                            <li><a href="faqs.html">FAQ's</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown"><a href="services.html">IT Solutions</a>
                                                        <ul>
                                                            <li><a href="services.html">All Services</a></li><li><a href="data-infrastructure.html">Data Infrastructure</a></li>
                                                            <li><a href="cloud-integration.html">IT Cloud Integration</a></li>
                                                            <li><a href="it-startup.html">IT Startup Projects</a></li>
                                                            <li><a href="product-engineering.html">Product Engineering</a></li>
                                                            <li><a href="business-security.html">Business Security</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown"><a href="case-studies.html">Case Studies</a>
                                                        <ul>
                                                            <li><a href="case-studies.html">Case Studies</a></li>
                                                            <li><a href="case-single.html">Project Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown"><a href="blog-grid.html">News</a>
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
                                    <div class="search-btn">
                                        <button type="button" class="theme-btn search-toggler"><span class="fa fa-search"></span></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}

                    {/* Sticky Header  */}
                    <div class="sticky-header">
                        <div class="auto-container clearfix">
                            {/*Logo*/}
                            <div class="logo pull-left">
                                <a href="index.html" title=""><img src="images/sticky-logo.png" alt="" title="" /></a>
                            </div>
                            {/*Right Col*/}
                            <div class="pull-right">
                                {/* Main Menu */}
                                <nav class="main-menu clearfix">
                                    {/*Keep This Empty / Menu will come through Javascript*/}
                                </nav>{/* Main Menu End*/}
                            </div>
                        </div>
                    </div>{/* End Sticky Menu */}

                    {/* Mobile Menu  */}
                    <div class="mobile-menu">
                        <div class="menu-backdrop"></div>
                        <div class="close-btn"><span class="icon flaticon-targeting-cross"></span></div>

                        <nav class="menu-box">
                            <div class="nav-logo"><a href="index.html"><img src="images/nav-logo.png" alt="" title="" /></a></div>
                            <div class="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                            {/*Social Links*/}
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                                    <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>{/* End Mobile Menu */}
                </header>
                {/* End Main Header */}
            </div>
        </>

    );

}
export default Header;

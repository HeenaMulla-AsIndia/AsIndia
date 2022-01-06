import React from 'react';


function HeaderUpper() {
    return (
        <>
{/* <!-- Sticky Header  --> */}
        <div className="sticky-header">
            <div className="auto-container clearfix">
                {/* <!--Logo--> */}
                <div className="logo pull-left">
                    <a href="index.html" title=""><img src="images/sticky-logo.png" alt="" title=""/></a>
                </div>
                {/* <!--Right Col--> */}
                <div className="pull-right">
                    {/* <!-- Main Menu --> */}
                    <nav className="main-menu clearfix">
                        {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                    </nav>
                    {/* <!-- Main Menu End--> */}
                </div>
            </div>
        </div>
        {/* <!-- End Sticky Menu --> */}

        {/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><span className="icon flaticon-targeting-cross"></span></div>
            
            <nav className="menu-box">
                <div className="nav-logo"><a href="index.html"><img src="images/nav-logo.png" alt="" title=""/></a></div>
                <div className="menu-outer">
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                    </div>
				{/* <!--Social Links--> */}
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
        </div>
        {/* <!-- End Mobile Menu --> */}

        </>

    );

}
export default HeaderUpper;

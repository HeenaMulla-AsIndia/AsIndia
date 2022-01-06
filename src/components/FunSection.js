import React from 'react';


function FunSection() {
    return (
        <>
{/* 
<!--Fun Facts Section--> */}
    <section className="fun-facts-section">

        <div className="auto-container">
            <div className="fact-counter">

                <div className="row clearfix">
                    {/* <!--Column--> */}
                    <div className="counter-column col-lg-4 col-md-4 col-sm-12">
                        <div className="inner wow fadeInUp" data-wow-delay="0ms">
                            <div className="upper-title">System Integrations Done</div>
                            <div className="count-box"><span className="count-text" data-speed="1000" data-stop="1458">0</span></div>
                            <div className="counter-title">for customers</div>
                        </div>
                    </div>

                    {/* <!--Column--> */}
                    <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                        <div className="inner wow fadeInUp" data-wow-delay="300ms">
                            <div className="upper-title">Powerful Team to Focus</div>
                            <div className="count-box"><span className="count-text" data-speed="1000" data-stop="160">0</span>+</div>
                            <div className="counter-title">Expert Members</div>
                        </div>
                    </div>

                    {/* <!--Column--> */}
                    <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                        <div className="inner wow fadeInUp" data-wow-delay="600ms">
                            <div className="upper-title">Launched Case Studies</div>
                            <div className="count-box"><span className="count-text" data-speed="1000" data-stop="1080">0</span></div>
                            <div className="counter-title">Fully Launched</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <div className="theme-separator"></div>
</>

);

}
export default FunSection;
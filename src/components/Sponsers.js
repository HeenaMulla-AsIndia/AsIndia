import React from 'react';


function Sponsers() {
    return (
        <>
        <section className="sponsors-section">
        <div className="sponsors-outer">
            {/* <!--Sponsors--> */}
            <div className="auto-container">
                {/* <!--Sponsors Carousel--> */}
                {/* responsive:{ "0" :{ "items": "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "3" } , "800":{ "items" : "3" }, "1024":{ "items" : "4" }, "1200":{ "items" : "5" }} */}
                {/* dataOptions={{loop: true, margin: '30px', autoheight:true, lazyload:true,nav: true, dots: true, autoplay: true, autoplayTimeout: 6000, smartSpeed: 500}}  */}
                <div className="sponsors-carousel theme-carousel owl-theme owl-carousel d-flex">
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/1.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/2.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/3.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/4.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/5.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/1.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/2.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/3.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/4.jpg" alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="images/clients/5.jpg" alt=""/></a></figure></div>
                </div>
            </div>
        </div>
    </section>
        </>

    );

}
export default Sponsers;
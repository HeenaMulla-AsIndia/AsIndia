import React from 'react';


function Testimonial() {
    return (
        <>

             <section className="testimonials-section">
                {/* <!--Testimonials Section--> */}
                <div className="image-layer" style={{ backgroundImage: 'url(images/background/image-2.jpg)' }}></div>

                <div className="auto-container">
                    <div className="carousel-box wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms',  animationName: 'fadeInUp'}}>
                        <div className="testimonial-carousel theme-carousel owl-theme owl-carousel owl-loaded owl-drag" data-options="{loop: true, margin: 0, autoheight:true, lazyload:true, nav: true, dots: true, autoplay: true, autoplayTimeout: 5000, smartSpeed: 500, responsive:{ 0 :{ items: 1 }, 768 :{ items : 1 } , 1024:{ items : 1 }}}">
                        {/* <div className="testimonial-carousel theme-carousel owl-theme owl-carousel owl-loaded owl-drag" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 0, &quot;autoheight&quot;:true, &quot;lazyload&quot;:true, &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 5000, &quot;smartSpeed&quot;: 500, &quot;responsive&quot;:{ &quot;0&quot; :{ &quot;items&quot;: &quot;1&quot; }, &quot;768&quot; :{ &quot;items&quot; : &quot;1&quot; } , &quot;1024&quot;:{ &quot;items&quot; : &quot;1&quot; }}}"> */}
                            {/* <!--Slide-->
                    
                    <!--Slide-->
                    
                    <!--Slide--> */}


                            <div className="owl-stage-outer">
                                <div className="owl-stage" >
                            
                            {/* <div className="owl-item cloned"  style={{width: '575px'}}><div className="slide-item">
                                <div className="inner">
                                    <div className="icon-box"><span className="flaticon-chat-2"></span></div>
                                    <div className="title">Best Services from ZenTech IT Solutions!</div>
                                    <div className="text">Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecas cupidatat non proident, sunt in culpa qui officia deserunt.</div>
                                    <div className="info">
                                        <div className="name">Saren Matthew</div>
                                        <div className="designation">CEO, IT Works</div>
                                    </div>
                                </div>
                            </div></div> */}
                          
{/*                           
                            <div className="owl-item cloned" style={{width: '575px'}}><div className="slide-item">
                                <div className="inner">
                                    <div className="icon-box"><span className="flaticon-chat-2"></span></div>
                                    <div className="title">Best Services from ZenTech IT Solutions!</div>
                                    <div className="text">Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecas cupidatat non proident, sunt in culpa qui officia deserunt.</div>
                                    <div className="info">
                                        <div className="name">Saren Matthew</div>
                                        <div className="designation">CEO, IT Works</div>
                                    </div>
                                </div>
                            </div></div> 
                           */}
                          
                            <div className="owl-item active" ><div className="slide-item">
                                <div className="inner">
                                    <div className="icon-box"><span className="flaticon-chat-2"></span></div>
                                    <div className="title">Best Services from ZenTech IT Solutions!</div>
                                    <div className="text">Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecas cupidatat non proident, sunt in culpa qui officia deserunt.</div>
                                    <div className="info">
                                        <div className="name">Saren Matthew</div>
                                        <div className="designation">CEO, IT Works</div>
                                    </div>
                                </div>
                            </div></div> 
                            
                            {/* <div className="owl-item cloned" style={{width: '575px'}}><div className="slide-item">
                                    <div className="inner">
                                        <div className="icon-box"><span className="flaticon-chat-2"></span></div>
                                        <div className="title">Best Services from ZenTech IT Solutions!</div>
                                        <div className="text">Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecas cupidatat non proident, sunt in culpa qui officia deserunt.</div>
                                        <div className="info">
                                            <div className="name">Saren Matthew</div>
                                            <div className="designation">CEO, IT Works</div>
                                        </div>
                                    </div>

                                </div></div></div></div>
                                <div className="owl-nav"><button type="button" role="presentation" className="owl-prev">
                                    <span className="icon fa fa-arrow-left"></span></button>
                                    <button type="button" role="presentation" className="owl-next">
                                        {/* <span className="icon fa fa-arrow-right"></span></button></div>
                                        <div className="owl-dots"><button role="button" className="owl-dot active">
                                            <span></span></button><button role="button" className="owl-dot"> */}
                                                {/* <span></span></button><button role="button" class="owl-dot"> */}
                                                    <span></span></button></div></div>
                    </div>
                </div>

            </section> 

        </>

    );

}
export default Testimonial;



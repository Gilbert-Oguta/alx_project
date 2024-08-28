import React, { Component, Fragment } from 'react';

function index(){
    return(
        <Fragment>
            <header className="header" data-section-theme="dark">
        <div className="container">
            <div className="header-container">
                <div className="header-logo">
                    <a href="#">
                        <img src="images/logo-white.png" alt="Vehicle Agency logo" width="160" height="40">
                    </a>
                </div>
                <nav className="navbar-menu">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#works" className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#latest_news" className="nav-link">Latest news</a>
                        </li>
                        <li className="nav-item">
                            <a href="#testimonials" className="nav-link">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <form action="#" method="post" className="form-search">
                                <input type="search" name="q" id="search-input" placeholder="Search..."
                                    aria-label="Search through site content">
                                <button className="search-button">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        className="search-icon">
                                        <title>
                                            Search icon
                                        </title>
                                        <path
                                            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z">
                                        </path>
                                    </svg>
                                </button>
                            </form>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <!-- Main  -->
    <main>
        <!-- Hero section -->
        <section className="section-hero hero-homepage" data-section-theme="dark">
            <div className="container">
                <div className="section-body">
                    <section className="section-inner">
                        <h2 className="section-title">We help you safeguard and keep your vehicle</h2>
                        <a href="#" className="button">Get Started</a>
                    </section>
                </div>
            </div>
        </section>
        <!-- Services section -->
        <section id="services" class="section section-services">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Services</h2>
                    <p className="section-tagline">We work with you</p>
                </header>
                <div className="section-body">
                    <ul className="row">
                        <li className="col-1-3">
                            <div className="card-services">
                                <h3 className="card-title"><a href="#">Four Wheel</a></h3>
                            </div>
                        </li>
                        <li className="col-1-3">
                            <div className="card-services">
                                <h3 className="card-title"><a href="#">Three Wheel</a></h3>
                            </div>
                        </li>
                        <li className="col-1-3">
                            <div className="card-services">
                                <h3 className="card-title"><a href="#">Two Wheel</a></h3>
                            </div>
                        </li>
                    </ul>
                    <ul className="row">
                        <li className="col-1-3">
                            <div className="card-services">
                                <h3 className="card-title"><a href="#">Car Wash</a></h3>
                            </div>
                        </li>
                        <li className="col-1-3">
                            <div className="card-services">
                                <h3 className="card-title"><a href="#">Vehicle Maintenance</a></h3>
                            </div>
                        </li>
                        <li className="col-1-3">
                            <div className="card-services">
                                <h3 className="card-title"><a href="#">Social Media</a></h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Works section  -->
        <section id="works" class="section section-works" data-section-theme="dark">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Works</h2>
                    <p className="section-tagline">Take a look at our portfolio</p>
                </header>
                <div className="section-body">
                    <ul className="row">
                        <li className="col-1-3">
                            <article className="card-work">
                                <div className="card-outer">
                                    <div className="card-image">
                                        <img src="https://eins.co.in/s/img/wp-content/uploads/2020/03/parking-eins-400x400.jpg" alt="">
                                    </div>
                                    <div className="card-inner">
                                        <h3 className="card-title"><a href="#">Vehicle Parking</a></h3>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="col-1-3">
                            <article className="card-work">
                                <div className="card-outer">
                                    <div className="card-image">
                                        <img src="https://static.wixstatic.com/media/11062b_42151c8a025e489ca2d30f6bd1f4bf09~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_42151c8a025e489ca2d30f6bd1f4bf09~mv2.jpg" alt="">
                                    </div>
                                    <div className="card-inner">
                                        <h3 className="card-title"><a href="#">Vehicle Cleaning</a></h3>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="col-1-3">
                            <article className="card-work">
                                <div className="card-outer">
                                    <div className="card-image">
                                        <img src="https://pearsonautoak.com/wp-content/uploads/2023/05/Repair-Maintenance-Share-1200x628-1.jpg" alt="">
                                    </div>
                                    <div className="card-inner">
                                        <h3 className="card-title"><a href="#">Vehicle Maintenance</a></h3>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- About Us section  -->
        <section id="about" className="section section-about-us">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">About Us</h2>
                    <p className="section-tagline">Everything about us</p>
                </header>
                <div className="section-body">
                    <div className="row">
                        <div className="col-1-2">
                            <img src="https://media.istockphoto.com/id/1397038664/photo/cars-parked-in-multistorey-garage.jpg?s=612x612&w=0&k=20&c=PF-MBePwAoTbb9PgaK6B2txBhhnwpF907rz65qFjILQ=" alt="" width="460" height="460">
                        </div>
                        <div className="col-1-2">
                            <h3>Who are we</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum,
                                praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus
                                quidem iste dicta quibusdam atque maxime cum!</p>
                            <h3>Our culture</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum,
                                praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus
                                quidem iste dicta quibusdam atque maxime cum!</p>
                            <h3>How we work</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum,
                                praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus
                                quidem iste dicta quibusdam atque maxime cum!</p>
                        </div>
                    </div>
                </div>
                <div className="section-footer">
                    <a href="#" className="button">Learn more about us</a>
                </div>
            </div>
        </section>
        <!-- Latest news section  -->
        <section id="latest_news" className="section section-latest-news">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Latest Upgrades</h2>
                </header>
                <div className="section-body">
                    <ul className="row">
                        <li className="col-1-3">
                            <article className="card-blog">
                                <div>
                                    <img src="https://ih1.redbubble.net/image.4781845421.4930/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" width="305" height="305">
                                </div>
                                <p className="card-category">Detailing</p>
                                <h3><a href="#">Try this amazing offer.</a></h3>
                                <p>We are in a trial phase of adding a vehicle detailing services to our cutomers. We encourage our esteemed customers to try this services at a good discount. Don't miss out.</p>
                                <small>By Kelly D.</small>
                            </article>
                        </li>
                        <li class="col-1-3">
                            <article className="card-blog">
                                <div>
                                    <img src="https://us.123rf.com/450wm/onyxprj/onyxprj1805/onyxprj180500399/102193519-various-details-for-car-service-vector-flat-illustrations.jpg?ver=6" alt="" width="305" height="305">
                                </div>
                                <p className="card-category">Garage Upgrade</p>
                                <h3><a href="#">Get yourself the best.</a></h3>
                                <p>We have added more amenities in terms of equipments and mechanical personnel to attend to your vehicles in the best way.</p>
                                <small>By Garage Managing Team.</small>
                            </article>
                        </li>
                        <li class="col-1-3">
                            <article className="card-blog">
                                <div>
                                    <img src="https://111somerset.com.sg/wp-content/uploads/2023/10/Carpark-logo.jpg" alt="" width="305" height="305">
                                </div>
                                <p className="card-category">Promotions</p>
                                <h3><a href="#">Book with us to get a chance to win.</a></h3>
                                <p>We delited to inform our esteemed customers that we are giving out free one month parking waiver to our lucky loyal cutomers.
                                </p>
                                <small>By Marketing Director</small>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Testimonials section -->
        <section id="testimonial" className="section section-testimonial">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Testimonials</h2>
                    <p className="section-tagline">We are more than a digital company</p>
                </header>
                <div className="section-body">
                    <ul className="row">
                        <li className="col-1-3">
                            <article className="card-testimonial">
                                <img src="images/pic-person-01.jpg" alt="Yuri Y. avatar" width="100" height="100"
                                    className="card-avatar">
                                <blockquote className="card-quote">
                                    <p>I am completely blown away. Thanks to Techium, we’ve just launched our 5th
                                        website!
                                        <cite>Yuri Y.</cite>
                                    </p>
                                </blockquote>
                            </article>
                        </li>
                        <li className="col-1-3">
                            <article className="card-testimonial">
                                <img src="images/pic-person-02.jpg" alt="Dorrie S. avatar" width="100" height="100"
                                    className="card-avatar">
                                <blockquote className="card-quote">
                                    <p>Thank you so much for your help. Techium company is awesome!
                                        <cite>Dorrie S.</cite>
                                    </p>
                                </blockquote>
                            </article>
                        </li>
                        <li className="col-1-3">
                            <article className="card-testimonial">
                                <img src="images/pic-person-03.jpg" alt="Sven H. avatar" width="100" height="100"
                                    className="card-avatar">
                                <blockquote className="card-quote">
                                    <p>I love your system. Definitely worth the investment. I’d be lost without Techium
                                        company.
                                        <cite>Sven H.</cite>
                                    </p>
                                </blockquote>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Contact section -->
        <section id="contact" className="section section-contact">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Contact</h2>
                    <p className="section-tagline">We’d love to hear from you!</p>
                </header>
                <div className="section-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem
                        modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
                </div>
                <div className="section-footer">
                    <a href="#" className="button">Get in touch</a>
                </div>
            </div>
        </section>
    </main>
    <!-- Footer  -->
    <footer className="footer" data-section-theme="dark">
        <div className="container">
            <div className="row">
                <div className="col-1-2">
                    <img src="images/logo-white.png" alt="Techium logo" width="160" height="40">
                    <address className="footer-address">
                        972 Mission St<br>
                        San Francisco, CA<br>
                        94103
                    </address>
                </div>
                <div className="col-1-2">
                    <ul className="social nav">
                        <li className="social-item nav-item">
                            <a href="https://www.facebook.com/HolbertonSchool/" className="social-link">
                                <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                                    <title>
                                        Facebook icon
                                    </title>
                                    <path
                                        d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                                </svg>
                            </a>
                        </li>
                        <li className="social-item nav-item">
                            <a href="https://twitter.com/holbertonschool" className="social-link">
                                <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                                    <title>
                                        Twitter icon
                                    </title>
                                    <path
                                        d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
                                </svg>
                            </a>
                        </li>
                        <li className="social-item nav-item">
                            <a href="https://www.instagram.com/holbertonschool/" className="social-link">
                                <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                                    <title>
                                        Instagram icon
                                    </title>
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div className="row">
                <div className="col-1-2">
                    <p className="footer-copyright">© 2020 Techium, made with ♥ by students at Holberton School.</p>
                </div>
                <div className="col-1-2">
                    <ul className="footer-nav nav">
                        <li className="footer-nav-item nav-item">
                            <a href="#" className="footer-nav-link">Terms of use</a>
                        </li>
                        <li className="footer-nav-item nav-item">
                            <a href="#" className="footer-nav-link">Privacy Policy</a>
                        </li>
                        <li className="footer-nav-item nav-item">
                            <a href="#" className="footer-nav-link">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        </Fragment>
    )
}

export default index;
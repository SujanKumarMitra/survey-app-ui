import { Button } from '@material-ui/core';
import AOS from 'aos/dist/aos';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css.map';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from "jquery";
import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './Home.css';


function onReady() {
    var scrolltoOffset = $('#header').outerHeight() - 1;
    if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $('html, body').animate({
                scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
        }
    }
}

function initAos() {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true
    });
}
const Home = (props) => {

    useEffect(() => {
        document.title="Anonymous Surveys"
        onReady();
        initAos();
    }, []);

    return (
        <>
            <Navbar />
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up">
                            <div>
                                <h1>Anonymous Surveys</h1>
                                <h2>Conduct surveys anonymously</h2>
                                <Button href="/survey" variant="contained" color="primary">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img"
                            data-aos="fade-up">
                            <img src="./hero-img.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">

                <section id="features" className="features">
                    <div className="container">
                        <div className="section-title">
                            <h2>Features</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
                                <div className="content d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-md-6 icon-box" data-aos="fade-up">
                                            <h4>
                                                Create a Form with a few clicks
                                            </h4>
                                            <p>
                                                Create a responsive, attractive form with questions of choice with only a few clicks.
                                            </p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4>Wide range of Widgets</h4>
                                            <p>
                                                We offer a wide selection of widgets suitable according to your questions
                                                starting from simple text fields to charming datetime pickers
                                            </p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                            <i className="bx bx-shield"></i>
                                            <h4>Share submission link among your friends</h4>
                                            <p>
                                                Once done, share the submission link to your target audience for responding to
                                                the survey.
                                            </p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                            <i className="bx bx-images"></i>
                                            <h4>Monitor Responses</h4>
                                            <p>
                                                After that, start monitoring the responses of the survey.
                                            </p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                            <i className="bx bx-atom"></i>
                                            <h4>Collect Responses</h4>
                                            <p>Download a copy of responses in your machine locally for future use.</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                                            <i className="bx bx-id-card"></i>
                                            <h4>Only you can access the data</h4>
                                            <p>
                                                Users are unaware of who actually is conducting the survey, thereby keeping you <strong>anonymous.</strong>
                                                <br />
                                                Also, we never share response data between other parties.All the data belongs to
                                                you and only <strong>you.</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image col-md-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2"
                                data-aos="fade-left" data-aos-delay="100">
                                <img src="./details.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <footer id="footer">
                <div className="container py-4">
                    <div className="copyright">
                        Built by
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/sujan-kumar-mitra-1b6913174/">
                            <strong> Sujan Kumar Mitra</strong>
                        </a>
                    </div>
                    <div className="credits">
                        Designed by <a target="_blank" rel="noreferrer" href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

Home.defaultProps = {};

export default Home;

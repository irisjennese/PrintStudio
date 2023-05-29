import React from "react";
import jayson from "../assets/images/jayson.jpg"
import jaime from "../assets/images/jaime.jpg"
import marty from "../assets/images/marty.jpg"
import iris from "../assets/images/iris.jpg"
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';

const AboutUs = () => {
  return (
    <>
      <Helmet title='about'>
        <CommonSection title='About US' />
        <div className="search-panel d-none" id="searchPanel">
          <div className="search-panel-inner p-4">
            <div className="seach-panel-close">
              <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
                <svg className="svg-icon text-white mt-1">
                  <use href="#close-1"> </use>
                </svg>
              </button>
            </div>
            <form className="w-100" action="#">
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="d-flex align-items-center mb-3 border-bottom">
                    <input className="form-control form-control-lg bg-none border-0 shadow-0 rounded-0 px-0" type="text" placeholder="What are you searching for" aria-describedby="button-addon2" />
                    <button className="btn btn-link text-dark shadow-0 px-0 text-decoration-none" id="button-addon2" type="submit"><i className="fas fa-search"></i></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <section className="py-5">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-8 col-sm-9 py-lg-4">
                <h2>How it all began</h2>
                <p className="text-muted fw-normal mb-0">Print Studio started as a small idea in the minds of a group of creative individuals who were passionate about design and print. It was born out of the desire to bring innovative and high-quality printing solutions to the market, and to make it accessible to everyone.
                  The journey began with a humble setup, where the team worked tirelessly to create a brand that stood for excellence and customer satisfaction. </p>
              </div>
              <div className="col-lg-4 col-sm-3 py-lg-4 d-none d-sm-block">
                <div className="about-icon ml-lg-0"><i className="fa-sharp fa-solid fa-chart-line fa-2xl" style={{ color: "#008aff" }} ></i></div>
              </div>
              <div className="col-lg-4 col-sm-3 py-lg-4 text-end d-none d-sm-block">
                <div className="about-icon mr-lg-0"><i class="fa-regular fa-user fa-2xl" style={{ color: "#008aff" }} ></i></div>
              </div>
              <div className="col-lg-8 col-sm-9 py-lg-4">
                <h2>Who we are</h2>
                <p className="text-muted fw-normal mb-0">At Print Studio, we are a team of dedicated professionals who are passionate about design and printing. We believe that high-quality print products can make a significant impact on businesses and individuals alike, and we strive to provide our customers with the best possible printing solutions.</p>
              </div>
              <div className="col-lg-8 col-sm-9 py-lg-4">
                <h2>We care</h2>
                <p className="text-muted fw-normal mb-0">We care about our customers and the impact we have on the environment. We believe that businesses can thrive while also being socially and environmentally responsible, and we are committed to doing our part to make a positive impact on the world around us.</p>
              </div>
              <div className="col-lg-4 col-sm-3 py-lg-4 d-none d-sm-block">
                <div className="about-icon ml-lg-0"><i class="fa-regular fa-heart fa-2xl" style={{ color: "#008aff" }}></i></div>
              </div>
              <div className="col-lg-4 col-sm-3 py-lg-4 text-end d-none d-sm-block">
                <div className="about-icon mr-lg-0"><i class="fa-sharp fa-solid fa-truck-moving fa-2xl" style={{ color: "#008aff" }}></i></div>
              </div>
              <div className="col-lg-8 col-sm-9 py-lg-4">
                <h2>Fast delivery</h2>
                <p className="text-muted fw-normal mb-0">We understand that time is of the essence, especially when it comes to business. That's why we offer fast and reliable delivery options to ensure that our customers receive their print products in a timely manner.</p>
              </div>
              <div className="col-lg-8 col-sm-9 py-lg-4">
                <h2>Your security and privacy matters</h2>
                <p className="text-muted fw-normal mb-0">We take the security and privacy of our customers very seriously. We understand that the information and data our customers share with us is sensitive and confidential, and we are committed to protecting it at all times.</p>
              </div>
              <div className="col-lg-4 col-sm-3 py-lg-4 d-none d-sm-block">
                <div className="about-icon ml-lg-0"><i class="fa-solid fa-shield-halved fa-2xl" style={{ color: "#008aff" }}></i></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-white">
        <div className="container">
          <div className="row">

            <div className="col-md-12 text-center">
              <h2 className="section-title">
                Meet the Developers
              </h2>
              <p className="section-subtitle">
                PrintStudio is a team of passionate and talented individuals dedicated to providing high-quality printing solutions to clients across various industries.
              </p>
            </div>

            <div className="row mt-5 mx-auto">
              <div className="col-sm-3 col-12">
                <div className="card text-center">
                  <img src={jayson} className="rounded-pill mx-auto d-block mt-3" alt="image1" style={{ width: '100px' }} />
                  <div className="card-body">
                    <h5 className="card-title">Jayson Herrera</h5>
                    <p className="card-text">Team Leader Web Developer
                    Jayson as a leader and web developer at PrintStudio. With over 10 years of experience in the printing and web development, Jayson is a highly skilled expert who is passionate about delivering exceptional results to his clients.</p>
                    <ul className="team-icon me-4">
                      <li><a href="#Soc" className="twitter">
                        <i className="fa-brands fa-twitter fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="facebook">
                        <i class="fa-brands fa-facebook-f fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="instagram">
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-12">
                <div className="card text-center">
                  <img src={jaime} className="rounded-pill mx-auto d-block mt-3" alt="image2" style={{ width: '100px' }} />
                  <div className="card-body">
                    <h5 className="card-title">Jaime Mondares Yanoc</h5>
                    <p className="card-text">Web Developer Graphic Design
                    Jaime a talented web developer and graphic designer at PrintStudio. With over 10 years of experience in the industry, Jaime has a keen eye for design and a passion for creating beautiful, functional websites that meet his clients' needs.</p>
                    <ul className="team-icon me-4">
                      <li><a href="#Soc" className="twitter">
                        <i className="fa-brands fa-twitter fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="facebook">
                        <i class="fa-brands fa-facebook-f fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="instagram">
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-12">
                <div className="card text-center">
                  <img src={marty} className="rounded-pill mx-auto d-block mt-3" alt="image3" style={{ width: '100px' }} />
                  <div className="card-body">
                    <h5 className="card-title">Marty Dy-liacco Marbella</h5>
                    <p className="card-text">Marty is a highly experienced and skilled web developer and consultant with over 10 years of industry experience. He brings his expertise to help clients create effective and efficient web 
                    solutions.He strives to provide the best possible outcomes for his clients. </p>
                    <ul className="team-icon me-4">
                      <li><a href="#Soc" className="twitter">
                        <i className="fa-brands fa-twitter fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="facebook">
                        <i class="fa-brands fa-facebook-f fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="instagram">
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      </li>
                   </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-12">
                <div className="card text-center">
                  <img src={iris} className="rounded-pill mx-auto d-block mt-3" alt="image4" style={{ width: '100px' }} />
                  <div className="card-body">
                    <h5 className="card-title">Iris Raymundo</h5>
                    <p className="card-text">Web Developer and Designer
                    Iris Raymundo is a web developer at Print Studio.She has contributed greatly. Iris is known for her exceptional ability to design and develop visually stunning and user-friendly websites that meet the specific needs of clients.</p>
                    <ul className="team-icon me-4">
                      <li><a href="#Soc" className="twitter">
                        <i className="fa-brands fa-twitter fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="facebook">
                        <i class="fa-brands fa-facebook-f fa-lg"></i>
                      </a>
                      </li>
                      <li><a href="#Soc" className="instagram">
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Helmet>
    </>
  );
}

export default AboutUs;
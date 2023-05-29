import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo/logo_white.svg';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';



const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer mb-0'>

      <Container className='mb-0'>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <div>

                <h1 className='text-white'>
                  <img src={logo} alt='logo' style={{ width: "250px" }} />
                </h1>
              </div>
            </div>
            <p className='footer_text mt-4'>
              Print Studio is an ecommerce shop <br />
              that specializes in providing high-quality <br />
              custom print products.
            </p>
            <div className="soc-med">
              <i className="fab fa-facebook mx-3" style={{ color: 'white' }}></i>
              <i className="fab fa-instagram mx-3" style={{ color: 'white' }}></i>
              <i className="fab fa-twitter mx-3" style={{ color: 'white' }}></i>
              <i className="fab fa-linkedin mx-3" style={{ color: 'white' }}></i>
              <i className="fab fa-github mx-3" style={{ color: 'white' }}></i>
            </div>


          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className='footer_quick-links'>
              <h4 className='quick-links-title'>Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Tshirt</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Jacket</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mug</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Cap</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Jersey</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
            <div className='footer_quick-links'>
              <h4 className='quick-links-title'>Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>About Us</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Contact Us</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4'>
            <div className='footer_quick-links'>
              <h4 className='quick-links-title'>Contact</h4>
              <ListGroup className='mb-3 footer-contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-map-pin-line'></i>
                    <p>18th Floor,W Fifth, 5th Avenue,Taguig, 1630 Metro Manila</p>
                  </span>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-phone-line'></i>
                    <p>020-800-456-747</p>
                  </span>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-mail-line'></i>
                    <p>PrintStudio@gmail.com</p>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer_copyright'>
              <span><i class="fa-regular fa-copyright"></i></span> Print Studio {year} All rights reserved.
              <p style={{ color: 'white' }}>Developed by Jayson Herrera, Marty D. Marbella, Jaime Yanoc and Iris Raymundo.</p>


            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

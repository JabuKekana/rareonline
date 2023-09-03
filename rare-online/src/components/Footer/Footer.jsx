import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div className="text-white">
                <h1>Rare Online</h1>
              </div>
            </div>

            <p className="footer__text mt-4">
              Shop smart, shop Rare Online. Experience a seamless blend of
              quality and convenience with free delivery on all our products.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/home">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/home">Laptops</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/home">Watches</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/home">Others</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/shop">Home</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/about">About Us</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/info">Terms & Conditions</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o">
                  <Link to="/info">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-o d-flex align-tems-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>Johannesburg, Gauteng, South Africa</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o d-flex align-tems-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+27 67 221 0694</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-o d-flex align-tems-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>info@raredigital.co.za</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright developed by Jabu kekana. All rights reserved {year}{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

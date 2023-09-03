import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import counterimg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [mobilePhones, setMobilePhones] = useState([]);
  const [laptopProducts, setLaptopProducts] = useState([]);
  const [watchProducts, setWatchProducts] = useState([]);
  // const [wirelessProducts, setWirelessProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getMonth();
  const month = months[currentMonth];

  useEffect(() => {
    const filteredMobilePhones = products.filter(
      (item) => item.category === "Mobile-Phone"
    );
    const filteredLaptopProducts = products.filter(
      (item) => item.category === "Laptop"
    );
    const filteredWatchProducts = products.filter(
      (item) => item.category === "Watch"
    );
    // const filteredWirelessProducts = products.filter(
    //   (item) => item.category === "wireless"
    // );
    const filteredOtherProducts = products.filter(
      (item) => item.category === "Other"
    );
    setMobilePhones(filteredMobilePhones);
    setLaptopProducts(filteredLaptopProducts);
    setWatchProducts(filteredWatchProducts);
    // setWirelessProducts(filteredWirelessProducts);
    setOtherProducts(filteredOtherProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  New & Pre-owned products in {month}!
                </p>
                <h2>
                  Discover, Connect & Elevate with Our Range of Cutting-Edge
                  Devices
                </h2>
                <p>
                  Indulge in a tech-lover's paradise. Unveil a world of
                  innovation and possibilities with our captivating selection of
                  new & pre-owned Mobile Phones, Laptops, & a host of coveted
                  devices. Seamlessly integrated into your experience is the
                  ease of complimentary delivery.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products" id="laptops">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Mobile Phones</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={mobilePhones} />
            )}
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Laptops</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={laptopProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">IPhone X 256GB</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterimg} alt="Counter" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Watches</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={watchProducts} />
            )}
            {
              // loading ? <h5 className="fw-bold">Loading...</h5> : <ProductsList data={wirelessProducts} />
            }
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Others</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={otherProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

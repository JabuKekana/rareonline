import React from "react";
import { Container, Row} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <CommonSection title="About Us" />
      <section className='about__section'>
        <Container>
          <Row>
              <p>
                Welcome to Rare Online, your esteemed destination for a
                distinguished selection of premium tech products. Established on
                February 24, 2020, and registered under the name 'RARE ENT'
                while trading as Rare Online, we take immense pride in offering
                a curated range of both new and pre-owned items. Our commitment
                to quality, innovation, and customer satisfaction sets us apart
                in the digital landscape.
              </p>
              <p>
                At Rare Online, we understand the value of a seamless shopping
                experience. Making use of courier/delivery services from renowned delivery 
                courier/delivery companies such as PostNet and Courier Guy, we ensure prompt and reliable
                product deliveries right to your doorstep. Our dedication to
                exceptional service extends to every aspect of your journey with
                us.
              </p>
              <p>
                We recognize that security and peace of mind are paramount in
                online transactions. That's why we make use of trusted payment
                services like Payfast, a leading payment gateway in the
                industry. With Payfast, you can confidently complete your
                transactions knowing that your financial information is
                safeguarded, and your transactions are handled with the utmost
                professionalism.
              </p>
              <p>
                Your satisfaction is our utmost priority. Whether you're
                exploring our range of cutting-edge mobile phones or considering
                our pre-owned laptop options, we're dedicated to providing a
                secure, convenient, and gratifying shopping experience. From
                secure payments to seamless deliveries, we ensure every step of
                your interaction with Rare Online reflects our unwavering
                commitment to excellence.
              </p>
              <p>
                For inquiries, assistance, or further information, our customer
                support team is at your service. Feel free to reach out to us at
                info@rareonline.com; Thank you for choosing Rare Online.
              </p>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;

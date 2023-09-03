import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [processing, setProcessing] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const placeOrder = async () => {
    try {
      const entityId = "8ac7a4c98a435d1f018a45e5202b02bb"; 
      const username = "5096bd8bd6e34ba5863420c8c38e1325"; 
      const password = "9mjHlRJ49gyMrQhSjqUOGmiuIBB3qOsU"; 

      const credentials = `${username}:${password}`;
      const encodedCredentials = btoa(credentials);

      const authorizationHeader = `Entity ${entityId}:${encodedCredentials}`;

      const apiPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        streetAddress: formData.streetAddress,
        city: formData.city,
        postalCode: formData.postalCode,
        country: formData.country,
      };

      setProcessing(true); // Start processing

      const response = await axios.post(
        "https://testapi-v2.peachpayments.com",
        apiPayload,
        {
          headers: {
            Authorization: authorizationHeader,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        // Order placed successfully
        setOrderResult("Order placed successfully");
      } else {
        // Failed to place the order
        setOrderResult("Failed to place the order");
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("An error occurred", error);
      setOrderResult("An error occurred");
    } finally {
      setProcessing(false); // Stop processing
    }
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name(s)"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} Items</span>
                </h6>
                <h6>
                  Subtotal: <span>R{totalAmount}</span>
                </h6>
                <h6>
                  <span>Delivery:</span>
                  <span>R0</span>
                </h6>
                <h4>
                  Total Cost: <span>R{totalAmount}</span>
                </h4>
              </div>
              <button
                className="buy__btn auth__btn place__order-btn w-100"
                onClick={placeOrder}
                disabled={processing}
              >
                {processing ? "Processing..." : "Place an order"}
              </button>
              {orderResult && (
                <p className={orderResult === "Order placed successfully" ? "text-success" : "text-danger"}>
                  {orderResult}
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

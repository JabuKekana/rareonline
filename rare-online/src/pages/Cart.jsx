import React, { useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TermsAndConditionsModal from "../components/UI/TermsAndConditionsModal";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const dispatch = useDispatch();

  const deleteProduct = (itemId) => {
    dispatch(cartActions.deleteItem(itemId));
  };

  const handleCheckoutClick = () => {
    console.log("Handle Checkout Click"); // Check if this log message appears
    toggleModal();
  };

  const acceptTermsAndCheckout = () => {
    // Perform any actions needed before checkout
    // For example, you could update the Redux store or perform API calls

    // After performing necessary actions, navigate to the checkout page
    const checkoutPath = "/checkout"; // Define the checkout path
    window.location.href = checkoutPath; // Use window.location.href for navigation
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No Item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal<span className="fs-4 fw-bold">R{totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Checkout to proceed to Secure Payment Gateway.
              </p>

              <button className="buy__btn w-100" onClick={handleCheckoutClick}>
                Checkout
              </button>
              <button className="buy__btn w-100 mt-3">
                <Link to="/shop">Continue Shopping</Link>
              </button>
              {/* Render the modal */}
              <TermsAndConditionsModal
                isOpen={isModalOpen}
                toggle={toggleModal}
                onAccept={acceptTermsAndCheckout}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="Item" />
      </td>
      <td>{item.productName}</td>
      <td>R{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;

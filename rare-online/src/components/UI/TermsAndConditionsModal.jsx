import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Link } from "react-router-dom";

const TermsAndConditionsModal = ({ isOpen, toggle, onAccept }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Terms and Conditions</ModalHeader>
      <ModalBody>
        <p>
          We want you to have the best shopping experience at Rare Online. Our refund policy ensures fairness and transparency in dealing with refund requests. Please carefully review the following terms before proceeding: 
        </p><br/>
        <ol>
          <li>
            <strong>Refund Eligibility:</strong> You are eligible for a refund if you request one within 72 hours of purchase. Refunds will not be processed after this period.
          </li>
          <li>
            <strong>Dissatisfaction Refunds:</strong> If you are unsatisfied with your product, you can request a refund within 72 hours. We strive to process such refunds promptly.
          </li>
          <li>
            <strong>Faulty Product Refunds:</strong> We will provide a refund for products deemed faulty. Contact us with the relevant details, and we will assist you in processing the refund.
          </li>
          <li>
            <strong>Non-Refundable Damages:</strong> Damaged products caused by mishandling or negligence are not eligible for a refund.
          </li>
          <li>
            <strong>Deduction for Refunds:</strong> A 2.5% deduction applies to cover delivery charges, bank fees, and administrative costs. After receipt of the returned product(s), the remaining amount will be refunded.
          </li>
          <li>
            <strong>Exchange Option:</strong> If you're dissatisfied with your purchase, you may request a different product from our website.
          </li>
          <li>
            <strong>Same or Lower Price:</strong> Exchanges are available for products of the same or lower price. If the chosen product is of lower value, a 1.5% deduction covers delivery, service, and bank charges.
          </li>
          <li>
            <strong>Exchange Details:</strong> In the event of an exchange for a lower-priced product, the remaining amount will be refunded after a 1.5% deduction.
          </li>
          <li>
            <strong>Exchange for Higher-Priced Product:</strong> If you wish to exchange your product for a higher-priced item, you will need to pay the price difference. The exchange will proceed once the top-up payment is received.
          </li>
          <li>
            <strong>Refund Processing Time:</strong> Please allow 3 to 7 days for the refund to be processed. Keep in mind that the actual refund may take additional time depending on your bank or payment method.
          </li>
        </ol>
        <p>
          We value your satisfaction and aim to provide a smooth refund process. For any questions or assistance, please contact us at: info@raredigital.co.za
        </p>
        <p>
          Thank you for choosing Rare Online.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}>
          Decline
        </Button>
        <Link to="/checkout">
    <Button color="primary">
      Accept Terms
    </Button>
  </Link>
      </ModalFooter>
    </Modal>
  );
};

export default TermsAndConditionsModal;

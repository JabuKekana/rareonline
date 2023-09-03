import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/about.css";

const Info = () => {
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions / Privacy Policy</title>
      </Helmet>
      <CommonSection title="About Us" />
      <section className="about__section">
        <Container>
          <Row>
            <h2>TERMS & CONDITIONS</h2>
            <h4>
              Please read these Terms & Conditions ("Terms") carefully before
              using our website ("us," "we," or "our").
            </h4>
            <p>
              1. Acceptance of Terms By accessing and using our website, you
              agree to these Terms and all applicable laws and regulations. If
              you do not agree with these Terms, please do not use our website.
            </p>
            <p>
              2. Use of Content All content on this website is for general
              informational purposes only. We reserve the right to modify,
              update, or remove content without prior notice.
            </p>
            <p>
              3. Products and Services Our website may offer products and
              services for sale. Prices and availability are subject to change
              without notice. We make no warranties regarding the accuracy of
              product descriptions or availability.
            </p>
            <p>
              4. Privacy Policy Your use of our website is also governed by our
              Privacy Policy, which outlines how we collect, use, and protect
              your personal information.
            </p>
            <p>
              5. User Conduct You agree not to engage in any activity that
              disrupts or interferes with our website, its content, or its
              functionality. You also agree not to access or attempt to access
              any restricted areas of our website.
            </p>
            <p>
              6. Intellectual Property All intellectual property rights,
              including trademarks and copyrights, on this website are owned by
              us or our licensors. You may not use, reproduce, or distribute our
              intellectual property without our prior written consent.
            </p>
            <p>
              7. Limitation of Liability We are not liable for any damages
              arising from your use or inability to use our website. This
              includes direct, indirect, incidental, consequential, or punitive
              damages.
            </p>
            <p>
              8. Governing Law These Terms are governed by and construed in
              accordance with the laws of South Africa. Any disputes arising
              from these Terms will be subject to the exclusive jurisdiction of
              the courts in South Africa.
            </p>
            <p>
              9. Changes to Terms We may update these Terms at any time without
              notice. Your continued use of our website after such modifications
              constitutes your acceptance of the revised Terms.
            </p>
            <p>
              Contact Us: If you have any questions or concerns about these
              Terms, please contact us at info@rareonline.co.za 17 August 2023
            </p>
          </Row>
        </Container>
      </section>
      <section className="about__section">
        <Container>
          <Row>
            <h2>PRIVACY POLICY</h2>
            <h4>
              This Privacy Policy ("Policy") explains how we collect, use, and
              protect your personal information when you use our website ("us,"
              "we," or "our").
            </h4>
            <p>
              1. Information Collection We may collect personal information,
              including but not limited to your name, email address, phone
              number, and address, when you use our website, subscribe to our
              newsletter, or make a purchase.
            </p>
            <p>
              2. Use of Information We use your personal information to provide
              products and services, process orders, communicate with you, and
              improve our website. We may also use your information to send you
              promotional offers and updates.
            </p>
            <p>
              3. Data Security We implement security measures to protect your
              personal information from unauthorized access, disclosure, or
              alteration. However, no data transmission over the internet is
              guaranteed to be completely secure.
            </p>
            <p>
              4. Cookies and Tracking We use cookies and similar tracking
              technologies to enhance your experience on our website. You can
              adjust your browser settings to control or disable cookies.
            </p>
            <p>
              5. Third Parties We may share your personal information with
              trusted third parties to provide services on our behalf, such as
              payment processing and delivery. We do not sell or rent your
              personal information to third parties for their marketing
              purposes.
            </p>
            <p>
              6. Children's Privacy Our website is not intended for children
              under the age of 13. We do not knowingly collect personal
              information from children.
            </p>
            <p>
              7. Changes to Policy We may update this Policy to reflect changes
              in our practices or legal requirements. We will notify you of any
              significant changes via by posting a notice on our website.
            </p>
            <p>
              Contact Us: If you have any questions or concerns about this
              Policy, please contact us at info@rareonline.co.za <br />
              17 August 2023
            </p>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <h2>REFUND POLICY</h2>
            <h4>
              We want you to have the best shopping experience at Rare Online.
              Our refund policy ensures fairness and transparency in dealing
              with refund requests. Please carefully review the following terms.
            </h4>
            <p>
              1. Refund Eligibility: You are eligible for a refund if you
              request one within 72 hours of purchase. Refunds will not be
              processed after this period. .
            </p>
            <p>
              2. If you are unsatisfied with your product, you can request a
              refund within 72 hours. We strive to process such refunds
              promptly.
            </p>
            <p>
              3. Faulty Product Refunds: We will provide a refund for products
              deemed faulty. Contact us with the relevant details, and we will
              assist you in processing the refund.
            </p>
            <p>
              4. Non-Refundable Damages: Damaged products caused by mishandling
              or negligence are not eligible for a refund.
            </p>
            <p>
              5. Deduction for Refunds: A 2.5% deduction applies to cover
              delivery charges, bank fees, and administrative costs. After
              receipt of the returned product(s), the remaining amount will be
              refunded.
            </p>
            <p>
              6. Exchange Option: If you're dissatisfied with your purchase, you
              may request a different product from our website.
            </p>
            <p>
              7. Same or Lower Price: Exchanges are available for products of
              the same or lower price. If the chosen product is of lower value,
              a 1.5% deduction covers delivery, service, and bank charges.
            </p>
            <p>
              8. Exchange Details: In the event of an exchange for a
              lower-priced product, the remaining amount will be refunded after
              a 1.5% deduction.
            </p>
            <p>
              9. Exchange for Higher-Priced Product: If you wish to exchange
              your product for a higher-priced item, you will need to pay the
              price difference. The exchange will proceed once the top-up
              payment is received.
            </p>
            <p>
              10. Refund Processing Time: Please allow 3 to 7 days for the
              refund to be processed. Keep in mind that the actual refund may
              take additional time depending on your bank or payment method.
            </p>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Info;

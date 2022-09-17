import React from "react";
import { Container } from "react-bootstrap";
import footer1 from "../assets/appleLogo.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer2.png";
import footer4 from "../assets/footer2.png";

const Footer = () => {
  return (
    <div className="footer ">
      <Container className="d-flex justify-content-center align-items-center h-100 ">
        <div className="footer__images d-flex align-items-center justify-content-between m-auto">
          <div>
            <img src={footer1}></img>
          </div>
          <div>
            <img src={footer2}></img>
          </div>
          <div>
            <img src={footer3}></img>
          </div>
          <div>
            <img src={footer4}></img>
          </div>
        </div>
        <div className="footer_copyright">Copyright © 2022 - All rights reserved</div>
      </Container>
    </div>
  );
};

export default Footer;

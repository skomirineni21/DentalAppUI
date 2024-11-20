
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../Main_images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    let y = window.scrollY;
    if (y > 250) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div
      className="navbar-m"
      style={{
        position: scroll ? "fixed" : "relative",
      }}
    >
      <Container>
        <div className="first-row">
          <Row className="d-flex align-items-center">
            <Col md="3" className="logo" sm="3" xs="12">
              <Link to="/">
                <img src={Logo} alt="Dr. Naveen's Dental Clinic" />
              </Link>
              <FontAwesomeIcon
                icon={faBars}
                className="bar"
                onClick={() => setShow((prev) => !prev)}
              />
            </Col>          
            <Col md="3" className="address d-none d-md-flex" sm="3" xs="12">
              <a href="https://www.google.com/maps/place/Dr.+Naveen's+Dental+Clinic/@17.5025629,78.5110089,17z/data=!4m14!1m7!3m6!1s0x3bcb9bcb273a37bf:0xd610927f193f92cf!2sDr.+Naveen's+Dental+Clinic!8m2!3d17.5025578!4d78.5135838!16s%2Fg%2F11s8pktdzk!3m5!1s0x3bcb9bcb273a37bf:0xd610927f193f92cf!8m2!3d17.5025578!4d78.5135838!16s%2Fg%2F11s8pktdzk?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">11-86/1, 1st floor, Opp: ICICI Bank <br />Alwal, Secunderabad, Telanaga</a>
            </Col>
            <Col md="3" className="contact d-none d-md-block" sm="3" xs="12">
              <div>
                <a href="tel:+918790297437">+91 8790 297 437</a>
              </div>
              <div>
                <a href="tel:+919000796953">+91 9000 796 953</a>
              </div>
            </Col>
            <Col
              md="2"
              className="socials"
              sm="12"
              xs="12"
              style={{
                top: show ? "228px" : "-100%",
              }}
            >
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://instagram.com/drnaveens_dental"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://facebook.com/drnaveensdental"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li> */}
                {/* <li className="list-inline-item">
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li> */}
              </ul>
            </Col>
          </Row>
        </div>
        <div className="second-row">
          <Row className="d-flex align-items-center">
            <Col
              md="5"
              className="nav"
              sm="12"
              xs="12"
              style={{
                top: show ? "79px" : "-100%",
              }}
            >
              <ul className="nav__list">
                <li className="nav__list_item">
                  <Link to="/about" className="nav__list_item_link">
                    About
                  </Link>
                </li>
                <li className="nav__list_item">
                  <Link to="/doctor" className="nav__list_item_link">
                    Doctor
                  </Link>
                </li>
                <li className="nav__list_item">
                  <Link to="/blog" className="nav__list_item_link">
                    Blog
                  </Link>
                </li>
                <li className="nav__list_item">
                  <Link to="/contact" className="nav__list_item_link">
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Navbar;

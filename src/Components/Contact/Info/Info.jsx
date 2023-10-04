import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./Info.scss";

const Info = () => {
  return (
    <div className="info">
      <Container>
        <Row>
          <Col md="12">
            <div className="info-child">
              <FontAwesomeIcon
                icon={faStreetView}
                className="info-child__icon"
              />
              <h3 className="info-child__title">Address</h3>
              <div className="info-child__content">
                <p>11-86/1, 1st floor, Opp: ICICI Bank</p>
                <p>Alwal, Secunderabad, Telanaga</p>
              </div>
            </div>
            <div className="info-child">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="info-child__icon"
              />
              <h3 className="info-child__title">Contact Info</h3>
              <div className="info-child__content">
                <p>Email : TEST@gmail.com</p>
                <p>Phone : +91-8790297437</p>
              </div>
            </div>
            <div className="info-child">
              <FontAwesomeIcon icon={faClock} className="info-child__icon" />
              <h3 className="info-child__title">Open Hour</h3>
              <div className="info-child__content">
                <p>Monday to Saturday : 10:00 AM – 8:00 PM</p>
                <p>Sundays on appointment</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;

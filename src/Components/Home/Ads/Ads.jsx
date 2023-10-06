import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./Ads.scss";

const Ads = () => {
    return (
        <div className="ads">
            <Container>
                <Row>
                    <Col md="12" xl="12" xs="12">
                        <h2>Get in touch with us today <a href="tel:+918790297437">+91 8790 297 437</a></h2>
                    </Col>
                </Row>
            </Container>    
        </div>
    )
}

export default Ads;
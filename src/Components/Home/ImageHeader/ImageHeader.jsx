import React from "react";
import { Container, Row } from "reactstrap";
import HeaderImg from "../../../Main_images/ImageHeader.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ImageHeader.scss";

const ImageHeader = () => {
  return (
    <div className="header">
      <Container>
        <Row className="header-row">
          <div>
            <LazyLoadImage
              alt="header-row_image"
              src={HeaderImg}
              effect="blur"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default ImageHeader;

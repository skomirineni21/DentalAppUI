import React from "react";
//import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import HeaderImg from "../../../Main_images/Image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Header.scss";

const Header = () => {
	return (
		<div className="header">
			<Container>
				<Row className="header-row">
					<Col md="6" className="headings">
						<p className="headings__p1">Welcome to Dr. Naveen’s Dental Clinic!</p>
						<p className="headings__p3">Creating Miles of Smiles</p>
						<p className="headings__p2">We're dedicated to providing you with quality treatment delivered by our team of highly qualified professionals. Your oral health and well-being are our top priorities, and we strive to offer the best dental care with great care and concern for our patients.</p>			
						{/*<Link className="headings__btn" to="/">Make Appointment</Link>*/}
					</Col>
					<Col md="6" className="header-row__img">
						<LazyLoadImage 
						alt="header-row_image"
						src={HeaderImg}
						effect="blur"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Header;
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Header/Header.css";


const Example = (props) => {
	return (
		<>
			{/* <Row style={{ background: "black", width: "100%", height: "800px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Col lg={4} xs={12} md={5} style={{ background: "red", height: "300px" }}>Item</Col>
				<Col lg={4} xs={12} md={5} style={{ background: "yellow", height: "300px" }}>Item</Col>
				<Col lg={4} md={5} className="r_block__blue" style={{ background: "blue", height: "300px" }}>Item</Col>
			</Row> */}
			<Container>
				<Row>
					<Col md={3} sm={6} xs={6}>This is the 1st column</Col>
					<Col md={3} sm={6} xs={6}>This is the 2nd column</Col>
					<Col md={3} sm={6} xs={6}>This is the 3rd column</Col>
					<Col md={3} sm={6} xs={6}>This is the 3rd column</Col>
				</Row>
			</Container>
		</>
	)
}

export default Example; 
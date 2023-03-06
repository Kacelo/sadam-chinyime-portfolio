import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Mywork from "./mywork/mywork";
import Card from "react-bootstrap/Card";
import MDBNNav from "./navbar/navbar";

function Landing() {
  return (
    <>
      <Row
        style={{
          margin: "0em 0 0 0",
          backgroundColor: "#14213d",
          padding: "5em 0",
          color: "white",
        }}
      >
        <Col style={{ margin: "3rem 0" }} sm={12} lg={6}>
          <h1>Hi! I'm Sadam Chinyime</h1>
          <h2>I'm a Graphic Designer & Business Consultant</h2>
        </Col>
        <Col sm={12} lg={6}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
              <Image
                src={require("../assets/profile.jpeg")}
                rounded
                style={{ width: "100%" }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ padding: "5em 0 10em", backgroundColor: "#ffb703" }}>
        {" "}
        <Col sm={12} lg={5}>
          <h1 style={{ margin: "3rem 0" }}>A Quick Background</h1>
        </Col>
        <Col sm={12} lg={5} style={{ padding: "0 3rem" }}>
          <Card style={{ width: "100%", margin: "2rem 0", padding: "0 " }}>
            <Card.Body style={{ margin: "3rem" }}>
              <Card.Title>I am based in</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                WINDHOEK, NA
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", margin: "inherit", padding: "0" }}>
            <Card.Body style={{ margin: "3rem" }}>
              <Card.Title>I studied at</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                UNIVERSITY OF NAMIBIA
              </Card.Subtitle>
              <Card.Text>Bachelor of Business Management</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", margin: "2rem 0", padding: "0 " }}>
            <Card.Body style={{ margin: "3rem" }}>
              <Card.Title>Worked at</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                CURRENTLY FREELANCING
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          margin: "0em 0 0",
          backgroundColor: "#14213d",
          padding: "5em 0 10em",
        }}
      >
        <h1
          style={{
            backgroundColor: "#14213d",
            color: "white",
            margin: "5rem 0",
          }}
        >
          Here's what I do
        </h1>

        <Col
          sm={12}
          lg={4}
          style={{
            backgroundColor: "#14213d",
            color: "white",
            padding: "0 3rem",
          }}
        >
          <Card style={{ margin: "2rem 0" }}>
            {" "}
            <ListGroup variant="flush" style={{ backgroundColor: "#14213d" }}>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                {" "}
                <h3>Graphic Design</h3>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                Posters & Flyers
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                T-Shirts
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                Logo Design
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col
          sm={12}
          lg={4}
          style={{
            backgroundColor: "#14213d",
            color: "white",
            padding: "0 3rem",
          }}
        >
          <Card style={{ margin: "2rem 0" }}>
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                <h3>Business Management</h3>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                Business Plan Drafting
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                Wealth and Capital management advice
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                Investment Portfolio Drafting
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col
          sm={12}
          lg={4}
          style={{
            backgroundColor: "#14213d",
            color: "white",
            padding: "0 3rem",
          }}
        >
          <Card style={{ margin: "2rem 0" }}>
            {" "}
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                <h3>Forex Trading</h3>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                Account Management with 50/50 profit sharing
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                Signal and Analysis
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#14213d", color: "white" }}
              >
                85% Accurate signals
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          margin: "0em 0 0 0",
          backgroundColor: "#",
          padding: "5em 0",
          color: "",
        }}
      >
        <h1>Lets Take a look at my Portfolio</h1>
        <Mywork />
      </Row>
    </>
  );
}

export default Landing;

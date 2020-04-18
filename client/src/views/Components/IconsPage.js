import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { iconsArray } from 'variables/Variables';
import {
  faWeb,
  faHand,
  faTransport,
  faGender,
  faFiles,
  faSpinner,
  faForms,
  faPayment,
  faChart,
  faCurrency,
  faText,
  faDirectional,
  faVideo,
  faBrand,
  faMedical,
} from 'variables/faVariables';

const IconsPage = () => {
  const faMap = (faToMap) => {
    return faToMap.map((prop, key) => {
      return (
        <Col md={3} sm={4} className="font-icon-container" key={key}>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <i className={prop} />
            {' ' + prop}
          </a>
        </Col>
      );
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>202 Awesome Stroke Icons</legend>
              </Card.Title>
              <Row className="all-icons">
                {iconsArray.map((prop, key) => {
                  return (
                    <Col lg={2} md={3} sm={4} xs={6} key={key}>
                      <div className="font-icon-detail">
                        <i className={prop} />
                        <input type="text" defaultValue={prop} />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>Font Awesome Icons</legend>
              </Card.Title>
              <Container fluid className="all-icons">
                <Row>
                  <Col md={12}>
                    <h5>Web Application Icons</h5>
                  </Col>
                  {faMap(faWeb)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Hand Icons</h5>
                  </Col>
                  {faMap(faHand)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Transportation Icons</h5>
                  </Col>
                  {faMap(faTransport)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Gender Icons</h5>
                  </Col>
                  {faMap(faGender)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>File Type Icons</h5>
                  </Col>
                  {faMap(faFiles)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Spinner Icons</h5>
                  </Col>
                  {faMap(faSpinner)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Form Control Icons</h5>
                  </Col>
                  {faMap(faForms)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Payment Icons</h5>
                  </Col>
                  {faMap(faPayment)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Chart Icons</h5>
                  </Col>
                  {faMap(faChart)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Currency Icons</h5>
                  </Col>
                  {faMap(faCurrency)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Text Editor Icons</h5>
                  </Col>
                  {faMap(faText)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Directional Icons</h5>
                  </Col>
                  {faMap(faDirectional)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Video Player Icons</h5>
                  </Col>
                  {faMap(faVideo)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Brand Icons</h5>
                  </Col>
                  {faMap(faBrand)}
                </Row>
                <Row>
                  <Col md={12}>
                    <h5>Medical Icons</h5>
                  </Col>
                  {faMap(faMedical)}
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IconsPage;

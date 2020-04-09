import React from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import Datetime from 'react-datetime';


const StdUI01 = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Form id="frmSearching">
                <Form.Group as={Row}>
                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1}>Basis Date <span className="star">*</span></Form.Label>
                  <Col md={1}> <Datetime
                    dateFormat="YYYY/MM/DD"
                    timeFormat={false}
                    inputProps={{ placeholder: 'From Date' }}
                    defaultValue={new Date()}
                  />
                  </Col>
                  <Col md={1}>
                    <Datetime
                      dateFormat="YYYY/MM/DD"
                      timeFormat={false}
                      inputProps={{ placeholder: 'To Date' }}
                      defaultValue={new Date()}
                    />
                  </Col>


                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>6-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>6-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>8-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>8-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>3-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>9-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>9-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>3-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StdUI01;

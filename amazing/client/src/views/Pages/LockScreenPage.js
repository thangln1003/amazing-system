import React from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '@core/components/CustomButton/CustomButton';
import avatar from 'assets/img/default-avatar.png';

const LockScreenPage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
          <form className="ng-untouched ng-pristine ng-valid">
            <div className="user-profile">
              <div className="author">
                <img alt="..." className="avatar" src={avatar} />
              </div>
              <h4>Tania Andrew</h4>
              <Form.Group>
                <FormControl type="password" placeholder="Enter Password" autoComplete="off" />
              </Form.Group>
              <Button wd neutral round variant="default">
                Unlock
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LockScreenPage;

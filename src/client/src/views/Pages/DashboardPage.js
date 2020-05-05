import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatsCard from '@core/components/Card/StatsCard';
import Button from '@core/components/CustomButton';
import { useDispatch } from 'react-redux';
import * as Actions from 'store/actions/core';

const DashboardPage = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(Actions.showNotification({ message: 'Hello, world! This is a toast message.' }));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Row>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          <Button fill onClick={clickHandler}>Show Notification</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;

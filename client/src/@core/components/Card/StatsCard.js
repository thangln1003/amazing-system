import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const StatsCard = (props) => {
  return (
    <div className="card card-stats">
      <div className="content">
        <Row>
          <Col sm={5}>
            <div className="icon-big text-center icon-warning">{props.bigIcon}</div>
          </Col>
          <Col sm={7}>
            <div className="numbers">
              <p>{props.statsText}</p>
              {props.statsValue}
            </div>
          </Col>
        </Row>
      </div>
      <Card.Footer>
        <div className="stats">
          {props.statsIcon} {props.statsIconText}
        </div>
      </Card.Footer>
    </div>
  );
};

export default StatsCard;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import { useTimeout } from '@core/hooks';

const SimpleLoading = (props) => {
  const [showLoading, setShowLoading] = useState(!props.delay);

  useTimeout(() => {
    setShowLoading(true);
  }, props.delay);

  if (!showLoading) {
    return null;
  }

  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

SimpleLoading.propTypes = {
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

SimpleLoading.defaultProps = {
  delay: false,
};

export default SimpleLoading;

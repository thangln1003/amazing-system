import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import { useTimeout } from '@core/hooks';

import styled from 'styled-components';

const Loading = styled.div`
  &.loading-mask,
  .loading-spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .loading-mask {
    z-index: 100;
  }

  .loading-spinner {
    z-index: 2;
  }

  .spinner-border {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    opacity: 0.8;
  }
`;

const SimpleLoading = (props) => {
  const { delay, ...rest } = props;
  // const [showLoading, setShowLoading] = useState(!delay);

  // useTimeout(() => {
  //   setShowLoading(true);
  // }, delay);

  return delay ? (
    <Loading className="loading-mask">
      <div className="loading-spinner">
        <Spinner animation="border" role="status" {...rest}>
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </Loading>
  ) : null;
};

SimpleLoading.propTypes = {
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

SimpleLoading.defaultProps = {
  delay: false,
};

export default SimpleLoading;

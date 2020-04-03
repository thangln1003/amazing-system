import React from 'react';
import { Button } from 'react-bootstrap';
// used to make this component's props into classes
import cx from 'classnames';
// used for making the props of this component to bool
import PropTypes from 'prop-types';

const CustomButton = (props) => {
  const {
    fill,
    simple,
    pullRight,
    block,
    wd,
    round,
    icon,
    neutral,
    twitter,
    facebook,
    google,
    linkedin,
    pinterest,
    youtube,
    tumblr,
    github,
    behance,
    dribbble,
    reddit,
    stumbleupon,
    ...rest
  } = props;

  const btnClasses = cx({
    'btn-fill': fill,
    'btn-simple': simple,
    'pull-right': pullRight,
    'btn-block': block,
    'btn-wd': wd,
    'btn-round': round,
    'btn-icon': icon,
    'btn-neutral': neutral,
    'btn-social btn-twitter': twitter,
    'btn-social btn-facebook': facebook,
    'btn-social btn-google': google,
    'btn-social btn-linkedin': linkedin,
    'btn-social btn-pinterest': pinterest,
    'btn-social btn-youtube': youtube,
    'btn-social btn-tumblr': tumblr,
    'btn-social btn-github': github,
    'btn-social btn-behance': behance,
    'btn-social btn-dribbble': dribbble,
    'btn-social btn-reddit': reddit,
    'btn-social btn-stumbleupon': stumbleupon,
  });

  return <Button className={btnClasses} {...rest} />;
};

export default CustomButton;

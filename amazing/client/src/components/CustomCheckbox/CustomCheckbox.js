import React, { useState } from 'react';

const CustomCheckbox = (props) => {
  const { isChecked, number, label, inline, ...rest } = props;
  const classes = inline !== undefined ? 'checkbox checkbox-inline' : 'checkbox';
  const [state, setState] = useState({
    isChecked: isChecked ? true : false,
  });

  const handleClick = () => {
    setState({ isChecked: !state.isChecked });
  };

  return (
    <div className={classes}>
      <input id={number} type="checkbox" onChange={handleClick} checked={state.isChecked} {...rest} />
      <label htmlFor={number}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;

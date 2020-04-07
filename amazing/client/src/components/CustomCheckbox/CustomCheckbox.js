import React from 'react';
import { Field } from 'formik';

const CustomCheckbox = (props) => {
  const { name, label, inline, ...rest } = props;
  const classes = inline !== undefined ? 'checkbox checkbox-inline' : 'checkbox';

  return (
    <div className={classes}>
      <Field type="checkbox" name={name} {...rest} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;

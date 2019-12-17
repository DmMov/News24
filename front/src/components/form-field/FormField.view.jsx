import React from 'react';

import './FormField.style';

export const FormFieldView = ({ type = "text", title, value, onChange, placeholder }) =>
  <span className="form-field dg">
    <span className="form-field-title">{title}</span>
    <input 
      type={type} 
      value={value} 
      name={Object.keys({ name })[0]} 
      className="input form-field-input"
      onChange={onChange}
      placeholder={placeholder}
    />
  </span>
import React from 'react';

const SelectLabel = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        style={{ borderColor: props.errMessage ? 'red' : 'initial' }}
      >
        <option value="" disabled hidden>
          {props.placeholderText}
        </option>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {props.errMessage && <p style={{ color: 'red' }}>{props.errMessage}</p>}
    </div>
  );
};

export default SelectLabel;

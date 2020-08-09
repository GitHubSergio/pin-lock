// Imports
import React from 'react';

// Interfaces
import { IInputProps } from '../../interfaces/IProps';

const InputField: React.FC<IInputProps> = ({
  type,
  placeholder,
  name,
  value,
  disabled,
  onChange,
  style,
}): JSX.Element => (
  <input
    className={style}
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    disabled={disabled}
    onChange={onChange}
  />
);

export default InputField;

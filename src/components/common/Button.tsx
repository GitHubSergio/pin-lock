// Imports
import React from 'react';

// Interfaces
import { IButtonProps } from '../../interfaces/IProps';

const Button: React.FC<IButtonProps> = ({
  label,
  disabled,
  action,
  style,
}): JSX.Element => (
  <button value={label} disabled={disabled} onClick={action} className={style}>
    {label}
  </button>
);

export default Button;

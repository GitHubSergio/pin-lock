// Imports
import React from 'react';

// Interfaces
import { IHeaderProps } from '../../interfaces/IProps';

const Header: React.FC<IHeaderProps> = ({ header, style }): JSX.Element => (
  <h1 className={style}>{header}</h1>
);

export default Header;

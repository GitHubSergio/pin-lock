// Imports
import React from 'react';

// Interfaces
import { IContainer } from '../../interfaces/IProps';

const Container: React.FC<IContainer> = ({ children, style }): JSX.Element => {
  return <div className={style}>{children}</div>;
};

export default Container;

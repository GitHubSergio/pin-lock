// Imports
import React from 'react';

// Interfaces
import { ICopy } from '../../interfaces/IProps';

const Copy: React.FC<ICopy> = ({ copy, style }): JSX.Element => (
  <span className={style}>{copy}</span>
);

export default Copy;

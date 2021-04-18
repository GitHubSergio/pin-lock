// Imports
import React from 'react';

// Interfaces
import { ICopy } from '../../interfaces/IProps';

const Copy: React.FC<ICopy> = ({ copy, style, ariaLabel }): JSX.Element => (
  <span aria-label={ariaLabel} className={style}>{copy}</span>
);

export default Copy;

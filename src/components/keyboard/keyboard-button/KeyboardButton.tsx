// Imports
import React from 'react';

// Interfaces
import { IKeyboardButton } from '../../../interfaces/IProps';

// Styles
import styles from './KeyboardButton.module.css';

// Components
import Container from '../../common/Container';
import Button from '../../common/Button';

// TODO - add comments to the files
const KeyboardButton: React.FC<IKeyboardButton> = ({
  label,
  disabled,
  action,
}): JSX.Element => {
  const isDisabled: boolean =
    disabled && label !== 'Clear' && label !== 'Unlock';
  const isUnlockButtonDisabled: boolean = !disabled && label === 'Unlock';

  return (
    <Container style={styles.container}>
      <Button
        label={label}
        value={label}
        action={action}
        style={styles.button}
        disabled={isDisabled || isUnlockButtonDisabled}
      />
    </Container>
  );
};

export default KeyboardButton;

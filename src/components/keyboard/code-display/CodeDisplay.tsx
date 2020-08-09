// Imports
import React from 'react';

// Interfaces
import { ICodeDisplayProps } from '../../../interfaces/IProps';

// Styles
import styles from './CodeDisplay.module.css';

// Components
import Container from '../../common/Container';
import Copy from '../../common/Copy';

const CodeDisplay: React.FC<ICodeDisplayProps> = ({
  copy,
  numberOfAttempts,
}): JSX.Element => (
  <Container style={styles.container}>
    <Container style={styles.keyboardCodeContainer}>
      <Copy copy="KEYBOARD" />
      <Copy copy={copy} />
    </Container>
    <Container style={styles.attemptsContainer}>
      <Copy copy="ATTEMPTS LEFT" />
      <Copy copy={numberOfAttempts} />
    </Container>
  </Container>
);

export default CodeDisplay;

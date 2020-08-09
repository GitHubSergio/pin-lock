// Imports
import React, { useState } from 'react';
import classnames from 'classnames';
import { copies } from '../constants/constants';

// Styles
import styles from './App.module.css';

// Components
import Container from '../components/common/Container';
import Keyboard from '../components/keyboard/Keyboard';
import Header from '../components/common/Header';
import Copy from '../components/common/Copy';
import Button from '../components/common/Button';

const App: React.FC = (): JSX.Element => {
  const [unlockState, setUnLockState] = useState<boolean>(false);
  const [tooManyAttemptsState, setTooManyAttempts] = useState<boolean>(false);
  const { lockedCopy, unlockedCopy, tooManyAttemptsCopy } = copies;
  const title = unlockState ? unlockedCopy : lockedCopy;
  const classNames = classnames(
    { [styles.titleUnlocked]: unlockState },
    { [styles.titleLocked]: tooManyAttemptsState },
  );

  const restart = (): void => {
    setUnLockState(false);
    setTooManyAttempts(false);
  };

  return (
    <Container style={styles.App}>
      <Header header={title} style={classNames} />
      {!unlockState && !tooManyAttemptsState ? (
        <Keyboard
          setUnLockState={setUnLockState}
          setTooManyAttempts={setTooManyAttempts}
        />
      ) : (
        <>
          {tooManyAttemptsState && (
            <Copy copy={tooManyAttemptsCopy} style={classNames} />
          )}
          <Button style={styles.button} label="Restart" action={restart} />
        </>
      )}
    </Container>
  );
};

export default App;

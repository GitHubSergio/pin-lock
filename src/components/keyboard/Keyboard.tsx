// Imports
import React, { useEffect, useState } from 'react';
import { keyboardButtons, copies } from '../../constants/constants';

// Interfaces
import { IKeyboardProps } from '../../interfaces/IProps';

// Hooks
import {
  useInput,
  useKeyboard,
  useAttempts,
  useCheckCombination,
  useDisableInputs,
} from '../../hooks/customHooks';

// Styles
import styles from './Keyboard.module.css';

// Components
import Container from '../common/Container';
import KeyboardButton from './keyboard-button/KeyboardButton';
import CodeDisplay from './code-display/CodeDisplay';
import Copy from '../common/Copy';
import InputField from '../common/InputField';

const Keyboard: React.FC<IKeyboardProps> = ({
  setUnLockState,
  setTooManyAttempts,
}): JSX.Element => {
  const [input, setInput, handleInputChange] = useInput();
  const [keyboardDigits, setKeyboardDigit, handleButtonClick] = useKeyboard();
  const [numberOfAttempts, handleNumberOfAttempts] = useAttempts();
  const [message, setMessage] = useState<string>('');
  const combination = useCheckCombination(input, keyboardDigits);
  const disabled = useDisableInputs(input, keyboardDigits);
  const { correctCombination, incorrectEntryCopy } = copies;

  useEffect(() => {
    if (numberOfAttempts === 0) {
      setTooManyAttempts(true);
    }
  }, [numberOfAttempts, setTooManyAttempts]);

  const handleKeyboard = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    handleButtonClick(event);
    message && setMessage('');
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    message && setMessage('');
  };

  const handleClearClick = (): void => {
    setKeyboardDigit([]);
    setInput('');
  };

  const handleOnUnlockClick = (): void => {
    handleNumberOfAttempts();
    numberOfAttempts >= 0 && combination && setUnLockState(true);
    if (numberOfAttempts >= 0 && !combination) {
      handleClearClick();
      setMessage(incorrectEntryCopy);
    }
  };

  const handleClicks = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    const { value } = event.target as HTMLButtonElement;
    switch (value) {
      case 'Clear':
        return handleClearClick();
      case 'Unlock':
        return handleOnUnlockClick();

      default:
        return handleKeyboard(event);
    }
  };

  return (
    <>
      <Container style={styles.codeDisplayContainer}>
        <CodeDisplay
          copy={keyboardDigits.join('')}
          numberOfAttempts={numberOfAttempts.toString()}
        />
        <Copy copy={`code: ${correctCombination}`} style={styles.code} />
        {message && <Copy copy={message} style={styles.incorrectEntry} />}
      </Container>
      <Container style={styles.container}>
        {keyboardButtons.map(
          (btn): JSX.Element => (
            <KeyboardButton
              key={btn.id}
              label={btn.label}
              disabled={disabled}
              action={handleClicks}
            />
          ),
        )}
      </Container>
      <InputField
        type="text"
        placeholder="Enter Code"
        style={styles.input}
        name="input-code"
        value={input}
        disabled={disabled}
        onChange={handleInput}
      />
    </>
  );
};

export default Keyboard;

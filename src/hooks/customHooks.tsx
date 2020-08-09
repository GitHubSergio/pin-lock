// Imports
import React, { useEffect, useState } from 'react';
import { copies } from '../constants/constants';

// INPUT
type TInputEvent = React.ChangeEvent<HTMLInputElement>;
type TUseInput = [string, (arg: string) => string, (arg: TInputEvent) => void];

export const useInput = () => {
  const [input, setInput] = useState<string>('');
  const handleInputChange = (event: TInputEvent): void => {
    const { value } = event.target as HTMLInputElement;
    const regEx = /^[1-9]\d*\.?\d*$/;
    if (value === '' || regEx.test(value)) {
      setInput(value);
    }
  };
  return [input, setInput, handleInputChange] as TUseInput;
};

// KEYBOARD
type TMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type TUseKeyboard = [
  string[],
  (arg: string[]) => string[],
  (event: TMouseEvent) => void
];

export const useKeyboard = () => {
  const [keyboardDigits, setKeyboardDigit] = useState<string[]>([]);
  const handleButtonClick = (event: TMouseEvent): void => {
    const { value } = event.target as HTMLButtonElement;
    setKeyboardDigit([...keyboardDigits, value]);
  };
  return [keyboardDigits, setKeyboardDigit, handleButtonClick] as TUseKeyboard;
};

export const useDisableInputs = (
  inputValue: string,
  keyboardValue: string[],
): boolean => {
  const [disabled, setDisabled] = useState<boolean>(false);
  useEffect(() => {
    inputValue.length === 4 || keyboardValue.length === 4
      ? setDisabled(true)
      : setDisabled(false);
  }, [inputValue.length, keyboardValue.length]);
  return disabled;
};

// ATTEMPTS
type TUseAttempts = [number, () => void];

export const useAttempts = () => {
  const [numberOfAttempts, setNumberOfAttempts] = useState<number>(3);
  const handleNumberOfAttempts = (): void =>
    setNumberOfAttempts((prevState) => prevState - 1);
  return [numberOfAttempts, handleNumberOfAttempts] as TUseAttempts;
};

// LOCK / UNLOCK STATE
export const useCheckCombination = (
  inputValue: string,
  keyboardValue: string[],
): boolean => {
  const [combination, setCombination] = useState<boolean>(false);
  const { correctCombination } = copies;
  useEffect(() => {
    const fieldCode: boolean = inputValue.length === 4;
    const keyboardCode: boolean = keyboardValue.length === 4;
    if (fieldCode) inputValue === correctCombination && setCombination(true);
    if (keyboardCode)
      keyboardValue.join('') === correctCombination && setCombination(true);
  }, [correctCombination, inputValue, keyboardValue]);

  return combination;
};

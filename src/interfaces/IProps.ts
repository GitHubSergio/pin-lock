// Imports
import React from 'react';

export interface IContainer {
  children: React.ReactNode;
  style: string;
}

export interface IButtonProps {
  label: string;
  value?: string;
  [rest: string]: any;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: string;
}

export interface IInputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style: string;
}

export interface ICopy {
  copy: string;
  style?: string;
  ariaLabel?: string;
}

export interface IKeyboardProps {
  setUnLockState: React.Dispatch<React.SetStateAction<boolean>>;
  setTooManyAttempts: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IKeyboardButton {
  label: string;
  disabled: boolean;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IHeaderProps {
  header: string;
  style?: string;
}

export interface ICodeDisplayProps extends ICopy {
  numberOfAttempts: string;
}

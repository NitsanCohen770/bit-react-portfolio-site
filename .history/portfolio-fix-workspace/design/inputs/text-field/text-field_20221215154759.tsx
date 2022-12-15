import React from 'react';
import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material';

export type TextFieldProps = {
} & MUITextFieldProps;

export function TextField(props: TextFieldProps) {
  return (
    <MUITextField
      {...props && { ...props }} // I don't understand this line. why not just {...props}?
    />
  );
}
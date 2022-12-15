import { ToggleButtonGroup, ToggleButton as MuiToggleButton } from '@mui/material';
import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { isNull } from 'util';

export type ToggleButtonOption = {
  value: string;
  label: React.ReactNode;
}

export type ToggleButtonProps = {
  /**
   * The options to display in the toggle button.
   */
  options: ToggleButtonOption[];

  /**
   * the callback function to be called when an option is selected.
   * @param value the value of the selected option
   */
  onClick: (value: string) => void;

  /**
   * the value of the selected option
   */
  value?: string;
};

export function ToggleButton({ options, onClick, value }: ToggleButtonProps) {
  const [option, setOption] = useState<string>(value || options[0]?.value);

  const handleOptionChange = useCallback((event: React.MouseEvent<HTMLElement>, newOption: string) => {
    if (newOption && !isNull(newOption)) {
      setOption(newOption);
      onClick(newOption);
    }
  }, [onClick]);

  return (
    <ToggleButtonGroup
      exclusive
      value={option}
      onChange={handleOptionChange}
    >
      {options.map((option) => (
        <MuiToggleButton key={option.value} value={option.value}>
          {option.label}
        </MuiToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

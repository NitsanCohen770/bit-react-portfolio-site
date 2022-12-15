import CloseOutlined from '@mui/icons-material/CloseOutlined';
import React from 'react';
import { TextIcon } from './text-icon';

export const BasicTextIcon = () => {
  return (
    <TextIcon
      icon={<CloseOutlined />}
      text='Bit.dev'
      fontSize={16}
      fontWeight={500}
    />
  );
}

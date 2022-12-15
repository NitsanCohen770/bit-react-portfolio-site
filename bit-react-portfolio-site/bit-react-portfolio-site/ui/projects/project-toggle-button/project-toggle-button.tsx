import { ToggleButton } from '@enlear/bit-react-portfolio-site-design-system.inputs.toggle-button';
import { TextIcon } from '@enlear/bit-react-portfolio-site-design-system.widgets.text-icon';
import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from 'react';
import { ProjectKind } from '@enlear/bit-react-portfolio-site.entities.project';

const options = [
  {
    value: 'component-based', label: <TextIcon
      icon={<GridViewIcon />}
      text="Component-based"
      fontSize={14}
      fontWeight={400}
      iconPosition="left"
    />
  },
  {
    value: 'monolithic', label: <TextIcon
      icon={<FormatListBulletedIcon />}
      text="Monolithic"
      fontSize={14}
      fontWeight={400}
      iconPosition="left"
    />
  }
]

export type ProjectToggleButtonProps = {
  /**
   * the callback function to be called when an option is selected
   * @param value the value of the selected option
   */
  onClick: (value: ProjectKind) => void;

  /**
   * the value of the selected option
   */
  value?: ProjectKind;
};

export function ProjectToggleButton({ onClick, value }: ProjectToggleButtonProps) {
  const [stateValue, setStateValue] = useState<ProjectKind>(value || 'component-based');
  return (
    <div>
      <ToggleButton
        options={options}
        value={stateValue}
        onClick={(value) => onClick(value as ProjectKind)}
      />
    </div>
  );
}

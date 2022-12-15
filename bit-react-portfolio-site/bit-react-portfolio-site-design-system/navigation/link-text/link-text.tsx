import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { Link } from '@mui/material';
import { TextIcon } from '@enlear/bit-react-portfolio-site-design-system.widgets.text-icon';

export type LinkTextProps = {

  /**
   * text to be rendered in the link
   */
  linkText: string;

  /**
    * the font size of the link text
  */
  fontSize?: number;

  /**
   * the font weight of the link text
   */
  fontWeight?: number;

  /**
   * the size of the icon
   */
  iconSize?: 'small' | 'medium' | 'large' | 'inherit' | undefined;

  /**
   * the url to be linked to
   */
  url: string

  /**
   * the color
   */
  color?: 'primary' | 'secondary';
};

export function LinkText({ url, linkText, iconSize = "medium", fontWeight = 400, fontSize = 16, color = 'primary' }: LinkTextProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <Link
      href={url}
      target="_blank"
      underline="none"
      sx={{
        color: (theme) => theme.palette.text[color],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TextIcon
        icon={<ArrowForwardIcon
          fontSize={iconSize}
          sx={{
            transition: 'all 0.3s ease-in-out',
            color: 'inherit',
            ...hovered && { transform: 'translateX(5px)' }
          }} />}
        text={linkText}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </Link>
  );
}

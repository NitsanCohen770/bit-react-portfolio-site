import React, { ReactNode } from 'react';

export enum MarginType {
  SMALL = "12px",
  MEDIUM = "24px",
  LARGE = "56px",
  EXTRA_LARGE = "96px",
} // Maybe it should be part of the theme?

export type MarginProps = {
  /**
   * the children to be affected by the margin
   */
  children?: ReactNode;

  /**
   * the margin top
   */
  mt?: MarginType;

  /**
   * the margin bottom
   */
  mb?: MarginType;

  /**
   * the custom styling to be applied
   */
  style?: React.CSSProperties;
}; // The type should extend the React.HTMLAttributes<HTMLDivElement> i.e & React.HTMLAttributes<HTMLDivElement>

export function Margin({ mt, mb, children, style }: MarginProps) {
  return (
    <div style={{
      marginTop: mt,
      marginBottom: mb,
      width: '100%',
      ...style && { ...style }, // I don't understand this line. why not just {...style}?
    }}>
      {children}
    </div>
  );
}

import { useTheme } from '@mui/material';
import React from 'react';

export type LogoProps = {
  /**
   * The background color of the logo.
   */
  backgroundColor?: string;
  /**
   * The text color of the logo.
   */
  textColor?: string;
};

export function Logo({ backgroundColor, textColor }: LogoProps) {
  const theme = useTheme();
  const primaryColor = backgroundColor || theme.palette.primary.main;
  const textPrimary = textColor || theme.palette.background.paper;
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 38.6441C30.2969 38.6441 38.6441 30.2969 38.6441 20C38.6441 9.70319 30.2969 1.35596 20 1.35596C9.70319 1.35596 1.35596 9.70319 1.35596 20C1.35596 30.2969 9.70319 38.6441 20 38.6441Z" fill="url(#paint0_linear_3_171)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2219 21.662C18.2219 23.6979 17.0087 25.0088 14.8333 25.0088C14.0523 25.0088 13.3272 24.8554 12.7694 24.5346C12.1279 24.1721 12.1279 23.7119 12.1279 23.2377V16.1955C12.1279 15.6935 12.4347 15.4425 13.0622 15.4425C13.6898 15.4425 13.9966 15.6935 13.9966 16.1955V18.873C14.3452 18.6359 14.8054 18.5243 15.3353 18.5243C17.0366 18.5243 18.2219 19.6539 18.2219 21.662ZM13.9966 23.2935C14.2336 23.433 14.5265 23.5027 14.8472 23.5027C15.7536 23.5027 16.3114 22.8891 16.3114 21.7875C16.3114 20.6719 15.7397 20.0304 14.8751 20.0304C14.5404 20.0304 14.2336 20.128 13.9966 20.3093V23.2935ZM21.7151 16.6836C21.7151 17.3251 21.2549 17.7713 20.6134 17.7713C19.972 17.7713 19.5118 17.3251 19.5118 16.6836C19.5118 16.0421 19.972 15.6098 20.6134 15.6098C21.2549 15.6098 21.7151 16.0421 21.7151 16.6836ZM21.5478 19.2774V24.2278C21.5478 24.7299 21.241 24.9809 20.6134 24.9809C19.9859 24.9809 19.6791 24.7299 19.6791 24.2278V19.2774C19.6791 18.7754 19.9859 18.5243 20.6134 18.5243C21.241 18.5243 21.5478 18.7754 21.5478 19.2774ZM27.2025 23.3075C27.7184 23.3075 27.8718 23.8513 27.8718 24.1581C27.8718 24.3533 27.8021 24.5486 27.5371 24.702C27.2303 24.8833 26.7004 25.0088 26.1566 25.0088C25.1525 25.0088 24.5529 24.6044 24.2461 24.0466C23.9672 23.5445 23.9393 22.9449 23.9393 22.3034V20.2117H23.4513C22.9492 20.2117 22.6982 19.9607 22.6982 19.4308C22.6982 18.9009 22.9492 18.6498 23.4513 18.6498H23.9393V17.4227C23.9393 16.9207 24.2461 16.6697 24.8736 16.6697C25.5012 16.6697 25.808 16.9207 25.808 17.4227V18.6498H26.9793C27.4814 18.6498 27.7324 18.9009 27.7324 19.4308C27.7324 19.9607 27.4814 20.2117 26.9793 20.2117H25.808V22.3034C25.808 22.5544 25.808 22.917 25.9335 23.1541C26.0311 23.3493 26.2124 23.433 26.4494 23.433C26.6028 23.433 26.7562 23.3911 26.8817 23.3633C26.9933 23.3354 27.0909 23.3075 27.2025 23.3075Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM38.6441 20C38.6441 30.2968 30.2968 38.6441 20 38.6441C9.70317 38.6441 1.35593 30.2968 1.35593 20C1.35593 9.70317 9.70317 1.35593 20 1.35593C30.2968 1.35593 38.6441 9.70317 38.6441 20Z" fill="#7B70B6" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.955 5.60512C14.1044 5.94845 13.9472 6.34789 13.6039 6.4973C10.4741 7.85932 7.96383 10.3692 6.6107 13.49C6.46175 13.8335 6.06252 13.9912 5.71899 13.8423C5.37546 13.6933 5.21772 13.2941 5.36667 12.9506C6.85703 9.51329 9.61923 6.75256 13.0628 5.254C13.4061 5.10459 13.8056 5.26179 13.955 5.60512Z" fill="#7B70B6" />
      <circle cx="20" cy="20" r="20" fill={primaryColor} />
      <path d="M19.854 16.596V14.238H9.288V16.596H13.32V27H15.822V16.596H19.854ZM30.1546 17.28C29.8666 15.84 28.6786 13.968 25.5826 13.968C23.1706 13.968 21.1366 15.696 21.1366 17.964C21.1366 19.89 22.4506 21.204 24.4846 21.618L26.2666 21.978C27.2566 22.176 27.8146 22.752 27.8146 23.49C27.8146 24.39 27.0766 25.056 25.7446 25.056C23.9446 25.056 23.0626 23.922 22.9546 22.662L20.6506 23.274C20.8486 25.092 22.3426 27.27 25.7266 27.27C28.6966 27.27 30.3346 25.29 30.3346 23.328C30.3346 21.528 29.0926 20.016 26.7706 19.566L24.9886 19.224C24.0526 19.044 23.6026 18.486 23.6026 17.784C23.6026 16.938 24.3946 16.164 25.6006 16.164C27.2206 16.164 27.7966 17.262 27.9226 17.964L30.1546 17.28Z" fill={textPrimary} />
      <defs>
        <linearGradient id="paint0_linear_3_171" x1="20" y1="1.35596" x2="20" y2="38.2821" gradientUnits="userSpaceOnUse">
          <stop stop-color="#73398D" />
          <stop offset="1" stop-color="#594A95" />
        </linearGradient>
      </defs>
    </svg>

  );
}

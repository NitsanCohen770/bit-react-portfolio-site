import { useTheme } from '@mui/material';
import React from 'react';

export type ArtworkProps = {
  /**
   * The width of the artwork.
   */
  width?: number;
  /**
   * The height of the artwork.
   */
  height?: number;
}; // Please extend the props

export function Artwork({ width = 755, height = 726 }: ArtworkProps) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  // move svg to a separate file
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 755 726"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="585" r="1" fill="#2544E5" />
      <circle cx="22" cy="585" r="1" fill="#2544E5" />
      <circle cx="36" cy="585" r="1" fill="#2544E5" />
      <circle cx="50" cy="585" r="1" fill="#2544E5" />
      <circle cx="64" cy="585" r="1" fill="#2544E5" />
      <circle cx="78" cy="585" r="1" fill="#2544E5" />
      <circle cx="92" cy="585" r="1" fill="#2544E5" />
      <circle cx="106" cy="585" r="1" fill="#2544E5" />
      <circle cx="120" cy="585" r="1" fill="#2544E5" />
      <circle cx="134" cy="585" r="1" fill="#2544E5" />
      <circle cx="148" cy="585" r="1" fill="#2544E5" />
      <circle cx="162" cy="585" r="1" fill="#2544E5" />
      <circle cx="8" cy="599" r="1" fill="#2544E5" />
      <circle cx="22" cy="599" r="1" fill="#2544E5" />
      <circle cx="36" cy="599" r="1" fill="#2544E5" />
      <circle cx="50" cy="599" r="1" fill="#2544E5" />
      <circle cx="64" cy="599" r="1" fill="#2544E5" />
      <circle cx="78" cy="599" r="1" fill="#2544E5" />
      <circle cx="92" cy="599" r="1" fill="#2544E5" />
      <circle cx="106" cy="599" r="1" fill="#2544E5" />
      <circle cx="120" cy="599" r="1" fill="#2544E5" />
      <circle cx="134" cy="599" r="1" fill="#2544E5" />
      <circle cx="148" cy="599" r="1" fill="#2544E5" />
      <circle cx="162" cy="599" r="1" fill="#2544E5" />
      <circle cx="8" cy="613" r="1" fill="#2544E5" />
      <circle cx="22" cy="613" r="1" fill="#2544E5" />
      <circle cx="36" cy="613" r="1" fill="#2544E5" />
      <circle cx="50" cy="613" r="1" fill="#2544E5" />
      <circle cx="64" cy="613" r="1" fill="#2544E5" />
      <circle cx="78" cy="613" r="1" fill="#2544E5" />
      <circle cx="92" cy="613" r="1" fill="#2544E5" />
      <circle cx="106" cy="613" r="1" fill="#2544E5" />
      <circle cx="120" cy="613" r="1" fill="#2544E5" />
      <circle cx="134" cy="613" r="1" fill="#2544E5" />
      <circle cx="148" cy="613" r="1" fill="#2544E5" />
      <circle cx="162" cy="613" r="1" fill="#2544E5" />
      <circle cx="8" cy="627" r="1" fill="#2544E5" />
      <circle cx="22" cy="627" r="1" fill="#2544E5" />
      <circle cx="36" cy="627" r="1" fill="#2544E5" />
      <circle cx="50" cy="627" r="1" fill="#2544E5" />
      <circle cx="64" cy="627" r="1" fill="#2544E5" />
      <circle cx="78" cy="627" r="1" fill="#2544E5" />
      <circle cx="92" cy="627" r="1" fill="#2544E5" />
      <circle cx="106" cy="627" r="1" fill="#2544E5" />
      <circle cx="120" cy="627" r="1" fill="#2544E5" />
      <circle cx="134" cy="627" r="1" fill="#2544E5" />
      <circle cx="148" cy="627" r="1" fill="#2544E5" />
      <circle cx="162" cy="627" r="1" fill="#2544E5" />
      <circle cx="8" cy="641" r="1" fill="#2544E5" />
      <circle cx="22" cy="641" r="1" fill="#2544E5" />
      <circle cx="36" cy="641" r="1" fill="#2544E5" />
      <circle cx="50" cy="641" r="1" fill="#2544E5" />
      <circle cx="64" cy="641" r="1" fill="#2544E5" />
      <circle cx="78" cy="641" r="1" fill="#2544E5" />
      <circle cx="92" cy="641" r="1" fill="#2544E5" />
      <circle cx="106" cy="641" r="1" fill="#2544E5" />
      <circle cx="120" cy="641" r="1" fill="#2544E5" />
      <circle cx="134" cy="641" r="1" fill="#2544E5" />
      <circle cx="148" cy="641" r="1" fill="#2544E5" />
      <circle cx="162" cy="641" r="1" fill="#2544E5" />
      <circle cx="8" cy="655" r="1" fill="#2544E5" />
      <circle cx="22" cy="655" r="1" fill="#2544E5" />
      <circle cx="36" cy="655" r="1" fill="#2544E5" />
      <circle cx="50" cy="655" r="1" fill="#2544E5" />
      <circle cx="64" cy="655" r="1" fill="#2544E5" />
      <circle cx="78" cy="655" r="1" fill="#2544E5" />
      <circle cx="92" cy="655" r="1" fill="#2544E5" />
      <circle cx="106" cy="655" r="1" fill="#2544E5" />
      <circle cx="120" cy="655" r="1" fill="#2544E5" />
      <circle cx="134" cy="655" r="1" fill="#2544E5" />
      <circle cx="148" cy="655" r="1" fill="#2544E5" />
      <circle cx="162" cy="655" r="1" fill="#2544E5" />
      <circle cx="8" cy="669" r="1" fill="#2544E5" />
      <circle cx="22" cy="669" r="1" fill="#2544E5" />
      <circle cx="36" cy="669" r="1" fill="#2544E5" />
      <circle cx="50" cy="669" r="1" fill="#2544E5" />
      <circle cx="64" cy="669" r="1" fill="#2544E5" />
      <circle cx="78" cy="669" r="1" fill="#2544E5" />
      <circle cx="92" cy="669" r="1" fill="#2544E5" />
      <circle cx="106" cy="669" r="1" fill="#2544E5" />
      <circle cx="120" cy="669" r="1" fill="#2544E5" />
      <circle cx="134" cy="669" r="1" fill="#2544E5" />
      <circle cx="148" cy="669" r="1" fill="#2544E5" />
      <circle cx="162" cy="669" r="1" fill="#2544E5" />
      <circle cx="8" cy="683" r="1" fill="#2544E5" />
      <circle cx="22" cy="683" r="1" fill="#2544E5" />
      <circle cx="36" cy="683" r="1" fill="#2544E5" />
      <circle cx="50" cy="683" r="1" fill="#2544E5" />
      <circle cx="64" cy="683" r="1" fill="#2544E5" />
      <circle cx="78" cy="683" r="1" fill="#2544E5" />
      <circle cx="92" cy="683" r="1" fill="#2544E5" />
      <circle cx="106" cy="683" r="1" fill="#2544E5" />
      <circle cx="120" cy="683" r="1" fill="#2544E5" />
      <circle cx="134" cy="683" r="1" fill="#2544E5" />
      <circle cx="148" cy="683" r="1" fill="#2544E5" />
      <circle cx="162" cy="683" r="1" fill="#2544E5" />
      <circle cx="8" cy="697" r="1" fill="#2544E5" />
      <circle cx="22" cy="697" r="1" fill="#2544E5" />
      <circle cx="36" cy="697" r="1" fill="#2544E5" />
      <circle cx="50" cy="697" r="1" fill="#2544E5" />
      <circle cx="64" cy="697" r="1" fill="#2544E5" />
      <circle cx="78" cy="697" r="1" fill="#2544E5" />
      <circle cx="92" cy="697" r="1" fill="#2544E5" />
      <circle cx="106" cy="697" r="1" fill="#2544E5" />
      <circle cx="120" cy="697" r="1" fill="#2544E5" />
      <circle cx="134" cy="697" r="1" fill="#2544E5" />
      <circle cx="148" cy="697" r="1" fill="#2544E5" />
      <circle cx="162" cy="697" r="1" fill="#2544E5" />
      <circle cx="8" cy="711" r="1" fill="#2544E5" />
      <circle cx="22" cy="711" r="1" fill="#2544E5" />
      <circle cx="36" cy="711" r="1" fill="#2544E5" />
      <circle cx="50" cy="711" r="1" fill="#2544E5" />
      <circle cx="64" cy="711" r="1" fill="#2544E5" />
      <circle cx="78" cy="711" r="1" fill="#2544E5" />
      <circle cx="92" cy="711" r="1" fill="#2544E5" />
      <circle cx="106" cy="711" r="1" fill="#2544E5" />
      <circle cx="120" cy="711" r="1" fill="#2544E5" />
      <circle cx="134" cy="711" r="1" fill="#2544E5" />
      <circle cx="148" cy="711" r="1" fill="#2544E5" />
      <circle cx="162" cy="711" r="1" fill="#2544E5" />
      <circle cx="8" cy="725" r="1" fill="#2544E5" />
      <circle cx="22" cy="725" r="1" fill="#2544E5" />
      <circle cx="36" cy="725" r="1" fill="#2544E5" />
      <circle cx="50" cy="725" r="1" fill="#2544E5" />
      <circle cx="64" cy="725" r="1" fill="#2544E5" />
      <circle cx="78" cy="725" r="1" fill="#2544E5" />
      <circle cx="92" cy="725" r="1" fill="#2544E5" />
      <circle cx="106" cy="725" r="1" fill="#2544E5" />
      <circle cx="120" cy="725" r="1" fill="#2544E5" />
      <circle cx="134" cy="725" r="1" fill="#2544E5" />
      <circle cx="148" cy="725" r="1" fill="#2544E5" />
      <circle cx="162" cy="725" r="1" fill="#2544E5" />
      <circle cx="600" cy="1" r="1" fill="#2544E5" />
      <circle cx="614" cy="1" r="1" fill="#2544E5" />
      <circle cx="628" cy="1" r="1" fill="#2544E5" />
      <circle cx="642" cy="1" r="1" fill="#2544E5" />
      <circle cx="656" cy="1" r="1" fill="#2544E5" />
      <circle cx="670" cy="1" r="1" fill="#2544E5" />
      <circle cx="684" cy="1" r="1" fill="#2544E5" />
      <circle cx="698" cy="1" r="1" fill="#2544E5" />
      <circle cx="712" cy="1" r="1" fill="#2544E5" />
      <circle cx="726" cy="1" r="1" fill="#2544E5" />
      <circle cx="740" cy="1" r="1" fill="#2544E5" />
      <circle cx="754" cy="1" r="1" fill="#2544E5" />
      <circle cx="600" cy="15" r="1" fill="#2544E5" />
      <circle cx="614" cy="15" r="1" fill="#2544E5" />
      <circle cx="628" cy="15" r="1" fill="#2544E5" />
      <circle cx="642" cy="15" r="1" fill="#2544E5" />
      <circle cx="656" cy="15" r="1" fill="#2544E5" />
      <circle cx="670" cy="15" r="1" fill="#2544E5" />
      <circle cx="684" cy="15" r="1" fill="#2544E5" />
      <circle cx="698" cy="15" r="1" fill="#2544E5" />
      <circle cx="712" cy="15" r="1" fill="#2544E5" />
      <circle cx="726" cy="15" r="1" fill="#2544E5" />
      <circle cx="740" cy="15" r="1" fill="#2544E5" />
      <circle cx="754" cy="15" r="1" fill="#2544E5" />
      <circle cx="600" cy="29" r="1" fill="#2544E5" />
      <circle cx="614" cy="29" r="1" fill="#2544E5" />
      <circle cx="628" cy="29" r="1" fill="#2544E5" />
      <circle cx="642" cy="29" r="1" fill="#2544E5" />
      <circle cx="656" cy="29" r="1" fill="#2544E5" />
      <circle cx="670" cy="29" r="1" fill="#2544E5" />
      <circle cx="684" cy="29" r="1" fill="#2544E5" />
      <circle cx="698" cy="29" r="1" fill="#2544E5" />
      <circle cx="712" cy="29" r="1" fill="#2544E5" />
      <circle cx="726" cy="29" r="1" fill="#2544E5" />
      <circle cx="740" cy="29" r="1" fill="#2544E5" />
      <circle cx="754" cy="29" r="1" fill="#2544E5" />
      <circle cx="600" cy="43" r="1" fill="#2544E5" />
      <circle cx="614" cy="43" r="1" fill="#2544E5" />
      <circle cx="628" cy="43" r="1" fill="#2544E5" />
      <circle cx="642" cy="43" r="1" fill="#2544E5" />
      <circle cx="656" cy="43" r="1" fill="#2544E5" />
      <circle cx="670" cy="43" r="1" fill="#2544E5" />
      <circle cx="684" cy="43" r="1" fill="#2544E5" />
      <circle cx="698" cy="43" r="1" fill="#2544E5" />
      <circle cx="712" cy="43" r="1" fill="#2544E5" />
      <circle cx="726" cy="43" r="1" fill="#2544E5" />
      <circle cx="740" cy="43" r="1" fill="#2544E5" />
      <circle cx="754" cy="43" r="1" fill="#2544E5" />
      <circle cx="600" cy="57" r="1" fill="#2544E5" />
      <circle cx="614" cy="57" r="1" fill="#2544E5" />
      <circle cx="628" cy="57" r="1" fill="#2544E5" />
      <circle cx="642" cy="57" r="1" fill="#2544E5" />
      <circle cx="656" cy="57" r="1" fill="#2544E5" />
      <circle cx="670" cy="57" r="1" fill="#2544E5" />
      <circle cx="684" cy="57" r="1" fill="#2544E5" />
      <circle cx="698" cy="57" r="1" fill="#2544E5" />
      <circle cx="712" cy="57" r="1" fill="#2544E5" />
      <circle cx="726" cy="57" r="1" fill="#2544E5" />
      <circle cx="740" cy="57" r="1" fill="#2544E5" />
      <circle cx="754" cy="57" r="1" fill="#2544E5" />
      <circle cx="600" cy="71" r="1" fill="#2544E5" />
      <circle cx="614" cy="71" r="1" fill="#2544E5" />
      <circle cx="628" cy="71" r="1" fill="#2544E5" />
      <circle cx="642" cy="71" r="1" fill="#2544E5" />
      <circle cx="656" cy="71" r="1" fill="#2544E5" />
      <circle cx="670" cy="71" r="1" fill="#2544E5" />
      <circle cx="684" cy="71" r="1" fill="#2544E5" />
      <circle cx="698" cy="71" r="1" fill="#2544E5" />
      <circle cx="712" cy="71" r="1" fill="#2544E5" />
      <circle cx="726" cy="71" r="1" fill="#2544E5" />
      <circle cx="740" cy="71" r="1" fill="#2544E5" />
      <circle cx="754" cy="71" r="1" fill="#2544E5" />
      <circle cx="600" cy="85" r="1" fill="#2544E5" />
      <circle cx="614" cy="85" r="1" fill="#2544E5" />
      <circle cx="628" cy="85" r="1" fill="#2544E5" />
      <circle cx="642" cy="85" r="1" fill="#2544E5" />
      <circle cx="656" cy="85" r="1" fill="#2544E5" />
      <circle cx="670" cy="85" r="1" fill="#2544E5" />
      <circle cx="684" cy="85" r="1" fill="#2544E5" />
      <circle cx="698" cy="85" r="1" fill="#2544E5" />
      <circle cx="712" cy="85" r="1" fill="#2544E5" />
      <circle cx="726" cy="85" r="1" fill="#2544E5" />
      <circle cx="740" cy="85" r="1" fill="#2544E5" />
      <circle cx="754" cy="85" r="1" fill="#2544E5" />
      <circle cx="600" cy="99" r="1" fill="#2544E5" />
      <circle cx="614" cy="99" r="1" fill="#2544E5" />
      <circle cx="628" cy="99" r="1" fill="#2544E5" />
      <circle cx="642" cy="99" r="1" fill="#2544E5" />
      <circle cx="656" cy="99" r="1" fill="#2544E5" />
      <circle cx="670" cy="99" r="1" fill="#2544E5" />
      <circle cx="684" cy="99" r="1" fill="#2544E5" />
      <circle cx="698" cy="99" r="1" fill="#2544E5" />
      <circle cx="712" cy="99" r="1" fill="#2544E5" />
      <circle cx="726" cy="99" r="1" fill="#2544E5" />
      <circle cx="740" cy="99" r="1" fill="#2544E5" />
      <circle cx="754" cy="99" r="1" fill="#2544E5" />
      <circle cx="600" cy="113" r="1" fill="#2544E5" />
      <circle cx="614" cy="113" r="1" fill="#2544E5" />
      <circle cx="628" cy="113" r="1" fill="#2544E5" />
      <circle cx="642" cy="113" r="1" fill="#2544E5" />
      <circle cx="656" cy="113" r="1" fill="#2544E5" />
      <circle cx="670" cy="113" r="1" fill="#2544E5" />
      <circle cx="684" cy="113" r="1" fill="#2544E5" />
      <circle cx="698" cy="113" r="1" fill="#2544E5" />
      <circle cx="712" cy="113" r="1" fill="#2544E5" />
      <circle cx="726" cy="113" r="1" fill="#2544E5" />
      <circle cx="740" cy="113" r="1" fill="#2544E5" />
      <circle cx="754" cy="113" r="1" fill="#2544E5" />
      <circle cx="600" cy="127" r="1" fill="#2544E5" />
      <circle cx="614" cy="127" r="1" fill="#2544E5" />
      <circle cx="628" cy="127" r="1" fill="#2544E5" />
      <circle cx="642" cy="127" r="1" fill="#2544E5" />
      <circle cx="656" cy="127" r="1" fill="#2544E5" />
      <circle cx="670" cy="127" r="1" fill="#2544E5" />
      <circle cx="684" cy="127" r="1" fill="#2544E5" />
      <circle cx="698" cy="127" r="1" fill="#2544E5" />
      <circle cx="712" cy="127" r="1" fill="#2544E5" />
      <circle cx="726" cy="127" r="1" fill="#2544E5" />
      <circle cx="740" cy="127" r="1" fill="#2544E5" />
      <circle cx="754" cy="127" r="1" fill="#2544E5" />
      <circle cx="600" cy="141" r="1" fill="#2544E5" />
      <circle cx="614" cy="141" r="1" fill="#2544E5" />
      <circle cx="628" cy="141" r="1" fill="#2544E5" />
      <circle cx="642" cy="141" r="1" fill="#2544E5" />
      <circle cx="656" cy="141" r="1" fill="#2544E5" />
      <circle cx="670" cy="141" r="1" fill="#2544E5" />
      <circle cx="684" cy="141" r="1" fill="#2544E5" />
      <circle cx="698" cy="141" r="1" fill="#2544E5" />
      <circle cx="712" cy="141" r="1" fill="#2544E5" />
      <circle cx="726" cy="141" r="1" fill="#2544E5" />
      <circle cx="740" cy="141" r="1" fill="#2544E5" />
      <circle cx="754" cy="141" r="1" fill="#2544E5" />
      <rect x="85.5" y="48.5" width="567" height="607" stroke={primary} />
      <path d="M701.5 281V296.5H685.5V311H668.5V327.5H654V344H639" stroke="white" stroke-width="2" />
      <path d="M-2.73196e-06 45L15.5 45L15.5 61L30 61L30 78L46.5 78L46.5 92.5L63 92.5L63 107.5" stroke="white" stroke-width="2" />
      <path d="M342 608C342 607.448 341.552 607 341 607L332 607C331.448 607 331 607.448 331 608C331 608.552 331.448 609 332 609L340 609L340 617C340 617.552 340.448 618 341 618C341.552 618 342 617.552 342 617L342 608ZM265.707 684.707L341.707 608.707L340.293 607.293L264.293 683.293L265.707 684.707Z" fill="white" />
      <circle cx="54" cy="564" r="3" stroke={primary} stroke-width="2" />
      <circle cx="70" cy="564" r="3" stroke={primary} stroke-width="2" />
      <circle cx="86" cy="564" r="3" stroke={primary} stroke-width="2" />
      <circle cx="102" cy="564" r="3" stroke={primary} stroke-width="2" />
      <circle cx="118" cy="564" r="3" stroke={primary} stroke-width="2" />
      <circle cx="134" cy="564" r="3" stroke={primary} stroke-width="2" />
      <circle cx="150" cy="564" r="3" stroke={primary} stroke-width="2" />
      <circle cx="632" cy="178" r="3" stroke={primary} stroke-width="2" />
      <circle cx="648" cy="178" r="3" stroke={primary} stroke-width="2" />
      <circle cx="664" cy="178" r="3" stroke={primary} stroke-width="2" />
      <circle cx="680" cy="178" r="3" stroke={primary} stroke-width="2" />
      <circle cx="696" cy="178" r="3" stroke={primary} stroke-width="2" />
      <circle cx="712" cy="178" r="3" stroke={primary} stroke-width="2" />
      <circle cx="728" cy="178" r="3" stroke={primary} stroke-width="2" />
    </svg>
  );
}

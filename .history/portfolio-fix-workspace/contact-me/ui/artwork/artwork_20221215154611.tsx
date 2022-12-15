import React, { ReactSVG, ReactSVGElement } from 'react';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';

export type ArtworkProps = {
}; // The type should extend the SVGProps; i.e & React.SVGProps<SVGElement>

export function Artwork({ }: ArtworkProps) { // if you are not destructuring the props, you can remove the braces and receive the props directly i.e props: ArtworkProps
  const theme = useTheme();
  const primaryColor = useMemo(() => theme.palette.primary.main, [theme.palette.primary.main]);
// Please move the svg to a separate file and import it here 
// also use the spread operator to spread the props i.e {...props}
  return (
    <svg width="398" height="399" viewBox="0 0 398 399" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21.0795" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="274.808" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="287.139" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="299.47" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="311.801" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="324.132" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="336.464" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="348.795" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="361.126" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="373.457" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="385.788" r="0.880795" fill="#2544E5" />
      <circle cx="21.0795" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="33.4106" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="45.7416" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="58.0727" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="70.4042" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="82.7353" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="95.0663" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="107.397" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="119.728" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="132.06" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="144.391" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="156.722" cy="398.119" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="0.880795" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="13.212" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="25.543" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="37.8742" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="50.2053" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="62.5364" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="74.8676" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="74.8675" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="87.1987" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="99.5298" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="111.861" r="0.880795" fill="#2544E5" />
      <circle cx="260.656" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="272.987" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="285.318" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="297.649" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="309.98" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="322.311" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="334.643" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="346.974" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="359.305" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="371.636" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="383.967" cy="124.192" r="0.880795" fill="#2544E5" />
      <circle cx="396.298" cy="124.192" r="0.880795" fill="#2544E5" />
      <rect x="58.5132" y="41.8377" width="282.735" height="302.113" fill={primaryColor} stroke={primaryColor} stroke-width="0.880795" />
      <path d="M367.672 245.742V259.394H353.58V272.166H338.606V286.699H325.834V301.232H312.623" stroke="white" stroke-width="1.76159" />
      <path d="M42.2187 9.68873L55.8711 9.68873L55.8711 23.7814L68.6426 23.7814L68.6426 38.755L83.1757 38.755L83.1757 51.5265L97.7088 51.5265L97.7088 64.7384" stroke="white" stroke-width="1.76159" />
      <path d="M70.4042 224.603C70.4042 224.116 70.0099 223.722 69.5234 223.722L61.5963 223.722C61.1098 223.722 60.7155 224.116 60.7155 224.603C60.7155 225.089 61.1098 225.483 61.5963 225.483L68.6426 225.483L68.6426 232.53C68.6426 233.016 69.037 233.411 69.5234 233.411C70.0099 233.411 70.4042 233.016 70.4042 232.53L70.4042 224.603ZM3.20582 292.166L70.1462 225.225L68.9006 223.98L1.96019 290.92L3.20582 292.166Z" fill="white" />
      <circle cx="4.34447" cy="169.113" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="18.4372" cy="169.113" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="32.53" cy="169.113" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="46.6228" cy="169.113" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="60.7156" cy="169.113" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="74.8078" cy="169.113" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="88.9006" cy="169.113" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="275.629" cy="189.371" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="289.722" cy="189.371" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="303.815" cy="189.371" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="317.907" cy="189.371" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="332" cy="189.371" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="346.093" cy="189.371" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
      <circle cx="360.185" cy="189.371" r="2.64238" stroke={primaryColor} stroke-width="1.76159" />
    </svg>
  );
}

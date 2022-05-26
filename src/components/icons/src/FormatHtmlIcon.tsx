import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M12,9 L12,15 L12.9200524,15 L12.9200524,10.8655462 L12.9515072,10.8655462 L14.6028834,15 L15.3971166,15 L17.0484928,10.8655462 L17.0799476,10.8655462 L17.0799476,15 L18,15 L18,9 L16.9226737,9 L15.0196592,13.7058824 L14.9882045,13.7058824 L13.0773263,9 L12,9 Z M20,9 L20,15 L24,15 L24,14.1596639 L20.9243028,14.1596639 L20.9243028,9 L20,9 Z M6,9 L6,9.84033613 L8,9.84033613 L8,15 L9,15 L9,9.84033613 L11,9.84033613 L11,9 L6,9 Z M0,9 L0,15 L0.981543624,15 L0.981543624,12.3445378 L4.01845638,12.3445378 L4.01845638,15 L5,15 L5,9 L4.01845638,9 L4.01845638,11.5042017 L0.981543624,11.5042017 L0.981543624,9 L0,9 Z" />
  </SvgIcon>
);

export default Icon;
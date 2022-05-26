import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M12.6469715,2.29245839 L19.7075416,9.35302851 C20.0974861,9.74297303 20.0974861,10.375198 19.7075416,10.7651425 L14.7651425,15.7075416 C14.375198,16.0974861 13.742973,16.0974861 13.3530285,15.7075416 L12.039,14.393 L9.73879613,16.6939806 C9.33077029,17.1020065 8.66922971,17.1020065 8.26120387,16.6939806 L7.556,15.988 L6.07773655,17.6939806 C5.9077979,17.8899215 5.67731162,18 5.43698207,18 L4.53081839,18 C4.23765549,18 4,17.7259809 4,17.3879613 C4,17.2256385 4.05592535,17.069964 4.15547311,16.9551845 L6.184,14.616 L5.30601937,13.7387961 C4.89799354,13.3307703 4.89799354,12.6692297 5.30601937,12.2612039 L7.607,9.961 L6.29245839,8.64697149 C5.90251387,8.25702697 5.90251387,7.62480199 6.29245839,7.23485747 L11.2348575,2.29245839 C11.624802,1.90251387 12.257027,1.90251387 12.6469715,2.29245839 Z M9,11.396 L7.396,13 L9,14.604 L10.604,13 L9,11.396 Z M11.941,4.415 L8.415,7.941 L14.059,13.585 L17.585,10.059 L11.941,4.415 Z M18,20 C18.5522847,20 19,20.4477153 19,21 C19,21.5522847 18.5522847,22 18,22 L5,22 C4.44771525,22 4,21.5522847 4,21 C4,20.4477153 4.44771525,20 5,20 L18,20 Z" />
  </SvgIcon>
);

export default Icon;
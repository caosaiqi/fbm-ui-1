import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M4,9 L20,9 C20.5522847,9 21,9.44771525 21,10 C21,10.5522847 20.5522847,11 20,11 L4,11 C3.44771525,11 3,10.5522847 3,10 C3,9.44771525 3.44771525,9 4,9 Z M4,14 L20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 L4,16 C3.44771525,16 3,15.5522847 3,15 C3,14.4477153 3.44771525,14 4,14 Z M4,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 C3,19.4477153 3.44771525,19 4,19 Z M9.49295191,7 L14.5070481,7 C14.7792979,7 15,6.74726009 15,6.43548961 C15,6.28577215 14.9480641,6.14218672 14.8556177,6.03632049 L12.3485696,3.16534127 C12.1560599,2.94488624 11.8439401,2.94488624 11.6514304,3.16534127 L9.14438227,6.03632049 C8.95187258,6.25677551 8.95187258,6.61420371 9.14438227,6.83465873 C9.23682869,6.94052497 9.36221294,7 9.49295191,7 Z" transform="matrix(1 0 0 -1 0 24)" />
  </SvgIcon>
);

export default Icon;
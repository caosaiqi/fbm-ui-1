import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M11.5,2 C7.35786438,2 4,5.35786438 4,9.5 L4.00503546,9.77636965 C4.08541872,11.9798875 5.12377216,13.9981343 6.80190485,15.3467981 L6.999,15.5 L7,17.1429525 C7,18.1480199 7.77309305,19 8.77777778,19 L14.2222222,19 L14.3711203,18.9936975 C15.3022835,18.914419 16,18.0977618 16,17.1428571 L16.001,15.5 L16.199047,15.346032 C17.9465491,13.941151 19,11.8101021 19,9.5 C19,5.35786438 15.6421356,2 11.5,2 Z M14.5,20 C14.7761424,20 15,20.2238576 15,20.5 L15,21 C15,21.5522847 14.5522847,22 14,22 L9,22 C8.44771525,22 8,21.5522847 8,21 L8,20.5 C8,20.2238576 8.22385763,20 8.5,20 L14.5,20 Z" />
  </SvgIcon>
);

export default Icon;
import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2388889,8.20555556 C16.3166667,9.12222222 17,10.4777778 17,12 C17,14.7611111 14.7611111,17 12,17 C9.23888889,17 7,14.7611111 7,12 C7,10.4777778 7.68333333,9.12222222 8.76111111,8.20555556 L8.76111111,8.20555556 L9.54444444,8.98888889 C8.67222222,9.7 8.11111111,10.7833333 8.11111111,12 C8.11111111,14.15 9.85,15.8888889 12,15.8888889 C14.15,15.8888889 15.8888889,14.15 15.8888889,12 C15.8888889,10.7833333 15.3277778,9.7 14.45,8.99444444 L14.45,8.99444444 Z M12.5555556,7 L12.5555556,12.5555556 L11.4444444,12.5555556 L11.4444444,7 L12.5555556,7 Z" />
  </SvgIcon>
);

export default Icon;
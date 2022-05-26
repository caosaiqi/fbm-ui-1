import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M12.76,10 C12.8925483,10 13,10.1074517 13,10.24 L13,16.76 C13,16.8925483 12.8925483,17 12.76,17 L11.24,17 C11.1074517,17 11,16.8925483 11,16.76 L11,10.24 C11,10.1074517 11.1074517,10 11.24,10 L12.76,10 Z M12.76,7 C12.8925483,7 13,7.10745166 13,7.23999999 L13,8.76000001 C13,8.89254834 12.8925483,9 12.76,9 L11.24,9 C11.1074517,9 11,8.89254834 11,8.76000001 L11,7.23999999 C11,7.10745166 11.1074517,7 11.24,7 L12.76,7 Z" />
  </SvgIcon>
);

export default Icon;
import { styled, SpeedDial } from "@mui/material";

export const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",

  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: "13.5px",
    right: "36px",
  },
  "& .MuiFab-primary": {
    width: 64,
    height: 36,
    padding: "5px 15px",
    borderRadius: "4px",
    color: theme.palette.common.white,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
}));

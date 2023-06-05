import { styled, SpeedDial } from "@mui/material";

export const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",

  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: 0,
    right: 0,
  },
  "& .MuiFab-primary": {
    width: 38,
    height: 38,
  },
}));

import { Box, SpeedDialAction } from "@mui/material";
import { Image, GetApp } from "@mui/icons-material";
import { StyledSpeedDial } from "./DownloadButton.styled";

const actions = [
  { icon: <Image />, name: "Small" },
  { icon: <Image />, name: "Large" },
  { icon: <Image />, name: "Original" },
];

const DownloadButton = () => {
  return (
    <Box>
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<GetApp />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
};

export default DownloadButton;

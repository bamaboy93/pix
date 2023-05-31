import { Box, styled } from "@mui/material";
import overlay from "../../assets/overlay.jpg";

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${overlay})`,
  backgroundPosition: "top",
  height: "85vh",
}));

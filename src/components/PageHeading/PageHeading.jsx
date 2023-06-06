import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Wrapper } from "./PageHeading.styled";

const PageHeading = ({ title }) => {
  return (
    <Wrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">
          {title ? title : "Picture"}
        </Typography>
      </Breadcrumbs>
    </Wrapper>
  );
};

export default PageHeading;

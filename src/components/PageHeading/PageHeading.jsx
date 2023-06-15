import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Wrapper } from "./PageHeading.styled";

const PageHeading = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          underline="hover"
          color="inherit"
          sx={{ cursor: "pointer" }}
        >
          Back
        </Link>
        <Typography color="text.primary">
          {title ? title.split(" ").slice(0, 3).join(" ") : "Picture"}
        </Typography>
      </Breadcrumbs>
    </Wrapper>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string,
};

export default PageHeading;

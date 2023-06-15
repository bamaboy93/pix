import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { Wrapper } from "./PageTitle.styled";

const PageTitle = ({ keyword }) => {
  return (
    <Wrapper>
      <Typography variant="h4" fontWeight="bold">
        {format(keyword)} Photos
      </Typography>
    </Wrapper>
  );
};

PageTitle.propTypes = {
  keyword: PropTypes.string,
};

export default PageTitle;

function format(word) {
  const name = word
    .split(" ")
    .map((item, index) => {
      return item.charAt(0).toUpperCase() + item.substring(1, item.length);
    })
    .join("");

  return name;
}

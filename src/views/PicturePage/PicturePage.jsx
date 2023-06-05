import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { getImageById } from "../../services/picsApi";
import Container from "../../components/Container/Container";
import Alerts from "../../components/Alerts/Alerts";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import PictureWrapper from "../../components/PictureWrapper/PictureWrapper";

const PicturePage = () => {
  const { pictureId } = useParams();

  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ["picture"],
    queryFn: () => getImageById(pictureId),
  });

  console.log(data);

  return (
    <Container>
      {isLoading && <LinearProgress />}
      {isError && (
        <Alerts message="500 Internal Server Error! Try again later." />
      )}

      {isSuccess && (
        <>
          <PictureHeader user={data.user} />
          <PictureWrapper picture={data.urls.raw} alt={data.alt_description} />
          {/* <img src={data.urls.regular} alt="pic" /> */}
        </>
      )}
    </Container>
  );
};

export default PicturePage;

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { getImageById } from "../../services/picsApi";

import Alerts from "../../components/Alerts/Alerts";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import PictureWrapper from "../../components/PictureWrapper/PictureWrapper";
import PictureInfo from "../../components/PictureInfo/PictureInfo";
import PageHeading from "../../components/PageHeading/PageHeading";

const PicturePage = () => {
  const { pictureId } = useParams();

  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ["picture"],
    queryFn: () => getImageById(pictureId),
  });

  return (
    <>
      {isLoading && <LinearProgress />}
      {isError && (
        <Alerts message="500 Internal Server Error! Try again later." />
      )}

      {isSuccess && (
        <>
          <PictureHeader user={data.user} />
          <PageHeading title={data.description} />
          <PictureWrapper picture={data.urls} alt={data.alt_description} />
          <PictureInfo picture={data} />
        </>
      )}
    </>
  );
};

export default PicturePage;

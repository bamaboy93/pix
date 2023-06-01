import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getImageById } from "../../services/picsApi";
import Container from "../../components/Container/Container";
import Alerts from "../../components/Alerts/Alerts";

const PicturePage = () => {
  const { pictureId } = useParams();

  const { isLoading, isSuccess, isError, data, isFetching } = useQuery({
    queryKey: ["picture"],
    queryFn: () => getImageById(pictureId),
  });
  if (isLoading) "Loading...";
  console.log(data);

  return (
    <Container>
      {isError && (
        <Alerts message="500 Internal Server Error! Try again later." />
      )}
      {isSuccess && <img src={data.urls.regular} alt="pic" />}
    </Container>
  );
};

export default PicturePage;

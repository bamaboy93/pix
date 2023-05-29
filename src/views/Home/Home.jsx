import { useEffect, useState } from "react";
import api from "../../services/picsApi";
import Gallery from "../../components/Gallery/Gallery";
import Container from "../../components/Container/Container";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  const [pictures, setPictures] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getImages()
      .then((results) => {
        setPictures(results);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [error]);

  return (
    <Container>
      <Categories />
      {pictures && <Gallery pictures={pictures} />}
    </Container>
  );
};

export default Home;

import axios from "axios";

const ACCESS_KEY = "O8rmM6tVxlyUk_64sUD53vJfBznMiS1LdM5Nn6JQC2s";
const BASE_URL = `https://api.unsplash.com`;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  client_id: ACCESS_KEY,
};

async function getImages(page) {
  try {
    const config = {
      url: `/photos`,
      params: { page },
    };
    const { data } = await axios(config);

    return data;
  } catch (error) {
    return [];
  }
}

async function getImageById(id) {
  try {
    const config = {
      url: `/photos/${id}`,
    };
    const { data } = await axios(config, id);

    return data;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

async function getCategories() {
  try {
    const config = {
      url: `/topics`,
    };
    const { data } = await axios(config);

    return data;
  } catch (error) {
    return;
  }
}

const getImagesByQuery = async (query, page) => {
  try {
    const config = {
      url: `/search/photos`,
      params: { query, page },
    };
    const { data } = await axios(config);

    return data.results;
  } catch (error) {
    return [];
  }
};

export { getImages, getImageById, getCategories, getImagesByQuery };

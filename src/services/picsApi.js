import axios from "axios";

const KEY = "21959710-45213a65c7eef9dddd44550a5";
const BASE_URL = `https://pixabay.com/api/`;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: KEY,
  image_type: "photo",

  orientation: "all",
  per_page: 36,
};

const getImages = async (searchQuery, page) => {
  try {
    const { data } = await axios.get("", {
      params: { q: searchQuery, page },
    });
    return data.hits;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};
const api = {
  getImages,
};

export default api;

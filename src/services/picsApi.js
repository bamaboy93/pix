import axios from "axios";

const KEY = "21959710-45213a65c7eef9dddd44550a5";
const BASE_URL = `https://pixabay.com/api/`;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: KEY,
  image_type: "photo",
  orientation: "all",
};

const getImages = async (page) => {
  try {
    const { data } = await axios.get("", {
      params: { page },
    });
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export { getImages };

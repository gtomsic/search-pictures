import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9EbaM2Q71ecvoa0Sp8_BxH0yBo0faVNuaPxjiXOWVZM",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;

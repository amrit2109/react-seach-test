import axios from "axios";

async function GetPlaces() {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_API_URL,
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching places:", error);
    return null;
  }
}

export default GetPlaces;

const API_KEY = "fa0edb156ade1964e285bec9ce2d236b";
const BASE_URL =
  "https://api.themoviedb.org/3/tv/popular?api_key=fa0edb156ade1964e285bec9ce2d236b&language=it-IT&page=1";

const GET = async (resource = "popular") => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${resource}?api_key=fa0edb156ade1964e285bec9ce2d236b&language=it-IT&page=1`
  );
  const data = await res.json();
  return data;
};
export { GET };

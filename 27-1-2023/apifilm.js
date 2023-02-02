const API_KEY = "fa0edb156ade1964e285bec9ce2d236b";
const BASE_URL = "https://api.themoviedb.org/3/";
console.log(BASE_URL);
const GET = async (type = "movie", resource = "550") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  return data;
};

export { GET };

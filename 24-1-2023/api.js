const BASE_URL = "https://dummyjson.com/users";

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  console.log(data);
  return data;
};

export { GET };

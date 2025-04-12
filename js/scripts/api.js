const API_KEY = '49712789-ea6e23a9676e3bdc0e079b286';



export const fetchImages = async (query, page = 1, perPage = 20) => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&page=${page}&per_page=${perPage}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
};

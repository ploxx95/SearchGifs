export const GetGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=u2RqAJR2PiSSbjQspxIjAtvycM36BIBW&q=${encodeURI(
    category
  )}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gif = data.map((g) => {
    return {
      id: g.id,
      title: g.title,
      url: g.images?.downsized_medium.url,
    };
  });
  return gif;
};

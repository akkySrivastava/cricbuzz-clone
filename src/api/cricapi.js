const API_KEY = "KSnI7d1Lj6TOhicKA5VDnDSoJZX2";
const NEWS_API_KEY = "e54181ce46364165a9160470f3a6a81f";

export const getMatchesInfo = () => {
  const url = `https://cricapi.com/api/matches/${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
};

export const getMatchScore = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("Error: ", err));
};

export const getNews = () => {
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${NEWS_API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

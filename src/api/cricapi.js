const API_KEY = "KSnI7d1Lj6TOhicKA5VDnDSoJZX2";

export const getMatchesInfo = () => {
  const url = `https://cricapi.com/api/matches/${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
};

export const getMatchScore = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`

    return fetch(url).then((res) => res.json()).catch((err) => console.log("Error: ", err))
}

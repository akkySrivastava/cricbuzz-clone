import "./App.css";
import Cricbuzz from "./components/Cricbuzz";
import MatchCards from "./components/MatchCards";
import ListMaches from "./components/ListMaches";
import { getMatchesInfo } from "./api/cricapi";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Spinner from "../src/img/spinner.gif";

function App() {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const matchType = matches.filter((match) => {
    return (
      match.type.toLowerCase().includes(search.toLowerCase()) ||
      match["team-1"].toLowerCase().includes(search.toLowerCase()) ||
      match["team-2"].toLowerCase().includes(search.toLowerCase())
    );
  });
  const limit = matches.slice(0, 5);
  console.log(limit);
  useEffect(() => {
    getMatchesInfo()
      .then((data) => {
        setMatches(data.matches);
        setLoading(false);
        console.log(data.matches);
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Cricbuzz limit={limit} />
      <MatchCards total={matches} limit={limit} />
      <div
        style={{
          marginTop: "10px",
        }}
        className="cricbuzz__headerSearch"
      >
        <div className="cricbuzz__headerSearchIcon">
          <SearchIcon />
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>
      {!loading ? (
        <>
          <div className="listMaches">
            {
              matchType.length !== 0
                ? matchType.map((match) => (
                    <ListMaches key={match.unique_id} matchData={match} />
                  ))
                : matches.map((match) => (
                    <ListMaches key={matches.unique_id} matchData={matches} />
                  ))
              //alert('No matches found')
            }
          </div>
        </>
      ) : (
        <>
          <img
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200",
              height: "200",
            }}
            src={Spinner}
            alt="loading"
          />
        </>
      )}
    </div>
  );
}

export default App;

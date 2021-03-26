import React, { useEffect, useState } from "react";
import { getMatchesInfo } from "../api/cricapi";
import Cricbuzz from "./Cricbuzz";
import ListMaches from "./ListMaches";
import MatchCards from "./MatchCards";
import SearchIcon from "@material-ui/icons/Search";
import spinner from '../img/spinner.gif'

function GetMatches() {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState("");
  const matchType = matches.filter((match) => {
    return (
      match.type.toLowerCase().includes(search.toLowerCase()) ||
      match["team-1"].toLowerCase().includes(search.toLowerCase()) ||
      match["team-2"].toLowerCase().includes(search.toLowerCase())
    );
  });
  const limit = matches.slice(0, 5);
  //console.log(limit);
  useEffect(() => {
    getMatchesInfo()
      .then((data) => {
        setMatches(data.matches);
        //console.log(data.matches);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);
  const [loading, setLoading] = useState(true)
  return (
    <>
      <Cricbuzz key={limit.unique_id} limit={limit} />
      <MatchCards limit={limit} />
      <div
        style={{
          marginTop: "10px",
        }}
        className="cricbuzz__headerSearch"
      >
        <div className="cricbuzz__headerSearchIcon">
          <SearchIcon style = {{
              color: "white"
          }}/>
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>
      {
          !loading ? (<div className="listMaches">
        {
          matchType.length !== 0
            ? matchType.map((match) => (
                <ListMaches key={match.unique_id} matchData={match} />
              ))
            : matches.map((match) => (
                <ListMaches key={match.unique_id} matchData={match} />
              ))
          //alert('No matches found')
        }
      </div>) : (<>
        {
            <img 
                style = {{
                    position: "absolute",
                    width : 260,
                    height : 300,
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
                src = {spinner}
                alt = "Loading"
            />
        }
      </>)
      }
      
    </>
  );
}

export default GetMatches;

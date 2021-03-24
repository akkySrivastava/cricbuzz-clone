import React, { useState } from "react";
import { getMatchScore } from "../api/cricapi";
import "../css/ListMatches.css";
import "../css/Cricbuzz.css";

function ListMaches({ matchData }) {
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = (uid) => {
    if (matchData.matchStarted) {
      setOpen(true);
    } else {
      alert("Match not Started Yet");
    }
    getMatchScore(uid)
      .then((res) => {
        console.log(res);
        setDetails(res);
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <div className="listMatches">
        <div className="listMatchesCards">
          <div className="listMatchesCards__top">
            <h4>{matchData.type === "" ? "N/A" : matchData.type}</h4>
            <h4>
              {matchData.matchStarted === true
                ? "Match Started"
                : "Match Not Started Yet"}
            </h4>
          </div>
          <div className="listMatchesCards__date">
            <h5>{new Date(matchData.dateTimeGMT).toLocaleString()}</h5>
          </div>
          <div className="listMatchesCards__info">
            <h3>{matchData["team-1"]}</h3>
            <img
              src="https://i.pinimg.com/736x/5e/8e/e2/5e8ee2377be528c940da84012a165e4b.jpg"
              alt=""
            />
            <h3>{matchData["team-2"]}</h3>
          </div>
          {open && (
            <div className="listMatchesCards__Scores">
              <h4
                style={{
                  fontSize: "small",
                  fontWeight: 400,
                }}
              >
                Toss won by :{" "}
                <span
                  style={{
                    color: "#555",
                    fontWeight: 600,
                    fontSize: "large",
                  }}
                >
                  {matchData.toss_winner_team}
                </span>
              </h4>
            </div>
          )}
          {open && (
            <div className="listMatchesCards__Scores">
              <h4>{details.description}</h4>
            </div>
          )}

          <div className="listMatchesCards__button">
            <button onClick={() => handleClick(matchData.unique_id)}>
              {!open ? "See Score" : "Refresh"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListMaches;

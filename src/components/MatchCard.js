import React from "react";
import "../css/MatchCard.css";

function MatchCard({ props }) {
 // console.log(props);
  return (
    <div className="matchCard">
      <div className="matchCard__Teams">
        <h4>{props["team-1"]}</h4>
        <h4>{props["team-2"]}</h4>
      </div>
      <div className="matchCard__Scores">
        <h4>Scores</h4>
        <h4>Scores</h4>
      </div>
    </div>
  );
}

export default MatchCard;

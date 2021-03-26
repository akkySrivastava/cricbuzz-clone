import React, { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import "../css/MatchCards.css";

function MatchCards({ limit, total }) {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    setMatch(limit);
  }, [limit]);
  //console.log(match);

  return (
    <div className="matchCards">
      <div className="matchCards__featured">
        <h4>FEATURED MATCHES</h4>
      </div>
      <div className="matchCards__matches">
        {match.map((doc) => (
          <MatchCard key = {doc.unique_id}props={doc} />
        ))}
      </div>
    </div>
  );
}

export default MatchCards;

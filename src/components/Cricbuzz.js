import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import "../css/Cricbuzz.css";
import { Link } from "react-router-dom";

function Cricbuzz({ limit, key }) {
  const [match, setMatch] = useState([]);
  useEffect(() => {
    setMatch(limit);
  }, [limit]);

  return (
    <div className="cricbuzz">
      <div className="cricbuzz__header">
        <div className="cricbuzz__headerImage">
          <img src="https://www.cricbuzz.com/images/cbz-logo.png" alt="" />
        </div>
        <div className="cricbuzz__headerOptions">
          <div className="cricbuzz__headerOption">
            <Link to="/">
              <h4>Live Scores</h4>
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <h4>Schedule</h4>
          </div>
          <div className="cricbuzz__headerOption">
            <h4>Archives</h4>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to="sportsnews">
              <h4>News</h4>
              <ArrowDropDownIcon />
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <h4>Series</h4>
            <ArrowDropDownIcon />
          </div>
          <div className="cricbuzz__headerOption">
            <h4>Teams</h4>
            <ArrowDropDownIcon />
          </div>
          <div className="cricbuzz__headerOption">
            <h4>Videos</h4>
            <ArrowDropDownIcon />
          </div>
          <div className="cricbuzz__headerOption">
            <h4>Rankings</h4>
            <ArrowDropDownIcon />
          </div>
          <div className="cricbuzz__headerOption">
            <h4>More</h4>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="cricbuzz__headerSearch">
          <div className="cricbuzz__headerSearchIcon">
            <SearchIcon style = {{
              color: "white"
            }}/>
            <input placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="cricbuzz__matchStrip">
        <div className="cricbuzz__matchStripLeft">
          <div className="cricbuzz__matchStripLeftMatch">
            <p>MATCHES</p>
          </div>
          <div className="cricbuzz__matchStrip-LeftMatchOptions">
            {match.map((doc) => (
              <div className="cricbuzz__matchStrip-LeftMatchOption">
                <p>{doc["team-1"]}</p>
                <small>vs</small>
                <p>{doc["team-2"]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cricbuzz__all">
          <p>ALL</p>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Cricbuzz;

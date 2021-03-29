import React, { useEffect, useState } from "react";
import { getMatchesInfo, getPlayerDesc, getPlayerStat } from "../api/cricapi";
import Cricbuzz from "./Cricbuzz";
import SearchIcon from "@material-ui/icons/Search";
import "../css/Cricbuzz.css";
import "../css/News.css";
import Accordion from "@material-ui/core/Accordion";
import "../css/PlayerSearch.css";
import loader from '../img/loader.gif'
import {
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  heading: {
    fontSize: "1.1rem",
    fontWeight: "500",
  },
}));

function SimpleAccordion({ player, key }) {
 // console.log(player);
  const classes = useStyles();
  const [playerDesc, setPlayerDesc] = useState([]);

  const stat = (key) => {
    getPlayerDesc(key).then((desc) => {
      setPlayerDesc(desc);
     // console.log(playerDesc);
    });
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="player__Name">
            <h4>{player.name}</h4>
            <Button onClick={() => stat(player.pid)}>See Profile</Button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="prof__details">
            <div className="prof__detailsInfo">
              <div className="prof__detailsImg">
              <Avatar src={playerDesc.imageURL} alt="img" />
            </div>
            <p>{playerDesc.fullName}</p>
            <p>{playerDesc.country}</p>
            </div>
            <h4>PERSONAL INFORMATION</h4>
            <div className="prof__detailsPersonal">
                <div className = "prof__detailsPerson">
                  <div className = "prof__details">
                    {
                      playerDesc.born && <p>Born</p>
                    }
                  
                </div>
                <div className = "prof__details">
                {
                      playerDesc.currentAge && <p>Age</p>
                    }
                  
                </div>
                <div className = "prof__details">
                {
                      playerDesc.playingRole && <p>Role</p>
                    }
                  
                </div>
                <div className = "prof__details">
                {
                      playerDesc.battingStyle && <p>Batting Style</p>
                    }
                  
                </div>
                <div className = "prof__details">
                {
                      playerDesc.bowlingStyle && <p>Bowling Style</p>
                    }
                  
                </div>
              </div>
             <div className = "prof__detailsPersonInfo"> 
                <div className = "prof__detailsPerInfo">
                  <div className = "prof__detailInfo">
                    <p>{playerDesc.born}</p>
                  </div>
                  <div className = "prof__detailInfo">
                    <p>{playerDesc.currentAge}</p>
                  </div>
                  <div className = "prof__detailInfo">
                    <p>{playerDesc.playingRole}</p>
                  </div>
                  <div className = "prof__detailInfo">
                    <p>{playerDesc.battingStyle}</p>
                  </div>
                  <div className = "prof__detailInfo">
                    <p>{playerDesc.bowlingStyle}</p>
                  </div>
                </div>
             </div>
            </div>
            {
              playerDesc.majorTeams && <div className = "prof__teams">
              <h4>TEAMS</h4>
            </div>
            }
            <div className = "prof__teamsName"><p>
              {playerDesc.majorTeams}</p>
            </div>
            {
              playerDesc.profile && <div className = "prof__teams">
              <h4>PROFILE</h4>
            </div>
            }
            
            <div className = "prof__teamsName"><p>
              {playerDesc.profile}</p>
            </div>
            {
              playerDesc.data?.batting && <div className = "prof__teams">
              <h4>BATTING STATS</h4>
            </div>
            }
            <div className = "prof__statsBatting">
            <div className = "prof__statBattingFormat">
                <p>Batting</p>
              </div>
              <div className = "prof__statBattingFormat">
                <p>ODIs</p>
              </div>
              <div className = "prof__statBattingFormat">
                <p>T20Is</p>
              </div>
              <div className = "prof__statBattingFormat">
                <p>Tests</p>
              </div>
              </div>
              <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Matches</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["Mat"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["Mat"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["Mat"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Innings</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["Inns"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["Inns"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["Inns"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Runs</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["Runs"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["Runs"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["Runs"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Balls</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["BF"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["BF"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["BF"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Highest</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["HS"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["HS"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["HS"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Average</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["Ave"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["Ave"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["Ave"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>SR</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["SR"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["SR"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["SR"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Not Out</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["NO"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["NO"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["NO"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Fours</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["4s"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["4s"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["4s"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Sixes</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["6s"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["6s"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["6s"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>50s</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["50"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["50"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["50"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>100s</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.ODIs?.["100"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.T20Is?.["100"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.batting?.tests?.["100"]}</p>
              </div>
            </div> 
            {
              playerDesc.data?.bowling && <div className = "prof__teams">
              <h4>BOWLING STATS</h4>
            </div>
            }
            <div className = "prof__statsBatting">
            <div className = "prof__statBattingFormat">
                <p>Bowling</p>
              </div>
              <div className = "prof__statBattingFormat">
                <p>ODIs</p>
              </div>
              <div className = "prof__statBattingFormat">
                <p>T20Is</p>
              </div>
              <div className = "prof__statBattingFormat">
                <p>Tests</p>
              </div>
              </div>
              <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Matches</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["Mat"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["Mat"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["Mat"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Innings</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["Inns"]}</p>
              </div>
              <div className = "prof__statbattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["Inns"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["Inns"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Balls</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["Balls"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["Balls"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["Balls"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Runs</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["Runs"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["Runs"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["Runs"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Wickets</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["Wkts"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["Wkts"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["Wkts"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Avg</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["Ave"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["Ave"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["Ave"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>Eco</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["Econ"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["Econ"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["Econ"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>SR</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["SR"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["SR"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["SR"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>BBI</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["BBI"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["BBI"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["BBI"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>BBM</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["BBM"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["BBM"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["BBM"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>4w</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["4w"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["4w"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["4w"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>5w</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["5w"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["5w"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["5w"]}</p>
              </div>
            </div> 
            <div className = "prof__statsBatting">
              <div className = "prof__statBattingFormatInfo">
                <p style = {{fontWeight :"bold"}}>10w</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.ODIs?.["10"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.T20Is?.["10"]}</p>
              </div>
              <div className = "prof__statBattingFormatInfo">
                <p>{playerDesc.data?.bowling?.tests?.["10"]}</p>
              </div>
            </div> 
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function PlayerSearch() {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false)
  const limit = matches;
  //console.log(limit);

  useEffect(() => {
    if (search !== "")
      getPlayerStat(search)
        .then((player) => {
          setPlayers(player.data);
          setLoading(false)
          //console.log(players);
        })
        .catch((err) => console.log(err));
  }, [search]);

  useEffect(() => {
    getMatchesInfo()
      .then((data) => {
        setMatches(data.matches.slice(0, 5));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Cricbuzz key={limit.unique_id} limit={limit} />
      <div className="cricbuzz__headerSearch">
        <div className="cricbuzz__headerSearchIcon">
          <SearchIcon
            style={{
              color: "white",
            }}
          />
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>
      <div className="player">
        <h4>Search Player</h4>
        {
          !loading ? (
            <>
              {players.map((player) => (
          <SimpleAccordion key={player.pid} player={player} />
        ))}
            </>
          ) :(<>
            <img 
                style = {{
                    position: "absolute",
                    width : 260,
                    height : 300,
                    top: "60%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
                src = {loader}
                alt = "Loading"
            />
          </>)
        }
        
      </div>
    </>
  );
}

export default PlayerSearch;

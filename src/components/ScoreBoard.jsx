import { useState } from "react";
import "../css/ScoreBoard.css";
import interLogo from "../assets/images/inter.png";
import barcaLogo from "../assets/images/barcelona.png";
import uclLogo from "../assets/images/uefa-cl.png";

export default function ScoreBoard() {
  const [score, setScore] = useState({ t1Score: 0, t2Score: 0 });

  //   team 1 score increment
  const increaseTeam1Score = () => {
    setScore((prevScore) => ({
      ...prevScore,
      t1Score: prevScore.t1Score + 1,
    }));
  };

  //   team 2 score increment
  const increaseTeam2Score = () => {
    setScore((prevScore) => ({
      ...prevScore,
      t2Score: prevScore.t2Score + 1,
    }));
  };

  //   reset score
  const resetScore = () => {
    setScore({ t1Score: 0, t2Score: 0 });
  };

  return (
    <div className="score-board">
      <div className="timer">
        <p>120:00</p>
      </div>
      <div className="scores">
        <div className="team-logo">
          <img
            src={interLogo}
            alt="INTER"
            width="100px"
            onClick={increaseTeam1Score}
          />
        </div>
        <div className="team1-score">{score.t1Score}</div>
        <div className="seperator">-</div>
        <div className="team2-score"> {score.t2Score}</div>
        <div className="team-logo">
          <img
            src={barcaLogo}
            alt="BARCA"
            width="100px"
            onClick={increaseTeam2Score}
          />
        </div>
      </div>
      <div className="ucl-logo">
        <img src={uclLogo} alt="UCL" width="100px" onClick={resetScore} />
      </div>
      <div className="footer">
        <p>
          Developed by <span>Ebrahim Alhayki</span>
        </p>
      </div>
    </div>
  );
}

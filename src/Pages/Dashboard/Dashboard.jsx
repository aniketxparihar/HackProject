import React from "react";
import "./Dashboard.css";
import {useTheme} from "../../Context/Theme-Context";
import {LeaderBoard} from "./LeaderBoard";

const Dashboard = () => {
  const {themeObject} = useTheme();
  return (
    <section className="dashboard-ctn">
      <div className="dashboard-left-ctn">
        <div className="user-profile">
          <div className="user-img">
            <span className="material-icons-outlined">photo_camera</span>
          </div>
          <div className="user-detail">
            <h3 className="user-name" style={{color: themeObject.text}}>
              Jhon Doe
            </h3>
            <p className="user-email" style={{color: themeObject.text}}>
              jhondoe@gmail.com
            </p>
          </div>
        </div>
        <div
          className="project-data"
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        >
          <div className="project-data-item">
            <span className="material-icons pr-2">rocket_launch</span>
            Projects Completed
          </div>
          <div className="project-count">2/3</div>
        </div>
        <div
          className="project-data"
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        >
          <div className="project-data-item">
            <span className="material-icons-outlined pr-2">timer</span>
            Total Time Spent
          </div>
          <div className="project-count">0h:0m:0s</div>
        </div>
        <img
          src="http://ghchart.rshah.org/Pratik1005"
          alt="user Github chart"
          className="github-img"
        />
      </div>
      <div className="leaderboard-ctn">
        <LeaderBoard />
      </div>
    </section>
  );
};

export default Dashboard;

import React from "react";
import "./Dashboard.css";
import {useTheme} from "../../Context/Theme-Context";
import {LeaderBoard} from "./LeaderBoard";
import { useAuth } from "../../Context/Auth-Context";
import {GithubChart} from "./GithubChart";

const Dashboard = () => {
  const { themeObject } = useTheme();
  const { user } = useAuth();
  console.log(user)
  return (
    <section className="dashboard-ctn">
      <div className="dashboard-left-ctn">
        <div className="user-profile">
          <div className="user-img" >
            <img src={user.photoURL} alt="user image" />
          </div>
          <div className="user-detail">
            <h3 className="user-name" style={{color: themeObject.text}}>
              {user.displayName}
            </h3>
            <p className="user-email" style={{color: themeObject.text}}>
              {user.email}
            </p>
          </div>
        </div>
        <GithubChart />
      </div>
      <div className="leaderboard-ctn">
      </div>
    </section>
  );
};

export default Dashboard;

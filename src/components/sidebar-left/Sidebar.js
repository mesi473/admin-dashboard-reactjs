import React from "react";
import "./sidebar.css";
import {
  Dashboard,
  Home,
  Message,
  Notifications,
  Translate,
  ExitToApp,
  Apple,
  KeyboardArrowDown,
  CalendarViewDay,
  Settings,
  Note,
  Notes,
  VideoLibrary,
  ReportProblem,
  Group,
} from "@material-ui/icons";
import UserImage from "../../images/user.jpg";

export default function Sidebar() {
  return (
    <div className="sidebare-main">
      <div className="sidebare-1">
        <div className="sidebare-icons">
          <div className="dashboard-icon">
            <Dashboard style={{ color: "#ffffff" }} />
          </div>
          <div className="dashboard-main-icons">
            <Home className="icon" style={{ color: "#ffffff" }} />
            <Message style={{ color: "#ffffff", paddingTop: "30px" }} />
            <div>
              <Notifications style={{ color: "#ffffff", paddingTop: "30px" }} />
              <div className="badge2">1</div>
            </div>
            <Translate style={{ color: "#ffffff", paddingTop: "30px" }} />
          </div>
          <div className="dashboard-logout-icon">
            <ExitToApp style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
      <div className="sidebare-2">
        <div className="logo">
          <Apple />
          <span>Logo</span>
        </div>
        <div className="user">
          <img src={UserImage} alt="" />
          <div className="user-detail-1">
            <div className="user-detail">
              <span className="name">Meseret kifle</span>
              <KeyboardArrowDown
                className="icon"
                style={{ color: "rgb(166, 173, 173)" }}
              />
            </div>
            <div className="logoinas">Loged in as a teacher</div>
          </div>
        </div>
        <div className="Main-type">
          <span className="main-type-name">Profile</span>
          <div className="item">
            <Dashboard
              className="icon"
              style={{ color: "#0e71c7" }}
            />
            <span style={{color:"#0e71c7"}}>Dashboard</span>
          </div>
          <div className="item">
            <Settings style={{ color: "rgb(166, 173, 173)" }} />
            <span>Account Setting</span>

            <div className="badge1">!</div>
          </div>
          <div className="item">
            <CalendarViewDay style={{ color: "rgb(166, 173, 173)" }} />
            <span>Availablity Calendar</span>
            <div className="badge">!</div>
          </div>
        </div>
        <div className="Main-type">
          <span className="main-type-name">Profile</span>
          <div className="item">
            <Note style={{ color: "rgb(166, 173, 173)" }} />
            <span>Lesson</span>
          </div>
          <div className="item">
            <Notes style={{ color: "rgb(166, 173, 173)" }} />
            <span>Lesson Plan</span>
          </div>
          <div className="item">
            <VideoLibrary style={{ color: "rgb(166, 173, 173)" }} />
            <span>Group Classes</span>
          </div>
          <div className="item">
            <ReportProblem style={{ color: "rgb(166, 173, 173)" }} />
            <span>Reported Issue</span>
          </div>
          <div className="item">
            <Group style={{ color: "rgb(166, 173, 173)" }} />
            <span>Students</span>
          </div>
        </div>
        <div className="Main-type">
          <span className="main-type-name">History</span>
        </div>
        <hr style={{ color: "rgb(166, 173, 173)", height: "0.5px" }} />
        <div className="link">
          <a href="#find-a-tutor">Find A tutor</a>
        </div>
      </div>
    </div>
  );
}

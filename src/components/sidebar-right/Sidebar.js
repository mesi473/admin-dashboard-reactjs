import React from "react";
import "./sidebar.css";
import Folder from '../../images/folder.svg'
import {KeyboardArrowRight,KeyboardArrowLeft} from '@material-ui/icons'
export default function Sidebar() {
  return (
    <div className="sidebar-right">
      <div>
        <div className="sidebar-right-section1">
          <div>Upcomming Lessons</div>
          <a href="#see-more">View All</a>
        </div>
        <div className="sidebar-right-border"></div>
      </div>
      <div>
        <div className="sidebar-right-section2">
          <div>October 20 2021</div>
          <div className="sidebar-right-direction">
              <div className="arrow-left">
                  <KeyboardArrowLeft/>
              </div>
              <div className="arrow-left">
                  <KeyboardArrowRight/>
              </div>
          </div>
        </div>
        <div className="sidebar-right-border"></div>
      </div>
      <div className="calender">

      </div>
      <div className="file-icon">
            <img src={Folder} alt=""/>
      </div>
    </div>
  );
}

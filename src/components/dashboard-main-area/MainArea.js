import React from "react";
import "./main-area.css";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { AttachMoney, Notes, AccountBalance } from "@material-ui/icons";

export default function MainArea() {
  const [Day, setDay] = React.useState("");

  const handleChange = (event) => {
    setDay(event.target.value);
  };
  return (
    <div className="mainArea">
      <div className="dashboard">Dashboard</div>
      <div className="card">
        <div className="card-firt-child">
          <div style={{ marginBottom: "10px", color: "white" }}>
            Teacher Dashboard Heading Jason
          </div>
          <span style={{ color: "white" }}>Teacher Dashboard Info Text</span>
        </div>
        <div className="button">Complete Profile</div>
      </div>
      <div className="cards">
        <div className="card1">
          <div>
            <div className="earning">EARNINGS</div>
            <div className="price">$0.00</div>
          </div>
          <div
            className="moneyicon"
            style={{ backgroundColor: "rgb(235, 171, 33)" }}
          >
            <AttachMoney />
          </div>
        </div>
        <div className="card1">
          <div>
            <div className="earning">EARNINGS</div>
            <div className="price">$0.00</div>
          </div>
          <div
            className="moneyicon"
            style={{ backgroundColor: "rgb(231, 120, 28)" }}
          >
            <Notes />
          </div>
        </div>
        <div className="card1">
          <div>
            <div className="earning">EARNINGS</div>
            <div className="price">$0.00</div>
          </div>
          <div className="moneyicon" style={{ backgroundColor: "#0e71c7" }}>
            <AccountBalance />
          </div>
        </div>
      </div>
      <div className="Note-area">
        <div className="note-area-section1">
          <div>Sale Statistics</div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="input-name">Today</InputLabel>
              <Select
                labelId="input-name"
                id=""
                value={Day}
                label="day"
                onChange={handleChange}
              >
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={20}>Tomorrow</MenuItem>
                <MenuItem value={30}>Yesterday</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="new-cards">
          <div className="card2">
            <div className="card2-sales">Sales</div>
            <div className="card2-price">$0.00</div>
          </div>
          <div className="card3">
            <div className="card3-sales">Lesson Sold</div>
            <div className="card3-price">0</div>
          </div>
        </div>
        <div className="line">
            1.0<hr style={{color:"rgba(0, 0, 0, 0.4)"}}/>
        </div>
      </div>
    </div>
  );
}

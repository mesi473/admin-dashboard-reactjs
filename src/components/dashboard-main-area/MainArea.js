import React from 'react';
import './main-area.css';

export default function MainArea() {
    return (
        <div className="mainArea">
            <div className="dashboard">
                Dashboard
            </div>
            <div className="card">
                <div className="card-firt-child">
                    <div style={{marginBottom:"10px",color:"white"}}>Teacher Dashboard Heading Jason</div>
                    <span style={{color:"white"}}>Teacher Dashboard Info Text</span>
                </div>
                <div className="button">
                    Complete Profile
                </div>
            </div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

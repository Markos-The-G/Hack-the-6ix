import React, { Component } from 'react';

import "./Dashboard.css"

import Bounty2 from "../../Components/Bounty2/Bounty2"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="content-div">
                <div className="dashboard-content-div">
                    <div className="header-title">In Progress</div>
                    <div className="search-content-content-div">
                        <Bounty2 review={false}></Bounty2>
                        <Bounty2 review={false}></Bounty2>
                        <Bounty2 review={false}></Bounty2>
                        <Bounty2 review={false}></Bounty2>

                    </div>
                </div>
                <div style={{width : "80px"}}></div>
                <div className="dashboard-content-div">
                    <div className="header-title">Requires Review</div>
                    <div className="search-content-content-div">
                        <Bounty2 review={true}></Bounty2>
                        <Bounty2 review={true}></Bounty2>
                        <Bounty2 review={true}></Bounty2>
                        <Bounty2 review={true}></Bounty2>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;
import React, { Component } from "react";
import {connect} from "react-redux";

class Dashboard extends Component {
    render(){      
        return (
            <div>
               <h3 className="center">Your Timeline</h3>
               <ul className="dashboard-list"></ul>
               {
                   this.props.tweetIds.map((id)=>(
                       <li key={id}>
                           <div>Tweet ID :{id}</div>
                       </li>
                   ))}
            </div>
        )
    }  
}

function  mapStateToProps({tweets}) {
    return{
        tweetIds : Object.keys(tweets)
            .sort((a,b)=> tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)
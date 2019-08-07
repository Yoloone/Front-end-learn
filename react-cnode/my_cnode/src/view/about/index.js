import React, { Component } from "react";
import data from"./data.js";
import IndexCard from "../indexCard.js";

class About extends Component {
    render() {
        return <IndexCard data={data}/>
    }
}

export default About;
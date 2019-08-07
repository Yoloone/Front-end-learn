import React, { Component } from "react";
import data from"./data.js";
import IndexCard from "../indexCard.js";

class Course extends Component {
    render() {
        return <IndexCard data={data}/>
    }
}

export default Course;
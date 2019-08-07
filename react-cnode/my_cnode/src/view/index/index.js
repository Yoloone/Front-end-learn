import React, { Component } from "react";
import { Row, Col } from "antd";
import IndexMenu from "./indexMenu.js";
import IndexList from "./indexList.js";

class Index extends Component {

    render() {
        return (
            <Row className="wrap">
                <Col md={6} xs={0}>
                    <IndexMenu mode="vertical" id="index-menu" />
                </Col>
                <Col md={0} xs={24}>
                    <IndexMenu mode="horizontal" id="index-xsmenu" />
                </Col>
                <Col md={18} xs={24} id="index-list">
                    <IndexList tab={this.props.match.params.id}/>
                </Col>
            </Row>
        );
    }
}

export default Index;
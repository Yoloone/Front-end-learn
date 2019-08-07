import React, { Component } from "react";
import { Layout, Row, Col, Divider, Dropdown, Button } from "antd";
import Nav from "./nav.js"
class MainHeader extends Component {
    render() {
        return (
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">CNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" id="header-divider" />

                        <Nav mode="horizontal" id="nav" />
                    </Col>
                    <Col md={0} xs={24} id="dropdown-menu">
                        <Dropdown overlay={<Nav mode="vertical" id="" />}>
                            <Button icon="menu-fold"> </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
}

export default MainHeader;
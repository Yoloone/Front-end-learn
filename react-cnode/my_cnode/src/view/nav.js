import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
    render() {
        const { mode, id , location} = this.props;
        return (
            <Menu
                mode={mode}
                id={id}
                selectedKeys={[location.pathname.split('/')[1]]}
            >
                <Menu.Item key="index">
                    <Link to="/index"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item key="course">
                    <Link to="/course"><Icon type="book" />教程</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about"><Icon type="info-circle" />关于</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter((props) => {
    const { mode, id, location } = props;
    return <Nav
        mode={mode}
        id={id}
        location={location}
    />
});
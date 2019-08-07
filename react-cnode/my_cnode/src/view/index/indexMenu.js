import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
const tags = [
    {
        tag: "all",
        text: "全部",
    },
    {
        tag: "good",
        text: "精华",
    },
    {
        tag: "ask",
        text: "问题",
    },
    {
        tag: "share",
        text: "分享",
    },
    {
        tag: "job",
        text: "招聘",
    },
    {
        tag: "test",
        text: "测试",
    },
];
class IndexMenu extends Component {
    render() {
        const { mode, id , location} = this.props;
        return (
            <Menu
                mode={mode}
                id={id}
                selectedKeys={[location.pathname]}
            >
                {tags.map((item) => {
                    return (
                        <Menu.Item key={"/index/" + item.tag}>
                            <Link to={"/index/" + item.tag}>{item.text}</Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
        );
    }
}
export default withRouter((props) => {
    const { mode, id, location } = props;
    return <IndexMenu
        mode={mode}
        id={id}
        location={location}
    />
});
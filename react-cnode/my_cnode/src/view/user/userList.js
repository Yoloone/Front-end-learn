import React, { Component } from "react";
import { Card, List, Avatar } from "antd";
import { Link } from "react-router-dom";

class UserList extends Component {
    render() {
        const { loading, title, data } = this.props;
        return (
            <Card
                loading={loading}
                title={title}
                type="inner"
            >
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            extra={"最后回复于" + item.last_reply_at.split('T')[0]}
                        >
                            <Avatar src={item.author.avatar_url} />&nbsp;
                            <Link to={"/user/" + item.author.loginname} style={{ margin: "0 10px 0 5px" }}>{item.author.loginname}</Link>&nbsp;
                            <Link to={"/details/" + item.id}>{item.title}</Link>
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}

export default UserList;
import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
class TextDetail extends Component {
    render() {
        const { loading, data } = this.props;
        const title = (
            <div>
                <h1>{data.title}</h1>
                <p>
                    <Avatar src={data.author.avatar_url} />&nbsp;
                    <Link to={"/user/" + data.author.loginname}>{data.author.loginname}</Link>
                    &nbsp;发表于：{data.create_at.split('T')[0]}
                </p>
            </div>
        );
        return (
            <Card
                loading={loading}
                type="inner"
                title={title}
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.content
                    }}>
                </div>
            </Card>
        );
    }
}

export default TextDetail;
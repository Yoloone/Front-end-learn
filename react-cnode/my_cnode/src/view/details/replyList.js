import React, { Component } from "react";
import { Card, Avatar, List } from "antd";
import { Link } from "react-router-dom";
class ReplyList extends Component {
    render() {
        const { loading, reply_count, replies } = this.props;

        return (
            <Card
                loading={loading}
                type="inner"
                title={'共有' + reply_count + '条回复'}
            >
                <List
                    itemLayout="vertical"
                    dataSource={replies}
                    renderItem={(item) => (
                        <List.Item
                            key={item.id}
                            extra={'点赞数：' + item.ups.length}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url} />}
                                description={
                                    <p>
                                        <Link to={"/user/"+ item.author.loginname}>{item.author.loginname}</Link>
                                        &nbsp;回复于：{item.create_at.split('T')[0]}
                                    </p>
                                   
                                }
                            />
                            <div dangerouslySetInnerHTML={{
                                __html: item.content
                            }}>
                            </div>
                        </List.Item>
                    )}>

                </List>
            </Card>
        );
    }
}

export default ReplyList;
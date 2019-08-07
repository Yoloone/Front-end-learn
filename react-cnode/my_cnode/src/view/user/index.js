import React, { Component } from "react";
import UserList from "./userList.js"
import { Avatar, Row, Col } from "antd";
import {connect} from "react-redux";
import axios from "axios";

class User extends Component {
    componentDidMount() {
        this.getData(this.props.match.params.id);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.match.params.id !== nextProps.match.params.id){
            this.getData(nextProps.match.params.id);
            return false;
        }

        return true;
    }
    getData(id) {
        this.props.dispatch(dispatch => {
            dispatch({
                type: "USER_UPDATE",
            });
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
                .then(res => {
                    dispatch({
                        type: "USER_UPDATE_SUCCESS",
                        data: res.data.data,
                    });
                })
                .catch(err => {
                    dispatch({
                        type: "USER_UPDATE_FAILED",
                        data: err,
                    });
                });
        });
    }
    render() {
        const data = this.props.data;
        return (
            <div className="wrap">
                <Avatar src={data.avatar_url} className="user-avatar" />
                <Row>
                    <Col md={8} className="user-info">
                        用户名：<span>{data.loginname}</span>
                    </Col>
                    <Col md={8} className="user-info">
                        积分：<span>{data.score}</span>
                    </Col>
                    <Col md={8} className="user-info">
                        注册时间：<span>{data.create_at.split("T")[0]}</span>
                    </Col>
                </Row>
                <UserList loading={false} title="最近发表的帖子" data={data.recent_topics} />
                <UserList loading={false} title="最近回复的帖子" data={data.recent_replies} />
            </div>
        );
    }
}

export default connect(state=>(state.user))(User);
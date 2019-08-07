import React, { Component } from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import IndexTag from "../indexTag.js";
import { connect } from "react-redux";
import axios from "axios";

class IndexList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
    }

    shouldComponentUpdate(nextProps, nextStates) {
        if (nextProps.tab !== this.props.tab) {
            this.getData(nextProps.tab, 1);
            this.setState({page: 1});
            return false;
        }else if(nextStates.page !== this.state.page){
            this.getData(this.props.tab, nextStates.page);
            return false;
        }
        return true;
    }
    getData(tab, page) {
        this.props.dispatch(dispatch => {
            dispatch({
                type: "LIST_UPDATE",
            });

            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=20`)
                .then(res => {
                    dispatch({
                        type: "LIST_UPDATE_SUCCESS",
                        data: res.data.data,
                    });
                })
                .catch(err => {
                    dispatch({
                        type: "LIST_UPDATE_FAILED",
                        data: err,
                    });
                });
        });
    }
    componentDidMount() {
        this.getData(this.props.tab);
    }


    render() {
        const { loading, data } = this.props;
        const pagination = {
            current: this.state.page,
            pageSize: 20,
            total: 1000,
            onChange: ((current) => {
                this.setState({page: current});
            }),
        }
        return (
            <List
                loading={loading}
                dataSource={data}
                pagination={pagination}
                renderItem={item => (
                    <List.Item
                        key={item.id}
                        actions={["回复" + item.reply_count, "访问" + item.visit_count]}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.author.avatar_url} />}
                            title={<div><IndexTag item={item} /><Link to={"/details/" + item.id}>{item.title}</Link></div>}
                            description={<p><Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>&nbsp;创建于：{item.create_at.split("T")[0]}</p>}
                        />
                    </List.Item>
                )} />

        );
    }
}

export default connect(state => (state.list))(IndexList);
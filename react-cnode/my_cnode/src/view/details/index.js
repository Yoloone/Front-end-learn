import React, { Component } from "react";
import TextDetail from "./textDetail";
import ReplyList from "./replyList.js";
import { connect } from "react-redux";
import axios from "axios";

class Details extends Component {

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.props.dispatch(dispatch => {
            dispatch({
                type: "DETAIL_UPDATE",
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${this.props.match.params.id}`)
                .then(res => {
                    dispatch({
                        type: "DETAIL_UPDATE_SUCCESS",
                        data: res.data.data,
                    });
                })
                .catch(err => {
                    dispatch({
                        type: "DETAIL_UPDATE_FAILED",
                        data: err,
                    });
                });
        });
    }
    render() {
        const { data, loading } = this.props;
        return (
            <div className="wrap">
                <TextDetail data={data} loading={false} />
                <ReplyList replies={data.replies} reply_count={data.reply_count} loading={loading} />
            </div>
        );
    }
}

export default connect(state => (state.detail))(Details);
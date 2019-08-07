import React, { Component } from "react";
import { Tag } from "antd";


const tags = {
    top: {
        color: "magenta",
        text: "置顶",
    },
    good: {
        color: "green",
        text: "精华",
    },
    share: {
        color: "orange",
        text: "分享",
    },
    ask: {
        color: "geekblue",
        text: "问答",
    },
    job: {
        color: "cyan",
        text: "招聘",
    },
    test: {
        color: "lime",
        text: "测试",
    },
}

function getTag(item) {
    return (item.top ?
        "top" :
        item.good ?
            "good" :
            item.tab);
}
class IndexTag extends Component {
    render() {
        const tag = tags[getTag(this.props.item)];
        return <Tag color={tag.color} > {tag.text} </Tag>;
    }
}

export default IndexTag;
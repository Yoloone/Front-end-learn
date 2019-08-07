import React, { Component } from "react";
import { Card } from "antd";

class IndexCard extends Component {
    render() {
        const cards = this.props.data.map((item, index) => {
            return (< Card type="inner"
                key={index}
                title={item.title}
                style={{ margin: 10, }}>
                <div
                    dangerouslySetInnerHTML={{ __html: item.content }}>
                </div>
            </Card>);
        });
        return (<div className="wrap"> {cards} </div>);
    }
}

export default IndexCard;
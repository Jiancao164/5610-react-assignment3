import React from "react";

const TopicPill = ({topics}) =>
    <ul className="nav nav-pills">
        {
            topics.map(topic =>
                <li className="nav-item" key={topic.id}>
                    <a className="nav-link" href="#"><h4>{topic.title}</h4></a>
                </li>)

        }
    </ul>;


export default TopicPill
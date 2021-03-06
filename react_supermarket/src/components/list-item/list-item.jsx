import React from 'react';
import './list-item.css';

const ListItem = (props) => {
    const showDescription = (e) => {
        e.target.nextSibling.style.display = "block";
    }
    const hideDescription = (e) => {
        e.target.nextSibling.style.display = "none";
    }

    const {data} = props;
    return <div className="item-list">
        <img src={data.img} className="logo-img" alt="logo" onMouseOver={showDescription} onMouseOut={hideDescription} />
        <div className="item-description"> Я люблю {data.description}
        </div>
    </div>;
}

export default ListItem;
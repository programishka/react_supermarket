import React from 'react';
import ListItem from '../list-item/list-item';

const ListCard = (props) => {
    return props.data.map(
        (item) => <ListItem data={item} />
    );

}

export default ListCard;
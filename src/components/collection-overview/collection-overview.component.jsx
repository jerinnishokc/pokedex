import React from 'react';
import Card from '../card/card.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({collection}) => {
    return (
        <div className="collection-overview-container">
            {
                collection.map(item => {
                    return (<Card key={item.id} item={item}></Card>);
                })
            }
        </div>
    );
}

export default CollectionOverview;

import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

class Pokedex extends React.Component {
    state = {
        collection: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, imageUrl: ''},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };

    componentDidMount() {
        let collectionWithImage = this.state.collection.map(async item => {
            // const paddedId = item.id.toString().padStart(3,'0'); --> option 1
            // Option 2
            const padTo3 = id => id <= 999 ? `00${id}`.slice(-3) : id; 
            const paddedId = padTo3(item.id);            
            await fetch(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`)
            .then(resp => item.imageUrl = resp.url)
            .catch(error => console.log(error));
            return item;
        });

        Promise.all(collectionWithImage)
        .then(resp => {
            collectionWithImage = resp;
            this.setState({collection: collectionWithImage});
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="pokedex-container">
                <h1>Pokedex</h1>
                <CollectionOverview collection={this.state.collection}></CollectionOverview>
            </div>
        );
    }
};

export default Pokedex;
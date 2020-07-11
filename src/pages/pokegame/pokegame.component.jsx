import React from 'react';
import './pokegame.styles.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

class Pokegame extends React.Component {
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

    static defaultProps = {name:'hello'};

    componentDidMount() {
        console.log('Pokegame componentDidMount()');
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

    randomSplitter() {
        const team1 = [];
        const team2 = [...this.state.collection];

        while(team1.length < team2.length) {
            const randomIndex = Math.floor(Math.random() * team2.length);
            team1.push(team2.splice(randomIndex,1)[0]);
        }

        return { team1: team1, team2: team2};
    }

    calculateScore(teams) {
        teams.team1.score = teams.team1.reduce((accumulator,reducer) => accumulator + reducer.base_experience, 0);
        teams.team2.score = teams.team2.reduce((accumulator,reducer) => accumulator + reducer.base_experience, 0);
    }

    render() {
        const poketeams = this.randomSplitter();
        this.calculateScore(poketeams);
        poketeams.team1.score > poketeams.team2.score ? poketeams.team1.winner = true : poketeams.team2.winner = true;

        return (
            <div className="pokegame-container">
                <h1>Pokegame</h1>
                <div className="team1">
                    <h2 className="title">Team1</h2>
                    <div className="score-board" >
                        <span style={{
                            'fontSize': '20px',
                            'fontWeight': 'bold',
                            'color': poketeams.team1.winner ? 'chartreuse' : 'red',
                            'display': 'block'
                        }}>
                        {
                            poketeams.team1.winner ? 'Wins' : 'Loses'
                        }
                        </span>
                        <span>Score: {poketeams.team1.score}</span>
                    </div>
                    <CollectionOverview collection={poketeams.team1}></CollectionOverview>                 
                </div>
                <div className="team2">
                    <h2 className="title">Team2</h2>
                    <div className="score-board">
                        <span style={{
                            'fontSize': '20px',                            
                            'fontWeight': 'bold',
                            'color': poketeams.team2.winner ? 'chartreuse' : 'red',
                            'display': 'block'
                        }}>
                        {
                            poketeams.team2.winner ? 'Wins' : 'Loses'
                        }
                        </span>
                        <span>Score: {poketeams.team2.score}</span>
                    </div>
                    <CollectionOverview collection={poketeams.team2}></CollectionOverview>                    
                </div>
            </div>
        );
    }
};

export default Pokegame;
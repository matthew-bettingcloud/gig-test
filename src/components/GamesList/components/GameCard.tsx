import React from 'react';

import './GameCard.scss';

export default class GameCard extends React.Component {
    render() {
        return (
            <div className="game-card">
                <header className="game-image">
                    <img src="https://via.placeholder.com/1280x940" alt=""/>
                </header>
                <section className="game-info">
                    Teste
                </section>
            </div>
        )
    }
}

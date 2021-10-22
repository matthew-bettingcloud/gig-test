import React from 'react';
import './InputSearch.scss';

export default class InputSearch extends React.Component {
    render() {
        return (
            <div className="input-search">
                <i className="gg-search"></i>
                <input type="text" placeholder="Find a game" />
            </div>
        )
    };
}

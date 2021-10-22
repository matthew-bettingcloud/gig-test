import React from 'react';
import './Filter.scss';

export default class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
                <span onClick={() => console.log('filter')}>Popularity</span>
                <span onClick={() => console.log('filter')}>Alphabetically</span>
            </div>
        )
    };
}

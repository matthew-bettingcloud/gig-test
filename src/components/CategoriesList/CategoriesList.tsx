import React from 'react';

import './CategoriesList.scss';

export default class CategoriesList extends React.Component {
    render() {
        return (
            <div className="categories-list">
                <h2>Categories</h2>

                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        )
    };
}

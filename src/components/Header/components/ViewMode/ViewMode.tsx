import React from 'react';
import './ViewMode.scss';

export default class ViewMode extends React.Component {
    render() {
        return (
            <div className="view-mode">
                <span><i className="gg-menu-grid-r"></i></span>
                <span><i className="gg-menu"></i></span>                 
            </div>
        )
    };
}

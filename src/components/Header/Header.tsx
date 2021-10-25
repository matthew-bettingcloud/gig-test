import React from 'react';

import { InputSearch } from './components/InputSearch/InputSearch';
import { Filter } from './components/Filter/Filter';
import { ViewMode } from './components/ViewMode/ViewMode';

import './Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <InputSearch />

                <Filter />
                
                <ViewMode />
            </div>
        )
    }
}

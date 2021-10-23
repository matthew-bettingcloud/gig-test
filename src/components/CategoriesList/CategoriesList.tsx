import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { IAppState } from '../../models/AppState';
import { CategoryActionEnum } from '../../models/Category';
import './CategoriesList.scss';


export const CategoriesList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: CategoryActionEnum.SET_STATE });
    })

    const categories = useStore().getState().categories
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
}

import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../../models/AppState';
import { Category, CategoryActionEnum } from '../../models/Category';
import { Filter, FilterActionEnum } from '../../models/Filter';

import './CategoriesList.scss';


export const CategoriesList = () => {
    const dispatch = useDispatch();
    dispatch({ type: CategoryActionEnum.SET_STATE });

    return (
        <div className="categories-list">
            <h2>Categories</h2>

            <CategoriesListItems />
        </div>
    )
}

function CategoriesListItems() {
    const categories: Category[] = useSelector<IAppState, Category[]>(state => state.categories);
    const filter: Filter = useSelector<IAppState, Filter>(state => state.filter);
    const listItems = [];
    const dispatch = useDispatch();
    
    
    for (const item of categories) {
        const listItem = (
            <li 
                key={item.id}
                className={item.id === filter.category ? 'active' : ''}
                onClick={() => dispatch({ type: FilterActionEnum.CATEGORY, payload: { category: item.id } })}>
                {item.displayName}
            </li>
        )
        listItems.push(listItem)
    }

    return (<ul>{ listItems }</ul>);
}

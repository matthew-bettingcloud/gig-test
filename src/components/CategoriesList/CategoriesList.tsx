import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../models/AppState';
import { Category, CategoryActionEnum } from '../../models/Category';
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

    const listItems = [];
    
    for (const item of categories) {
        listItems.push(<li key={item.id}>{item.displayName}</li>)
    }

    return (<ul>{ listItems }</ul>);
}

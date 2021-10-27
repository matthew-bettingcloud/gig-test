import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../../../models/AppState';
import { FilterActionEnum } from '../../../../models/Filter';
import { Filter as FilterModel } from '../../../../models/Filter';
import './Filter.scss';

export const Filter = () => {
    const filter = useSelector<IAppState, FilterModel>(state => state.filter);
    const dispatch = useDispatch();

    return (
        <div className="filter">
            <button
                className={filter.popularity ? 'active': ''}
                onClick={() => dispatch({type: FilterActionEnum.POPULARITY, payload: { popularity: true } })}>
                Popularity
            </button>
            <button
                className={filter.alphabetically ? 'active': ''}
                onClick={() => dispatch({type: FilterActionEnum.ALPHABETICALLY, payload: { alphabetically: true } })}>
                Alphabetically
            </button>
        </div>
    )
}

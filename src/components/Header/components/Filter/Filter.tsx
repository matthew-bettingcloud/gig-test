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
            <span onClick={() => console.log('filter')}>Popularity</span>
            <span
                className={filter.alphabetically ? 'active': ''}
                onClick={() => dispatch({type: FilterActionEnum.ALPHABETICALLY, payload: { alphabetically: true } })}>
                    Alphabetically
            </span>
        </div>
    )
}

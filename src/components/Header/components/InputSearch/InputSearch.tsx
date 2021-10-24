import { useDispatch } from 'react-redux';
import { FilterActionEnum } from '../../../../models/Filter';
import './InputSearch.scss';

export const InputSearch = () => {
    const dispatch = useDispatch();

    return (
        <div className="input-search">
            <i className="gg-search"></i>
            <input type="text" onChange={(e) => {dispatch({type: FilterActionEnum.SEARCH, payload: { searchText: e.currentTarget.value}})}} placeholder="Find a game" />
        </div>
    )
}

import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../../../models/AppState';
import { ViewMode as ViewModeModel, ViewModeActionEnum, ViewModeEnum } from '../../../../models/ViewMode';
import './ViewMode.scss';

export const ViewMode = () => {
    const dispatch = useDispatch();
    const viewMode = useSelector<IAppState, ViewModeModel>(state => state.viewMode)

    console.log(viewMode)

    return (
        <div className="view-mode">
            <span
                className={viewMode.type === ViewModeEnum.GRID ? 'active' : ''}
                onClick={() => dispatch({type: ViewModeActionEnum.SET_VIEW_MODE, payload: ViewModeEnum.GRID})}>
                <i className="gg-menu-grid-r"></i>
            </span>
            <span
                className={viewMode.type === ViewModeEnum.LIST ? 'active' : ''}
                onClick={() => dispatch({type: ViewModeActionEnum.SET_VIEW_MODE, payload: ViewModeEnum.LIST})}>
                <i className="gg-menu"></i>
            </span>                 
        </div>
    );
}

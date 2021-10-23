import { takeEvery, put, call } from "@redux-saga/core/effects"
import getCategories from "../../api/categoriesApi"

import {  CategoryActionEnum } from "../../models/Category"

async function getCategoriesData() {
    const response = await getCategories() 
    return response.data
}

function* setCategoriesAsync(): any {
    const response = yield call(getCategoriesData);
    yield put({ type: CategoryActionEnum.SET_STATE_ASYNC, payload: response })
}

export function* watchSetCategories() {
    yield takeEvery(CategoryActionEnum.SET_STATE, setCategoriesAsync)
} 
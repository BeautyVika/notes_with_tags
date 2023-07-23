import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {notesReducer} from "./notesReducer";

const rootReducers = combineReducers({
    notes: notesReducer
})


export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export const AppUseSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch


export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

// @ts-ignore
window.store = store
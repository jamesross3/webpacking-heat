/**
 * External
 */
import { createStore } from "redoodle";
import {
    applyMiddleware,
    compose,
    Store,
} from "redux";
import { default as thunk } from "redux-thunk";

/**
 * Internal
 */
import { getReducers } from "../reducers/reducers";
import { IAppState, INITIAL_STATE } from "../state/state";

export const getReduxStore = (): Store<IAppState> =>
    createStore(getReducers(), INITIAL_STATE, compose(applyMiddleware(thunk))) as Store<IAppState>;

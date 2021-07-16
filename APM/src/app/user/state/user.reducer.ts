import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';

export interface UsersState {
  maskUserName: boolean
}

const initialState: UsersState = {
  maskUserName: true
}

const getUserFeatureSelector = createFeatureSelector<UsersState>("users");

export const getMaskUserName = createSelector(
  getUserFeatureSelector,
  users => users.maskUserName
);

export const userReducer = createReducer(
  initialState,
  on(createAction('[User] Mask User Name'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);

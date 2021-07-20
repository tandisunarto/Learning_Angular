import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import * as UserActions from './user.actions';

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
  on(UserActions.maskUserName, state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);

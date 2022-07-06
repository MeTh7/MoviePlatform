import { Action, createReducer, on } from '@ngrx/store';

import { Criteria } from '../models/criteria.model';
import { CriteriaActions } from './criteria.actions';

export const initialState: Criteria = {
  favorites: [],
  favoritesOnly: false,
  searchTitle: '',
  orderBy: 'alphabet',
  genre: undefined,
};

const innerCriteriaReducers = createReducer(
  initialState,
  on(CriteriaActions.set, (store, { criteria }) => ({ ...store, ...criteria })),
  on(CriteriaActions.setFavorite, (store, { id }) => ({
    ...store,
    favorites: [...store.favorites, id],
  })),
  on(CriteriaActions.removeFavorite, (store, { id }) => ({
    ...store,
    favorites: store.favorites.filter((f) => f !== id),
  }))
);

export function criteriaReducers(
  state: Criteria | undefined,
  action: Action
): Criteria {
  return innerCriteriaReducers(state, action);
}

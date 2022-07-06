import { createAction, props } from '@ngrx/store';

import { Criteria } from '../models/criteria.model';

export const CriteriaActions = {
  set: createAction(
    '[Criteria Set]',
    props<{
      criteria: Criteria;
    }>()
  ),
  setFavorite: createAction(
    '[Criteria Set Favorite]',
    props<{
      id: number;
    }>()
  ),
  removeFavorite: createAction(
    '[Criteria Remove Favorite]',
    props<{
      id: number;
    }>()
  ),
};

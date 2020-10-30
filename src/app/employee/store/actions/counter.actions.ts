import { Item } from './../../model/item.model';
import { createAction, props } from '@ngrx/store';

export const loadCounters = createAction(
  '[Counter] Load Counters'
);

export const loadCountersIncrement = createAction(
  '[Counter] load Counters Increment'
);

export const loadCountersDecrement = createAction(
  '[Counter] load Counters Decrement'
);

export const loadCounterItemIncrement = createAction(
  '[Counter] load Counter Item Increment',
  props<{ data: Item}>()
);

export const loadCounterItemDecrement = createAction(
  '[Counter] load Counter Item Decrement',
  props<{ data: Item }>()
);

export const loadCountersSuccess = createAction(
  '[Counter] Load Counters Success',
  props<{ data: any }>()
);

export const loadCountersFailure = createAction(
  '[Counter] Load Counters Failure',
  props<{ error: any }>()
);

export const loadInitialCart = createAction('[Counter] Load initial Cart');

export const addNewItem = createAction(
  '[Counter] Add New Item',
  props<{ data: Item }>()
);

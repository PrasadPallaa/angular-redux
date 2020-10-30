import { CounterState } from './../state/counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employeeFeatureKey } from '../reducers/employee.reducer';
import { EmployeeState } from '../state/employee.state';
import { counterFeatureKey } from '../reducers/counter.reducer';


export interface AppEmployeeState {
  employee: EmployeeState;
  counter: CounterState;
}

export const getEmployeeState = createFeatureSelector<AppEmployeeState>(employeeFeatureKey);

export const getEmployeeData = createSelector(getEmployeeState, (state) => state.employee);

export const getAllEmployees = createSelector(getEmployeeData, (state) => state.profiles);

export const getSelectedEmployee = createSelector(getEmployeeData, (state) => state.selectedProfile);

export const getCounterState = createFeatureSelector<AppEmployeeState>(counterFeatureKey);

export const getCounterData = createSelector(getCounterState, (state) => state.counter);

export const getCounterValue = createSelector(getCounterData, state => state.value);

export const getCounterItemValue = createSelector(getCounterData, state => state.items);



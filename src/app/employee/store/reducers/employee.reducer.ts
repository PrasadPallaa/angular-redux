import { EmployeeState, initialEmployeeState } from './../state/employee.state';
import { deleteEmployee, loadEmployees, loadEmployeesFailure, loadEmployeesSuccess, selectEmployee, unselectEmployee } from './../actions/employee.actions';
import { createReducer, on } from '@ngrx/store';


export const employeeFeatureKey = 'employee';

export const reducer = createReducer(
  initialEmployeeState,

  on(loadEmployees, (state: EmployeeState) => {
    return { ...state, loading: true, loaded: false };
  }),

  on(loadEmployeesSuccess, (state: EmployeeState, { data }) => {
    return { ...state, loaded: true, loading: false, profiles: data };
  }),

  on(loadEmployeesFailure, (state: EmployeeState, { error }) => {
    return { ...state, loading: true, loaded: false, error: true };
  }),

  on(selectEmployee, (state: EmployeeState, { id }) => {
    const employee = state.profiles.find(e => e.id === id);
    const selectedEmployeeList = [...state.selectedProfile];
    selectedEmployeeList.push(employee);
    return { ...state, selectedProfile: selectedEmployeeList };
  }),

  on(unselectEmployee, (state: EmployeeState, { id }) => {
    const selectedEmployeeList =  [...state.selectedProfile].filter(res => res.id !== id);
    return { ...state, selectedProfile: selectedEmployeeList };
  }),

  on(deleteEmployee, (state: EmployeeState, { id }) => {
    const deletedEmployee =  [...state.profiles].filter(res => res.id !== id);
    return { ...state, profiles: deletedEmployee };
  }),

);

export function employeeReducer(state, action) {
  return reducer(state, action);
}


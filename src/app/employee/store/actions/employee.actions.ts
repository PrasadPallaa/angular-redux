import { EmployeeModel } from './../../model/employee.model';
import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction(
  '[Employee] Load Employees'
);

export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ data: EmployeeModel[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employee] Load Employees Failure',
  props<{ error: any }>()
);

export const selectEmployee = createAction(
  '[Employee] selectEmployee',
  props<{ id: number }>()
);

export const unselectEmployee = createAction(
  '[Employee] unselectEmployee',
  props<{ id: number }>()
);

export const deleteEmployee = createAction(
  '[Employee] deleteEmployee',
  props<{ id: number }>()
);


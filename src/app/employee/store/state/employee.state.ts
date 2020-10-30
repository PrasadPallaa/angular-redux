import { EmployeeModel } from './../../model/employee.model';

export interface EmployeeState {
  loading: boolean;
  loaded: boolean;
  profiles: EmployeeModel[];
  selectedProfile: EmployeeModel[];
  error: boolean;
}

export const initialEmployeeState: EmployeeState = {

  loading: false,
  loaded: false,
  profiles: [],
  selectedProfile: [],
  error: false
};

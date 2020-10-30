import { Item } from './../../model/item.model';
import { EmployeeModel } from './../../model/employee.model';

export interface CounterState {
  value: number;
  items: Item[];
  item: Item;
}

export const initialCounterState: CounterState = {
  value: 0,
  items: [],
  item: null
};

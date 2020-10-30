import { getAllEmployees, getEmployeeData, getSelectedEmployee } from './../../store/selector/employee.selectors';
import { EmployeeModel } from './../../model/employee.model';
import { deleteEmployee, loadEmployees, selectEmployee, unselectEmployee } from './../../store/actions/employee.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeState } from '../../store/state/employee.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee$: Observable<EmployeeModel[]>;
  selectedEmployee$: Observable<EmployeeModel[]>;

  constructor(private store: Store<EmployeeState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.employee$ = this.store.select(getAllEmployees);
    this.selectedEmployee$ = this.store.select(getSelectedEmployee);
  }

  selectEmployee(id) {
    this.store.dispatch(selectEmployee({ id }));
  }

  unselectEmployee(id) {
    this.store.dispatch(unselectEmployee({ id }));
  }

  deleteEmployee(id) {
    this.store.dispatch(deleteEmployee({id}));
  }

}

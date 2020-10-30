import { EmployeeModel } from './../../model/employee.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from '../../services/employee.service';
import { loadEmployees, loadEmployeesFailure, loadEmployeesSuccess } from '../actions/employee.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class EmployeeEffects {

  constructor(private actions$: Actions, private service: EmployeeService) { }

  getAllEmployees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() => {
        return this.service.getAllEmployees().pipe(
          map((res) => {
            return res.length > 0 ? loadEmployeesSuccess({ data: res }) : loadEmployeesFailure({ error: true });
          })
        );
      })
    );
  });

}

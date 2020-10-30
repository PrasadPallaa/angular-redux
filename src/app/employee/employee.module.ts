import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './containers/employee/employee.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EmployeeEffects } from './store/effects/employee.effects';
import { employeeFeatureKey, employeeReducer } from './store/reducers/employee.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { CartComponent } from './containers/cart/cart.component';
import { counterFeatureKey, counterReducer } from './store/reducers/counter.reducer';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailComponent, CartComponent, CartDetailComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ConfirmDialogModule,
    MessagesModule,
    HttpClientModule,
    StoreModule.forFeature(employeeFeatureKey, { employee: employeeReducer }),
    StoreModule.forFeature(counterFeatureKey, { counter: counterReducer }),
    EffectsModule.forFeature([EmployeeEffects]),
    ReactiveFormsModule,
    FormsModule
  ],
})
export class EmployeeModule { }

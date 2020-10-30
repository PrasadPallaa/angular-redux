import { Item } from './../../model/item.model';
import { getCounterValue, getCounterItemValue } from './../../store/selector/employee.selectors';
import {
  loadCounters,
  loadCountersDecrement,
  loadCountersIncrement,
  loadCounterItemIncrement,
  loadCounterItemDecrement,
  loadInitialCart,
  addNewItem
} from './../../store/actions/counter.actions';
import { CounterState } from './../../store/state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  counter$: Observable<any>;
  counter1$: Observable<Item[]>;

  constructor(private store: Store<CounterState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCounters());
    this.store.dispatch(loadInitialCart());
    this.counter$ = this.store.select(getCounterValue);
    this.counter1$ = this.store.select(getCounterItemValue);
  }

  increment() {
    this.store.dispatch(loadCountersIncrement());
  }

  decrement() {
    this.store.dispatch(loadCountersDecrement());
  }

  incrementItem(data) {
    this.store.dispatch(loadCounterItemIncrement({ data }));
  }

  decrementItem(data) {
    this.store.dispatch(loadCounterItemDecrement({ data }));
  }

  addNewItem(data) {
    this.store.dispatch(addNewItem({data}));

  }

}

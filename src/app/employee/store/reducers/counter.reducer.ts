import { state } from '@angular/animations';
import { loadCounterItemDecrement, loadCounterItemIncrement, loadInitialCart, addNewItem } from './../actions/counter.actions';
import { CounterState, initialCounterState } from './../state/counter.state';
import { createReducer, on } from '@ngrx/store';
import { loadCountersDecrement, loadCountersIncrement } from '../actions/counter.actions';


export const counterFeatureKey = 'counter';

export const reducer = createReducer(
  initialCounterState,

  on(loadInitialCart, (state: CounterState) => {
    const cartInfo = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 4 },
      { id: 3, quantity: 6 },
      { id: 4, quantity: 1 },
      { id: 5, quantity: 3 },
    ];
    return { ...state, items: cartInfo };
  }),

  on(loadCountersIncrement, (state: CounterState) => {
    return { value: state.value + 1 };
  }),

  on(loadCountersDecrement, (state: CounterState) => {
    if (state.value > 0) {
      return { value: state.value - 1 };
    }
    return state;
  }),

  on(loadCounterItemIncrement, (state: CounterState, { data }) => {
    if (data) {
      let currentItems = [...state.items];
      const counterItems = currentItems.some(c => c.id === data.id);
      data = { ...data, quantity: data.quantity + 1 };
      if (!counterItems) {
        currentItems.push(data);
      } else {
        currentItems = currentItems.map(c => {
          if (c.id === data.id) {
            return data;
          } else {
            return c;
          }
        });
      }
      return { ...state, items: currentItems };
    }
    return state;
  }),

  on(loadCounterItemDecrement, (state: CounterState, { data }) => {
    if (data) {
      let currentItems = [...state.items];
      const counterItems = state.items.some(c => c.id === data.id);
      data = { ...data, quantity: data.quantity - 1 };

      if (data.quantity < 0) {
        const deleteRecord = [...state.items].filter(i => i.id !== data.id);
        return { ...state, items: deleteRecord };
      }

      if (!counterItems) {
        currentItems.push(data);
      } else {
        currentItems = currentItems.map(c => {
          if (c.id === data.id) {
            return data;
          } else {
            return c;
          }
        });
        return { ...state, items: currentItems };
      }

    }
    return state;
  }),

  on(addNewItem, (state: CounterState, { data }) => {

    const list = [...state.items];

    const x = list.map(x => x.id);

    // console.log(x);
    // const ids = [];
    // list.forEach(items => {
    //   ids.push(items.id);
    // });

    x.sort((a, b) => {
      return a - b;
    }).reverse();

    // let max = 0;
    // list.forEach(items => {
    //   if (items.id > max) {
    //     max = items.id;
    //   }
    // });
    data = { ...data, id: x[0] + 1, quantity: 12 };

    list.push(data);
    return { ...state, items: list };
  })

);



export function counterReducer(state, action) {
  return reducer(state, action);
}

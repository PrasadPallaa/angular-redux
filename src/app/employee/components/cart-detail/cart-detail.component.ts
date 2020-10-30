import { Item } from './../../model/item.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit, OnChanges {

  angForm = new FormArray([]);

  get quantity1(): FormArray {
    return this.angForm.get('quantity1') as FormArray;
  }

  sumOfCartList: any;
  data: Item = { id: 0, quantity: 0 };

  // tslint:disable-next-line: variable-name
  private _counter: Item[];

  @Input() set counter(item: Item[]) {
    this._counter = item;
    item.forEach(i => {
      this.angForm.push(new FormGroup({
        id: new FormControl(i.id),
        quantity: new FormControl(i.quantity)
      }));
    });
  }

  get counter() {
    return this._counter;
  }

  @Input() counter1;
  @Output() incrementedValue = new EventEmitter<number>();
  @Output() decrementedValue = new EventEmitter<number>();

  @Output() incrementedItemValue = new EventEmitter<number>();
  @Output() decrementedItemValue = new EventEmitter<number>();
  @Output() addNewItem = new EventEmitter<Item>();
  quantity: number[];

  constructor(private fb: FormBuilder) {
    // this.angForm.get("quantity").valueChanges.subscribe(x => {
    //   // const enteredQuantity = [];
    //   // const arr = enteredQuantity.push(x);
    //   console.log('firstname value changed');
    // //  console.log(arr);
    // });

  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // console.log(this.quantityNumber.value);
    // for (let i = 0; i < this.quantityNumber.length; i++) {
    //   console.log(this.quantityNumber.at(i).value);
    // }
  }

  ngOnInit(): void {
    this.quantity = this.counter.map(q => q.quantity);
    this.sumOfCartList = this.quantity.reduce((sum, li) => sum + li, 0);
  }


  increment() {
    this.incrementedValue.emit();
  }

  decrement() {
    this.decrementedValue.emit();
  }

  incrementItem(cart) {
    this.incrementedItemValue.emit(cart);
  }

  decrementItem(cart) {
    this.decrementedItemValue.emit(cart);
  }

  addNew(data) {
    this.addNewItem.emit(data);
  }

  onFormSubmit(): void {
    // for (let i = 0; i < this.quantityNumber.length; i++) {
    //   console.log(this.quantityNumber.at(i).value);
    // }
  }

}

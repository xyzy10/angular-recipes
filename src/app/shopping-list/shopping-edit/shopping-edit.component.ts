import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<{name:string, amount:number}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(nameInput:HTMLInputElement, numberInput:HTMLInputElement) {
    this.itemAdded.emit({
      name: nameInput.value,
      amount: Number(numberInput.value)
    });
  }
}

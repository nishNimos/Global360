import { Component } from '@angular/core';
import { TodoServices } from '../services/todo.services';
import { Todolistitem } from '../todolistitem';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [ReactiveFormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})
export class Todolist {
  items: Todolistitem[] = [];
  newItemForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(public todoService: TodoServices) {
    this.getAllItems();
  }
  getAllItems() {
    this.todoService.getAllItems().then(items => {
      this.items = items;
    });
  }
  addItem() {
    const newItem: Todolistitem = this.newItemForm.value;
    this.todoService.addItem(newItem).then(() => {
      this.newItemForm.reset();
      this.getAllItems();
    });
    console.log("Add Item clicked");
  }

  removeItem(itemId: number) {
    console.log("Remove item from list with ID:", itemId);
    this.todoService.removeItem(itemId).then(() => {
      this.getAllItems();
    });

  }
}



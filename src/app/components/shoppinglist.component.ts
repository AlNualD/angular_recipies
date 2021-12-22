import {Component} from '@angular/core';

import {Router} from '@angular/router';

import { Item } from '../models/item.model';
import {globalItems} from '../data/itemsData';
import { ItemsData } from '../data/itemsData';

@Component({
  selector: 'shopping-list',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppingList{

  constructor (private router: Router) {}



  items:ItemsData = globalItems;

  name: string = "";
  amount: number = 0;

  addItem(name: string, amount: number): void {
         
    if(name==null || name.trim()=="" || amount==null)
        return;
    globalItems.addItem(new Item(name,amount));

  }

  onClose() {
    this.router.navigate(['']);
  }

  onDeleteClick(item:Item) {
    globalItems.deleteItem(item.name);
  }
}
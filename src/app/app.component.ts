import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { Item } from './models/item.model';     
import {getRecipies} from './data/recipies'
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    constructor(){} 
}
import { Component } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { Router } from '@angular/router';

import { getRecipies } from "../data/recipies";
import { globalItems } from '../data/itemsData';

@Component({
    selector:'recipies-list',
    templateUrl:'./recipieslist.component.html',
    styleUrls: ['./recipieslist.component.css']
})
export class RecipiesList {

    constructor(private router: Router) { }

    text: string = "";
    price: number = 0;
     

    name: string;
    num: number;
    curRecipe: Recipe = {id: -1, name: "кликните на рецепт", description: "для выбора", selected: false, items: []};

    

    recipies: Recipe[] = getRecipies();

 
    onRecipieClick(curRe: Recipe): void {
        if(curRe == null) return;

        console.log("onRecipieClick");

        this.curRecipe.selected = false;
        curRe.selected = true;
        this.curRecipe = curRe;

    }

    onOpenShoppingListClick():void {
        console.log("onButtonClick");
        this.router.navigate([ 'shopping-list']);
    }

    onAddItemsClick():void {
        if(this.curRecipe.id == -1) {
            return;
        }
        globalItems.addItems(this.curRecipe.items);
    }
}

//
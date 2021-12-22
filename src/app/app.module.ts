import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import { RecipiesList } from './components/recipieslist.component';
import { ShoppingList } from './components/shoppinglist.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
    imports:      [ BrowserModule, FormsModule, AppRoutingModule  ],
    declarations: [ AppComponent, RecipiesList, ShoppingList ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
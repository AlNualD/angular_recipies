import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingList } from './components/shoppinglist.component';
import { RecipiesList } from './components/recipieslist.component';


const appRoutes: Routes = [
   
  { path: '', 
  component: RecipiesList },
  {
    path: 'shopping-list',
    component: ShoppingList
    // ,
    //  outlet: 'popup'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
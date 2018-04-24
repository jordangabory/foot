import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SportComponent } from './sport.component';
import { WelcomeSportComponent }  from './welcomesport/welcomesport.component';
import { BasketComponent } from './basket/basket.component';
import { SportDetailComponent } from './sportdetail/sportdetail.component';

const routes: Routes = [
  { path: "", component: SportComponent  , 
    children:[
        { path: "", component: WelcomeSportComponent  },
        { path:"detail/:id", component: SportDetailComponent},
        { path: "categorie/:name", component: BasketComponent  }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SportRoutingModule { }
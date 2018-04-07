import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SportComponent } from './sport.component';
import { WelcomeSportComponent }  from './welcomesport/welcomesport.component';
import { FootballComponent } from './football/football.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { BasketComponent } from './basket/basket.component';
import { TennisComponent }  from './tennis/tennis.component';
import { SportDetailComponent } from './sportdetail/sportdetail.component';

const routes: Routes = [
  { path: "", component: SportComponent  , 
    children:[
        { path: "", component: WelcomeSportComponent  },
        { path: "football", component: FootballComponent  },
        { path:"detail/:id", component: SportDetailComponent},
        { path: "basket", component: BasketComponent  },
        { path: "tennis", component: TennisComponent  },
        { path: "volleyball", component: VolleyballComponent  }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SportRoutingModule { }
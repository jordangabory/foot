import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';


import { SportRoutingModule } from './sport-routing.module';
import { SportComponent } from './sport.component';
import { BasketComponent } from './basket/basket.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { FootballComponent } from './football/football.component';
import { TennisComponent } from './tennis/tennis.component';
import { WelcomeSportComponent }  from './welcomesport/welcomesport.component';
import { ActionItemComponent } from './actionitem/actionitem.component';
import { TabItemComponent }  from './tabitem/tabitem.component';
import { SportDetailComponent } from './sportdetail/sportdetail.component';

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    SportRoutingModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpClientModule
  ],
  declarations: [
    SportComponent,
    BasketComponent,
    VolleyballComponent,
    FootballComponent,
    TennisComponent,
    WelcomeSportComponent,
    ActionItemComponent,
    TabItemComponent, 
    SportDetailComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class SportModule { }
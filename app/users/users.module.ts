import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { UsersComponent }  from './users.component';
import { UsersRoutingModule } from './users-routing.module';

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    UsersRoutingModule
  ],
  declarations: [
      UsersComponent  
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class UsersModule { }
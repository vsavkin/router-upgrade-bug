import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { CheckmarkPipe }    from './core/checkmark/checkmark.pipe';
import { Phone }            from './core/phone/phone.service';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent }   from './phone-list/phone-list.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    CheckmarkPipe,
    PhoneDetailComponent
  ],
  providers: [
    Phone
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

declare var angular: angular.IAngularStatic;

angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute'
]);


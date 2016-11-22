import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }     from './app.component';
import { CheckmarkPipe }    from './core/checkmark/checkmark.pipe';
import { Phone }            from './core/phone/phone.service';

import { Routes, RouterModule, UrlHandlingStrategy, UrlTree, ROUTER_INITIALIZER } from '@angular/router';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent }   from './phone-list/phone-list.component';


class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) {
    return url.toString().startsWith('/phones')
            || url.toString() === '/';
  }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

const routes: Routes = [
  { path: '', redirectTo: 'phones', pathMatch: 'full' },
  { path: 'phones',          component: PhoneListComponent },
  { path: 'phones/:phoneId', component: PhoneDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {enableTracing: true, useHash: true})
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    CheckmarkPipe,
    PhoneDetailComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/!'},
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


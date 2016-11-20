import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
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
  imports: [ RouterModule.forRoot(routes, { initialNavigation: false }) ],
  exports: [ RouterModule ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ]
})
export class AppRoutingModule { }

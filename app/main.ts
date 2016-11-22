import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { Router, RouterPreloader } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { initialRouterNavigation } from '@angular/router/upgrade';
import { ApplicationRef } from '@angular/core';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});

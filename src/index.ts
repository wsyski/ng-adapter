import {enableProdMode, NgModuleRef} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';


import LiferayParams from './types/LiferayParams';
import {AppComponent} from './app/app.component';
import {DynamicLoader} from './app/dynamic.loader';
import {getLiferayParamsProvider} from './app/liferay-params.provider';

declare const _LIFERAY_PARAMS_: LiferayParams;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([getLiferayParamsProvider(_LIFERAY_PARAMS_)])
  .bootstrapModule(AppModule)
  .then((ngModuleRef: NgModuleRef<any>) => {
    const dynamicLoader = new DynamicLoader(ngModuleRef);
    dynamicLoader.loadComponent(AppComponent, _LIFERAY_PARAMS_);
  });


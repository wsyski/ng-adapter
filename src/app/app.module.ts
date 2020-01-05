import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  // Avoid bootstraping any component statically because we need to attach to
  // the portlet's DOM, which is different for each portlet instance and,
  // thus, cannot be determined until the page is rendered (during runtime).
  ngDoBootstrap() {}
}

import { ErrorHandler,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { HttpErrorInterceptor } from '@core/interceptors/http-error.interceptor';
import { GlobalErrorHandler } from '@shared/global/global-error-handler';
import { RelojPipePipe } from './shared/pipes/reloj-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RelojPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
  {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectSessionInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

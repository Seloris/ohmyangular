import { ConfigurationService } from './services/configuration.service';
import { routing } from './app.routing';
import { EventsService } from './services/events.service';
import { EventModule } from './event/event.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutInterceptor } from './interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { SuffixPipe } from './pipes/suffix.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


const configurationInit =  (config: ConfigurationService) => () => config.load();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EventModule,
    routing
  ],
  providers: [
    EventsService,
    ConfigurationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configurationInit,
      deps: [ConfigurationService],
      multi: true
    }],
  bootstrap: [AppComponent]
})


export class AppModule { }

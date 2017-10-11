import { EventModule } from './event/event.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AutInterceptor } from './interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { SuffixPipe } from './pipes/suffix.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EventModule
    ],
    providers: [ { provide: HTTP_INTERCEPTORS, useClass: AutInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }

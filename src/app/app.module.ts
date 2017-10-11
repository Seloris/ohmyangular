import { PercentageDirective } from './directives/fancy.directive';
import { EventModule } from './event/event.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuffixPipe } from './pipes/suffix.pipe';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

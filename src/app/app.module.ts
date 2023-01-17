import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import {ContactForm} from './contact-form/contact-form.component'
import {ContactList} from './contact-list/contact-list.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent,ContactForm,ContactList ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
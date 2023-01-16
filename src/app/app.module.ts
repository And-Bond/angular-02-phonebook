import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContactForm } from "./contact-form/contact-form.component";
import { ContactList } from "./contact-list/contact-list.component";
import { FilterComponent } from "./filter/filter.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ContactForm, ContactList, FilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

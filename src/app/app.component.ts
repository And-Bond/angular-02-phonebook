import { Component } from "@angular/core";

@Component({
  selector: "app-comp",
  template: `
    <div>
      <contact-form (onSubmit)="onSubmitted($event)"
        ><h1>Phonebook</h1></contact-form
      >
      <input
        class="filter-input"
        type="text"
        (input)="onInput()"
        [(ngModel)]="filterValue"
      />
      <contact-list
        (onContactDelete)="onContactDelete($event)"
        [contacts]="filteredContacts"
        ><h2>Contacts</h2></contact-list
      >
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Array<any> = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  filteredContacts: Array<any> = this.contacts;
  filterValue: string = "";

  onSubmitted({ name, number }) {
    if (name === "" || number === "") {
      return;
    }

    const isInclude = this.contacts.find((contact) => contact.name === name);
    if (isInclude) {
      alert(`${name} is already at contacts`);
      return;
    }
    this.contacts = [
      ...this.contacts,
      {
        id: "id",
        name,
        number,
      },
    ];
    this.filteredContacts = this.contacts
  }
  onContactDelete(id: string) {
    this.contacts = this.contacts.filter((contact) => {
      return contact.id !== id;
    });
    this.filteredContacts = this.contacts;
  }
  onInput() {
    if (this.filterValue === "") {
      this.filteredContacts = this.contacts;
      return;
    }
    this.filteredContacts = this.contacts.filter((contact) => {
      const lowerContact = contact.name.toLowerCase();
      return lowerContact.includes(this.filterValue.toLowerCase());
    });
  }
}

// <h2>Contacts</h2>
// <Filter
//   contacts={this.state.contacts}
//   value={this.state.filter}
//   onChange={this.onFilterChange}
//   onDeleteClick={this.onDeleteClick}
// />
// <ListStyled>
//   <ContactList
//     filterValue={this.state.filter}
//     contacts={this.state.contacts}
//     onDeleteClick={this.onDeleteClick}
//   />
// </ListStyled>

import { Component, Input } from '@angular/core';


@Component({
    selector: 'contact-list',
    template: `
    <ng-content></ng-content>
    <ul>
        <li *ngFor="let contact of contacts">
            {{contact.name}}: {{contact.number}}
            <button type="click">Delete</button>
        </li>
    </ul>
    `
})

export class ContactList{
    @Input() contacts:Array<any> = []
}
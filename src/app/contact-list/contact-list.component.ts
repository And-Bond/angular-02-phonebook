import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'contact-list',
    template: `
    <ng-content></ng-content>
    <ul>
        <li class="li" *ngFor="let contact of contacts">
            {{contact.name}}: {{contact.number}}
            <button class="button" name="{{contact.id}}" type="click" (click)="onDelete($event)">Delete</button>
        </li>
    </ul>
    `,
    styleUrls: ['./contact-list.component.css']
})

export class ContactList{
    @Input() contacts:Array<any> = []
    @Output() onContactDelete = new EventEmitter<string>

    onDelete(event: any){
        this.onContactDelete.emit(event.target.name)    
    }
}
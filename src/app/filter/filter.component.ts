import { Component, Input,Output,EventEmitter } from "@angular/core";

@Component({
  selector: "filter-comp",
  template: `
  <p>Find contacts by name</p>
  <input type="text" (input)="onInput()" [(ngModel)]="filterValue" />
  <ul *ngIf="filterValue">
        <li *ngFor="let contact of contacts">
            {{contact.name}}: {{contact.number}}
            <button type="click">Delete</button>
        </li>
    </ul>
  `,

})
export class FilterComponent {
    filterValue: string = "";
    @Input() contacts:Array<any> = [];
    @Input() value:string = ''
    @Output() onInputChange = new EventEmitter<string> 
    onInput() {
        this.onInputChange.emit(this.filterValue)
      }
}

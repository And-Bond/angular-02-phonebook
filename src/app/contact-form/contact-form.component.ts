import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
    selector: 'contact-form',
    template:`
    <ng-content></ng-content>
        <form (submit)="submit()">
            <p>Name</p>
            <input type="text" name="name" [(ngModel)]="name">
            <p>Tel</p>
            <input type="tel" name="number" [(ngModel)]='number'>
            <button type="submit">Add contact</button>
        </form>
    `
})

export class ContactForm{
    name:  '';
    number:  '';
    @Output() onSubmit = new EventEmitter<object>();
    submit(){
        const data:object = {
            name: this.name,
            number:this.number
        }   
        this.onSubmit.emit(data)
        this.name = ''
        this.number = ''
    }
}
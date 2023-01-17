import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'contact-form',
    template:`
    <ng-content></ng-content>
        <form class="form" (submit)="submit()">
            <p class="p">Name</p>
            <input class="input" type="text" name="name" [(ngModel)]="name">
            <p class="p">Tel</p>
            <input class="input" type="tel" name="number" [(ngModel)]='number'>
            <button class="form-button" type="submit">Add contact</button>
        </form>
    `,
    styleUrls: ['./contact-form.component.css']
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
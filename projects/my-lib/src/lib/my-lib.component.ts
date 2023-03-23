import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-my-lib',
  template: `
  
    <form #odemeForm="ngForm" (ngSubmit)="odemeYap(odemeForm)")>
    <div class="form-group">
      <label for="cardNumber">Kart Numarası</label>
      <input type="text" name="cardNumber" id="cardNumber" #cardNumber ngModel>
    </div>

    <div class="form-group">
      <button class="btn btn-outline-primary">Ödeme Yap</button>
    </div>
    </form>
  `,
  styles: [
  ]
})
export class MyLibComponent {
  @Output() myEvent = new EventEmitter<any>()
  odemeYap(form: NgForm){
    this.myEvent.emit(form.value);
  }
}

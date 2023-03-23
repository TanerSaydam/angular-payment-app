import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }

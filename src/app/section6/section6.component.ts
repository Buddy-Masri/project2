import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component {

form:any

constructor(){
this.form = new FormGroup({

  Username: new FormControl(
    '', [Validators.required, Validators.minLength(4)]
    ),
  Password: new FormControl(
    '', [Validators.required]
    ),
})




}

fx99(){
console.log(this.form);


}

















}

import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {





 

  onSubmit(f:NgForm){
    console.log(f.value)
  }




    



  
}


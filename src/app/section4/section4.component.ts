import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css'],
})
export class Section4Component {
  form: any;
  phonePattern: string = '^((961)?(7(0|1))|(961|0)3)[0-9]{6}$';

  constructor(private frm: FormBuilder) {
    this.form = this.frm.group({
      Username: ['', [Validators.required, Validators.minLength(5),noSpace.noSpaceValidations]],
      email: ['', [Validators.required, Validators.email]],
      contactInfo: this.frm.group({
        address: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        contactNo: [
          '',
          [Validators.required, Validators.pattern(this.phonePattern)],
        ],
      }),
      skills: this.frm.array([]),
    });
    console.log(this.form.controls);
    
  }

  get fctr() {
    return this.form.controls;
  }
  get adrs() {
    return this.form.get('contactInfo.address');
  }
  get shpAdrs() {
    return this.form.get('contactInfo.shippingAddress');
  }
  get cntcttNo() {
    return this.form.get('contactInfo.contactNo');
  }

  fx7(form: FormGroup) {
    console.log(form.value);
  }

  fx9(skl: HTMLInputElement) {
    this.fctr.skills.push(new FormControl(skl));
    skl.value = '';
  }

  fx10(i: number) {
    this.fctr.skills.removeAt(i);
  }
}

//////////////////////////METHOD 2/////////////////////////////
// this.form = new FormGroup({
//   name: new FormControl('', [Validators.required, Validators.minLength(5)]),
//   email: new FormControl('', [Validators.required, Validators.email]),

//   contactInfo: new FormGroup({
//     address: new FormControl('', [Validators.required]),
//     shippingAddress: new FormControl('', [Validators.required]),
//     contactNo: new FormControl('', [
//       Validators.required,
//       Validators.pattern(this.phonePattern),
//     ]),

//   }),
// skills: new FormArray([]),
// });

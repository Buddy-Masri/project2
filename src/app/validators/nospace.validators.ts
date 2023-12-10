import { AbstractControl, ValidationErrors } from "@angular/forms";


export class noSpace {

 static noSpaceValidations(control: AbstractControl): ValidationErrors  {
    let controlValue = control.value as string
    if ( controlValue.includes(' ')){
     return {noSpaceValidator: true}
    }
    else return null
  }

















  
}
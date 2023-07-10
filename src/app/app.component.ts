import { Component } from '@angular/core';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})







export class AppComponent     {

  userArray: Array<any> = [];
  

  name:string;
  email:string;
  address:string;



fx3(){
  if (this.name != null && this.email != null && this.address != null){
  this.userArray.push({
    'name': this.name, 
    'email':this.email, 
    'address':this.address})
  this.name= null
  this.email= null
  this.address= null
  console.log(this.userArray)
 }
  else{
    return
  }
}



fx4(i){
  this.userArray.splice(i, 1)
  }



  



  title = 'project2'
}




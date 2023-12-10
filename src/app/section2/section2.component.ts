import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {

  newArray: Array<any> 


  constructor(private newClass :PostsService ){

    this.newArray = newClass.postList


  }





}

import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
})
export class Section1Component {
  x: number = 9;
  digit: number = 7;

  arrayz: Array<any>;

  constructor(private zclass: PostsService) {
    this.arrayz = zclass.postList;
  }

  fx4() {
    let z: Post = {
      id: this.digit,
      postTitle: 'Post ' + this.digit++,
    };
    this.zclass.fx1(z);
  }

  fx6(i) {
    this.zclass.fx7(i);
  }
}

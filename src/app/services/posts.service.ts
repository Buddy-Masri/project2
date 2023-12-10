import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  postList: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
    { id: 6, postTitle: 'Post 6' },
  ];

  Arrayzz: Array<string> = [
    'hello1',
    'hello2',
    'hello3',
    'hello5',
    'hello6',
    'hello7',
    'hello8',
  ];

      
  fx1(data){
    this.postList.push(data)
  };

  fx7(del){
    this.postList.splice(del)

  }


 



  constructor() { }
}


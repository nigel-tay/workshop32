import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todoparent',
  templateUrl: './todoparent.component.html',
  styleUrls: ['./todoparent.component.css']
})
export class TodoparentComponent implements OnInit {
  taskArray!: Todo[];

  ngOnInit(): void{
    this.taskArray = [];
  }
 
  addTodo(todo: Todo) {
    this.taskArray = [...this.taskArray, todo];
  }
}

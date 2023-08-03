import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  @Input() taskList!: Todo[];
}

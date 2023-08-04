import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit{
  @Output() createNewTodo = new EventEmitter;

  // declare formGroup
  todoForm!: FormGroup;

  // declare formBuilder in constructor for bootstrapping
  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
    ) {}

  // create your actual file in onInit (The form controls)
  ngOnInit(): void {
    let currentDateTime: number = new Date().setUTCHours(0, 0, 0, 0);
    this.todoForm = this.fb.group({
      description: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
      priority: this.fb.control<string>('Low'),
      due: this.fb.control<string>(new Date().toDateString(), [Validators.required, this.todoService.controlDateNotPast(currentDateTime)])
    });
  }

  onSubmit() {
    this.createNewTodo.emit(this.todoForm.value);
  }
}


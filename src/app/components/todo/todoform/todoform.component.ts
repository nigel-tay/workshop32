import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {}

  // create your actual file in onInit (The form controls)
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: this.fb.control<string>(''),
      priority: this.fb.control<string>(''),
      due: this.fb.control<string>('')
    });
  }

  onSubmit() {
    this.createNewTodo.emit(this.todoForm.value);
  }
}


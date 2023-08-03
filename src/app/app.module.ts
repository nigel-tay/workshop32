import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoparentComponent } from './components/todoparent/todoparent.component';
import { TodoformComponent } from './components/todo/todoform/todoform.component';
import { TasklistComponent } from './components/todo/tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoparentComponent,
    TodoformComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

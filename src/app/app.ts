import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TaskListHeader } from './toDo/components/task-list-header/task-list-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskListHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'toDo';
}

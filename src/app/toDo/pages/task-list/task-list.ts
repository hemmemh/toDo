import { Component } from '@angular/core';
import { TaskListHeader } from '../../components/task-list-header/task-list-header';

@Component({
  selector: 'app-task-list',
  imports: [TaskListHeader],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

}

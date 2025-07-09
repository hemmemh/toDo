import { Component } from '@angular/core';
import { TaskItem } from '../../components/task-item/task-item';
import { TaskListAction } from '../../components/task-list-action/task-list-action';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem, TaskListAction],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

}

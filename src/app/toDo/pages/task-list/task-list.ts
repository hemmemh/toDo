import { Component } from '@angular/core';
import { TaskListHeader } from '../../components/task-list-header/task-list-header';
import { TaskItem } from '../../components/task-item/task-item';
import { Container } from "../../components/container/container";
import { TaskListAction } from '../../components/task-list-action/task-list-action';

@Component({
  selector: 'app-task-list',
  imports: [TaskListHeader, TaskItem, TaskListAction],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

}

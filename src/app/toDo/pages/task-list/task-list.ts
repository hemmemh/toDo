import { Component } from '@angular/core';
import { TaskListHeader } from '../../components/task-list-header/task-list-header';
import { TaskItem } from '../../components/task-item/task-item';
import { Container } from "../../components/container/container";

@Component({
  selector: 'app-task-list',
  imports: [TaskListHeader, TaskItem, Container],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

}

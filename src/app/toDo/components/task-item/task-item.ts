import { Component, Input } from '@angular/core';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Task } from '../../models/task.model';
import { RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-task-item',
  imports: [MatButtonModule, MatIconModule, MatCheckboxModule, RouterModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {


  constructor(private todoService:TodoService){}
  @Input({required:true}) task!:Task

  delete(){
    this.todoService.filter(this.task.id)
  }

  update(){
    this.todoService.update({...this.task, closed:!closed})
  }
}

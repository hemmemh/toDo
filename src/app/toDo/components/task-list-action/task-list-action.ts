import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateTask } from '../../modals/create-task/create-task';

@Component({
  selector: 'app-task-list-action',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './task-list-action.html',
  styleUrl: './task-list-action.scss'
})
export class TaskListAction {

  constructor(private dialog:MatDialog){}

  openDialog(): void {
    this.dialog.open(CreateTask, {
      minWidth:500
    });

  }
}

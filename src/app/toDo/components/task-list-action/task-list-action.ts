import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateTask } from '../../modals/create-task/create-task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-task-list-action',
  imports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './task-list-action.html',
  styleUrl: './task-list-action.scss'
})
export class TaskListAction {

  constructor(private dialog:MatDialog){}

  @Output() onInputEmit = new EventEmitter<string>()
  openDialog(): void {
    this.dialog.open(CreateTask, {
      minWidth:500
    });

  }

  onInput(event:Event){
    const target = event.target as HTMLInputElement
    this.onInputEmit.emit(target.value)
  }
}

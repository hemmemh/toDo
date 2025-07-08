import { Component } from '@angular/core';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-item',
  imports: [MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {

}

import { Component } from '@angular/core';
import { Container } from '../../components/container/container';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-info',
  imports: [Container, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './task-info.html',
  styleUrl: './task-info.scss'
})
export class TaskInfo {

}

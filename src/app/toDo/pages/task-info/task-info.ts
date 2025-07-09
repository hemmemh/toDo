import { Component, OnInit } from '@angular/core';
import { Container } from '../../components/container/container';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-info',
  imports: [Container, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './task-info.html',
  styleUrl: './task-info.scss'
})
export class TaskInfo implements OnInit {

  task:Task | null = null

  constructor(
    private route:ActivatedRoute,
    private todoService:TodoService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.task = this.todoService.getById(id) ?? null
    console.log('task', this.task);
    
  }

}

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TaskItem } from '../../components/task-item/task-item';
import { TaskListAction } from '../../components/task-list-action/task-list-action';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { pipe, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem, TaskListAction, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList implements OnInit, OnDestroy{

   tasks$
   value:string = ''
   tasksFiltered:Task[] = [

   ]
  constructor(
    private todoService:TodoService,
    private cdr:ChangeDetectorRef,
  ){
    this.tasks$ = todoService.tasks$
  }

  destroy$ = new Subject<void>()

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

 

  ngOnInit(): void {
    this.tasks$
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.tasksFiltered = this.todoService.onInputChange(this.value)
      this.cdr.markForCheck()
    })
  }

  onSearch(value:string){
    this.value = value
    this.tasksFiltered = this.todoService.onInputChange(value)
  }
}

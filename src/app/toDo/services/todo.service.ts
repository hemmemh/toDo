import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';
import { CreateTaskDTO } from '../dtos/create-task.dto';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  tasks = new BehaviorSubject<Task[]>([])
  tasks$ = this.tasks.asObservable()

 

  add(createTask:CreateTaskDTO){
    const tasks = this.tasks.value
    const id =`${ Math.random() * 10}-${new Date().toISOString()}`
    tasks.push({...createTask, id})
    this.tasks.next(tasks)
  }

  getById(id:string){
    const tasks = this.tasks.value
    const finded = tasks.find(el => el.id === id)
    return finded
  }

  filter(id:string){
     const tasks = this.tasks.value.filter(el => el.id !== id)
     this.tasks.next(tasks)
  }

  onInputChange(value:string){
   if(value === '') return this.tasks.value
    const tasksFiltred = this.tasks.value.filter(el => el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
   return tasksFiltred
  }

  update(task:Task){
    const tasks = this.tasks.value
    const finded = tasks.findIndex(el => el.id === task.id)
    if(finded === -1) return
    tasks.splice(finded,1, task)
    this.tasks.next(tasks)
  }
}

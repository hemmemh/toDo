import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TodoService } from '../../services/todo.service';
import { CreateTaskDTO } from '../../dtos/create-task.dto';

@Component({
  selector: 'app-create-task',
  imports: [MatFormFieldModule,MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.scss'
})
export class CreateTask {

  constructor(
    private dialogRef:DialogRef,
    private todoService:TodoService
  ){}

  taskForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    desc: new FormControl(''),
    closed: new FormControl(false)
  })

  close(){
    this.dialogRef.close()
  } 

  create(){
    if(this.taskForm.invalid) return
    const createTask:CreateTaskDTO = {
      name:this.taskForm.get('name')?.value ?? '',
      desc:this.taskForm.get('desc')?.value ?? '',
      closed:this.taskForm.get('closed')?.value ?? false,
    }
   this.todoService.add(createTask)
   this.close()
  }
}

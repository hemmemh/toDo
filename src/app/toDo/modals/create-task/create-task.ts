import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-task',
  imports: [MatFormFieldModule,MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.scss'
})
export class CreateTask {

  constructor(private dialogRef:DialogRef){}

  taskForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    desc: new FormControl(''),
  })

  close(){
    this.dialogRef.close()
  }
}

import { Routes } from '@angular/router';
import { TaskList } from './toDo/pages/task-list/task-list';
import { TaskInfo } from './toDo/pages/task-info/task-info';

export const routes: Routes = [

     {component:TaskList, path:''},
     {component:TaskInfo, path:'task-info/:id'},
     {path:'**', redirectTo:''}
];

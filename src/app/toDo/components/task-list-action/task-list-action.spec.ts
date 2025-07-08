import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListAction } from './task-list-action';

describe('TaskListAction', () => {
  let component: TaskListAction;
  let fixture: ComponentFixture<TaskListAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

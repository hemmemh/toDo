import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListHeader } from './task-list-header';

describe('TaskListHeader', () => {
  let component: TaskListHeader;
  let fixture: ComponentFixture<TaskListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

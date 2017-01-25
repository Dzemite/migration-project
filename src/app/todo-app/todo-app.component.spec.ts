/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoAppComponent } from './todo-app.component';

import { TodoService } from '../todo.service';

beforeEach(() => [ TodoAppComponent, TodoService ]);

describe('Component: TodoApp', () =>
{
  it('должно создать экземпляр компонента', inject([ TodoService ], ( todoService: TodoService ) =>
  {
    let component = new TodoAppComponent(todoService);

    expect(component).toBeTruthy();
    expect(component).toBeTruthy();
  }));
});

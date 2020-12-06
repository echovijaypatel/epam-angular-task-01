import { Action } from '@ngrx/store';
import { Course } from '../app-courses/models/course';

export const ADD_COURSE = '[Course] Add';
export const UPDATE_COURSE = '[Course] Update';
export const REMOVE_COURSE  = '[Course] Remove';

export class AddCourse implements Action {
  readonly type = ADD_COURSE;

  constructor(public payload: Course) {}
}

export class UpdateCourse implements Action {
  readonly type = UPDATE_COURSE;

  constructor(public payload: Course) {}
}

export class RemoveCourse implements Action {
  readonly type = REMOVE_COURSE;

  constructor(public payload: number) {}
}

export type Actions =
  | AddCourse
  | UpdateCourse
  | RemoveCourse;

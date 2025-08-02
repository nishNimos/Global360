import { TestBed } from '@angular/core/testing';

import { TodoErrorhandler } from './todo.errorhandler';

describe('TodoErrorhandler', () => {
  let service: TodoErrorhandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoErrorhandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

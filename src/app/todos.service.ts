import { Inject } from '@angular/core';
import { IdGenerator } from './id-generator';
import { NAME_PREFIX_TOKEN } from './name-prefix.token';

export interface TodoItem {
  id: number;
  name: string;
}

// Доработайте этот код

export class TodosService {
  constructor(
    @Inject(NAME_PREFIX_TOKEN) private readonly namePrefix: string,
    private readonly idGenerator: IdGenerator
  ) {}

  // используйте для хранения данных
  #todos: TodoItem[] = [];

  getAll(): TodoItem[] {
    return this.#todos;
  }

  getById(id: number): TodoItem | undefined {
    return this.#todos.find(todo => todo.id === id);
  }

  add(name: string): void {
    const id = this.idGenerator.generate();
    const todo: TodoItem = {
      id,
      name: `${this.namePrefix} ${name}`,
    };
    this.#todos.push(todo);
  }

  remove(id: number): void {
    this.#todos = this.#todos.filter(todo => todo.id !== id);
  }
}

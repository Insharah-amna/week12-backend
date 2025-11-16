import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  getAllTodos() {
    const todos = this.todoRepository.find();
    return todos;
  }

  async getSingleTodo(id: number) {
    const todo = await this.todoRepository.findOneBy({ id: id });
    if (!todo) {
      return { message: 'Todo not found' };
    }
    return todo;
  }

  async createTodo(title: string, description: string) {
    const newTodo = this.todoRepository.create();
    newTodo.title = title;
    newTodo.description = description;
    await this.todoRepository.save(newTodo);

    return { message: 'Todo created successfully', todo: newTodo };
  }

  async updateTodo(title: string, description: string, id: number) {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      return { message: 'Todo not found' };
    }
    todo.title = title;
    todo.description = description;
    await this.todoRepository.save(todo);
    return { message: 'Todo updated successfully', todo: todo };
  }

  async deleteTodo(id: number) {
    const todo = await this.todoRepository.findOneBy({ id });
    await this.todoRepository.delete(id);
    if (!todo) {
      return { message: 'Todo not found' };
    }
    return { message: `Todo with id ${id} is deleted successfully.` };
  }
}

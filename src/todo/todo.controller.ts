import { TodoService } from './todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getSingleTodo(@Param('id') id: string) {
    return this.todoService.getSingleTodo(parseInt(id));
  }

  @Post()
  createTodo(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.todoService.createTodo(title, description);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.todoService.updateTodo(title, description, +id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(+id);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { AddTodoDto } from './dtos/add-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: number): Promise<Todo> {
    return this.todoService.findById(id);
  }
  @Post()
  addTodo(@Body() todo: AddTodoDto) {
    return this.todoService.create(todo);
  }
}

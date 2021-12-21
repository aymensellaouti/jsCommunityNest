import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }
  findById(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }
  create(todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }
}

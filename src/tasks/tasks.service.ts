import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOneBy({
      id: id,
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, updateTaskDto);
    return await this.taskRepository.findOneBy({
      id: id,
    });
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entity/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task> {
    return await this.tasksService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return await this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.tasksService.remove(+id);
  }
}

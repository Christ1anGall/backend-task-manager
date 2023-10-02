import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
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
    try {
      return await this.tasksService.create(createTaskDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get()
  async findAll(): Promise<Task[]> {
    try {
      return await this.tasksService.findAll();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task> {
    try {
      const task = await this.tasksService.findOne(id);
      if (!task) {
        throw new NotFoundException(id);
      }
      return task;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    try {
      const task = await this.tasksService.update(id, updateTaskDto);
      if (!task) {
        throw new NotFoundException(id);
      }
      return task;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      await this.tasksService.remove(+id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}

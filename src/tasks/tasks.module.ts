import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  exports: [TypeOrmModule],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}

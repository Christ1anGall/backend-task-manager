import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { DataSource } from 'typeorm';
import { Task } from './tasks/entity/task.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-damp-dawn-76626248.us-east-2.aws.neon.tech',
      port: 5432,
      username: `Christ1anGall`,
      password: `Of1dk4HKPqVL`,
      database: 'neondb',
      entities: [Task],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
      autoLoadEntities: true,
    }),
    TasksModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

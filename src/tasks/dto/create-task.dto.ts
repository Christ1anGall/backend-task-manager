import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  completionDate: Date;

  @IsString()
  priority: string;
}

import { IsString, IsOptional, IsDateString, IsBoolean } from 'class-validator';

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

  @IsBoolean()
  concluded: boolean;
}

import { IsInt, Min, Max, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AvailableSlotsDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(23)
  startHour: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(24)
  endHour: number;
}

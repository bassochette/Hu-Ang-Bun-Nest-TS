import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DateResponseDto {
  @IsString()
  @ApiProperty({
    type: 'string',
  })
  date: string;
}

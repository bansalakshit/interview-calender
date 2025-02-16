import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class AvailableSlotsDto {
    @IsString()
    @ApiProperty({ description: "user's first name" })
    firstName: string

    @IsString()
    @ApiProperty({ description: "user's last name" })
    lastName: string

    @IsEmail()
    @ApiProperty({ description: "user's email" })
    email: string

    @IsBoolean()
    @IsOptional()
    @ApiProperty({ description: 'user is active or not' })
    isActive?: boolean
}

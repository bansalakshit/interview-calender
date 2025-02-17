import { Controller, Post, Body, Param, Get, Query } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailableSlotsDto } from './dto/availability.dto';
import { DaysEnum, UserRoleEnum } from '../helper/constant';
import { ApiTags, ApiOperation, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';

@ApiTags('Availability')
@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Post(':role/:day/:userId')
  @ApiOperation({ summary: 'Set availability for a Candidate or Interviewer' })
  @ApiParam({ 
    name: 'role', 
    enum: UserRoleEnum, 
    description: 'Select whether the user is a candidate or interviewer' 
  })
  @ApiParam({ 
    name: 'day', 
    enum: DaysEnum, 
    description: 'Select day' 
  })
  @ApiParam({ 
    name: 'userId', 
    type: Number, 
    description: 'Unique ID of the candidate or interviewer' 
  })
  @ApiBody({ type: AvailableSlotsDto, description: 'Availability slot details' })
  async setAvailability(
    @Param('role') role: UserRoleEnum,
    @Param('day') day: DaysEnum,
    @Param('userId') userId: number,
    @Body() availabilityDto: AvailableSlotsDto,
  ) {
    console.log({ day })
    return this.availabilityService.setAvailability(role, day, +userId, availabilityDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get availability of all candidates and interviewers' })
  async getAllAvailabilities() {
    return this.availabilityService.getAllAvailabilities();
  }

  @Get('common-slots')
  @ApiOperation({ summary: 'Get common interview slots for a candidate and interviewers' })
  @ApiQuery({ name: 'candidateId', type: Number, description: 'Candidate user ID' })
  async getCommonSlots(
    @Query('candidateId') candidateId: number,
  ) {
    return this.availabilityService.getAvailableSlots(+candidateId);
  }
}

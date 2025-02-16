import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AvailabilityService } from './availability.service';
import { AvailableSlotsDto } from './dto/availability.dto';

@ApiTags('Availability')
@Controller('availability')
export class AvailabilityController {
    constructor(private readonly availabilityService: AvailabilityService) {}

    @Post()
    @ApiOperation({ summary: 'Get Available Slots' })
    availableSlots(@Body() availableSlotsDto: AvailableSlotsDto) {
        return this.availabilityService.availableSlots(availableSlotsDto);
    }
}

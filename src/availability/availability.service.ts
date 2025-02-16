import { Injectable } from '@nestjs/common';
import { AvailableSlotsDto } from './dto/availability.dto';

@Injectable()
export class AvailabilityService {
    constructor() {}

    availableSlots(req: AvailableSlotsDto) {
        return {};
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { AvailableSlotsDto } from './dto/availability.dto';
import { DaysEnum, UserRoleEnum } from '../helper/constant';

const availabilityArr = [];

@Injectable()
export class AvailabilityService {
  constructor() {}

  async setAvailability(role: UserRoleEnum, day: DaysEnum, userId: number, availabilityDto: AvailableSlotsDto) {
    const dataObj = { role, day, userId, ...availabilityDto };
    availabilityArr.push(dataObj);
    return dataObj;
  }

  async getAllAvailabilities() {
    return availabilityArr;
  }

  async getAvailableSlots(candidateId: number) {
    const candidateAvailability = availabilityArr.filter(
      (entry) => entry.role === UserRoleEnum.CANDIDATE && entry.userId === candidateId
    );

    if (candidateAvailability.length === 0) {
      throw new NotFoundException(`Candidate with ID ${candidateId} not found`);
    }

    const interviewersAvailability = availabilityArr.filter(
      (entry) => entry.role === UserRoleEnum.INTERVIEWER
    );

    return this.findCommonSlots(candidateAvailability, interviewersAvailability);
  }

  private findCommonSlots(
    candidateSlots: { day: string, startHour: number, endHour: number }[], 
    interviewerSlots: { day: string, startHour: number, endHour: number }[]
  ) {
    const availableTimeSlots = [];

    candidateSlots.forEach((candidateSlot) => {
      interviewerSlots.forEach((interviewerSlot) => {
        if (candidateSlot.day === interviewerSlot.day) {
          for (let hour = candidateSlot.startHour; hour < candidateSlot.endHour; hour++) {
            if (hour >= interviewerSlot.startHour && hour < interviewerSlot.endHour) {
              const startHourFormatted = hour % 12 || 12;
              const endHourFormatted = (hour + 1) % 12 || 12;
              const startAMPM = hour < 12 ? 'AM' : 'PM';

              const formattedTimeSlot = `${startHourFormatted} - ${endHourFormatted} ${startAMPM}`;

              let timeSlotGroup = availableTimeSlots.find(group => group.day === candidateSlot.day);
              if (!timeSlotGroup) {
                timeSlotGroup = { day: candidateSlot.day, timeSlots: [] };
                availableTimeSlots.push(timeSlotGroup);
              }

              timeSlotGroup.timeSlots.push(formattedTimeSlot);
            }
          }
        }
      });
    });

    return availableTimeSlots;
  }
}

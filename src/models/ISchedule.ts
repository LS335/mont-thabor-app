import { ISystem } from './ISystem';
import { Dayjs } from 'dayjs';

export interface ISchedule {
  id: string;
  employeeId: string;
  startDate: Dayjs;
  endDate: Dayjs;
  system: ISystem;
}

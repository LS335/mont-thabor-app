import { ISystem } from './ISystem';

export interface ISchedule {
  id: string;
  employeeId: string;
  startDate: Date;
  endDate: Date;
  system: ISystem;
}

import React, { useMemo } from 'react';
import { IEmployee } from '../models/IEmployee';
import { ISchedule } from '../models/ISchedule';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';
import { EmployeeLane } from './EmployeeLane';

const dummyEmployee: IEmployee[] = [
  {
    id: '01',
    name: '佐藤',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    system: {} as any,
  },
  {
    id: '02',
    name: '伊藤',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    system: {} as any,
  },
  {
    id: '03',
    name: '加藤',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    system: {} as any,
  },
];

const dummySchedule: ISchedule[] = [
  {
    id: '001',
    employeeId: '01',
    startDate: dayjs('2021-10-15T9:00'),
    endDate: dayjs('2021-10-15T9:00').add(1, 'hour'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    system: {} as any,
  },
  {
    id: '002',
    employeeId: '01',
    startDate: dayjs('2021-10-15T11:00'),
    endDate: dayjs('2021-10-15T11:00').add(1, 'hour'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    system: {} as any,
  },
  {
    id: '003',
    employeeId: '02',
    startDate: dayjs('2021-10-15T15:00'),
    endDate: dayjs('2021-10-15T15:00').add(1, 'hour'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    system: {} as any,
  },
  {
    id: '004',
    employeeId: '03',
    startDate: dayjs('2021-10-15T10:00'),
    endDate: dayjs('2021-10-15T10:00').add(1, 'hour'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    system: {} as any,
  },
];

const useStyles = makeStyles((theme) => ({
  lane: {
    border: `1px solid ${theme.palette.divider}`,
    borderBottom: 'none',
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    '&:last-child': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    '& .laneHeader': {
      borderRight: `1px solid ${theme.palette.divider}`,
      width: '100px',
      boxSizing: 'border-box',
      flexGrow: 0,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
    },
    '& .timeCell': {
      borderRight: `1px solid ${theme.palette.divider}`,
      flexGrow: 1,
      flexBasis: 0,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      '&:last-child': {
        borderRight: 'none',
      },
    },
  },
}));

const colors = [red[500], purple[500]];

const getColor = (n: number) => {
  const index = n % 2;
  return colors[index];
};

export const ScheduleList: React.FC = () => {
  const styles = useStyles();
  const headerCells = useMemo(() => {
    const cells: JSX.Element[] = [];
    for (let i = 6; i <= 19; i++) {
      cells.push(
        <div key={i} className="timeCell">
          {i}
        </div>,
      );
    }
    return cells;
  }, []);
  const lanes = useMemo(() => {
    return dummyEmployee.map((employee, index) => {
      const schedules = dummySchedule.filter(
        (r) => r.employeeId === employee.id,
      );
      return (
        <EmployeeLane
          key={employee.id}
          cellWidth={30}
          employee={employee}
          schedules={schedules}
          className={styles.lane}
          backgroundColor={getColor(index)}
        />
      );
    });
  }, [styles.lane]);
  return (
    <div>
      <div className={styles.lane}>
        <div className="laneHeader"></div>
        {headerCells}
      </div>
      {lanes}
    </div>
  );
};

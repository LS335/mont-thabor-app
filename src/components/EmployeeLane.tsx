import React, { useMemo } from 'react';
import { IEmployee } from '../models/IEmployee';
import { ISchedule } from '../models/ISchedule';
import { Property } from 'csstype';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ScheduleBar } from './ScheduleBar';

type Props = JSX.IntrinsicElements['div'] & {
  employee: IEmployee;
  schedules: ISchedule[];
  cellWidth: number;
  backgroundColor: Property.BackgroundColor;
};

const useStyles = makeStyles<
  Theme,
  {
    backgroundColor: Property.BackgroundColor;
  }
>((theme) => ({
  header: {
    backgroudColor: (p) => p.backgroundColor,
    color: (p) => theme.palette.getContrastText(p.backgroundColor),
  },
}));

export const EmployeeLane: React.FC<Props> = (props) => {
  const { employee, schedules, cellWidth, backgroundColor, ...elementAttr } =
    props;
  const styles = useStyles({ backgroundColor });

  const cells = useMemo(() => {
    const r: JSX.Element[] = [];
    for (let i = 0; i <= 11; i++) {
      r.push(<div key={i} className="timeCell"></div>);
    }
    return r;
  }, []);

  const bars = useMemo(() => {
    return schedules.map((r) => {
      return (
        <ScheduleBar
          key={r.id}
          backgroundColor={backgroundColor}
          beginHour={6}
          schedule={r}
          hourWidth={cellWidth}
          leftOffset={100}
        />
      );
    });
  }, [schedules, backgroundColor, cellWidth]);
  return (
    <div {...elementAttr}>
      {bars}
      <div className={`laneHeader ${styles.header}`}>
        <p>{employee.name}</p>
      </div>
      {cells}
    </div>
  );
};

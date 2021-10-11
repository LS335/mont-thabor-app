import React, { useState, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, useForm } from 'react-hook-form';
import { IEmployee } from '../models/IEmployee';
import { ISchedule } from '../models/ISchedule';
import dayjs from 'dayjs';
import { DateTimePicker } from '@material-ui/pickers';

const dummyEmployee: IEmployee[] = [
  {
    id: '001',
    name: '佐藤',
    system: {} as any,
  },
  {
    id: '002',
    name: '伊藤',
    system: {} as any,
  },
  {
    id: '003',
    name: '加藤',
    system: {} as any,
  },
];

const initSchedule: ISchedule = {
  id: '001',
  employeeId: '001',
  startDate: dayjs(),
  endDate: dayjs().add(1, 'hour'),
  system: {
    createDate: new Date(),
    createUser: {
      displayName: '伊藤',
      email: '',
      face: 'https://bit.ly/3pM3urc',
    },
    lastUpdate: new Date(),
    lastUpdateUser: {
      displayName: '伊藤',
      email: '',
      face: 'https://bit.ly/3pM3urc',
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
  },
  paper: {
    padding: theme.spacing(1),
    '& > div': {
      marginBottom: theme.spacing(2),
    },
  },
  rightActions: {
    textAlign: 'right',
  },
  cancelButton: {
    color: theme.palette.error.main,
  },
}));

export const Schedule: React.FC = () => {
  const styles = useStyles();
  const { control } = useForm<ISchedule>({
    defaultValues: initSchedule,
    mode: 'onBlur',
  });

  const [employees] = useState<IEmployee[]>(dummyEmployee);
  const employeesMenuItem = useMemo(() => {
    return employees.map((employee) => (
      <MenuItem key={employee.id} value={employee.id}>
        {employee.name}
      </MenuItem>
    ));
  }, [employees]);
  return (
    <React.Fragment>
      <Container className={styles.root} maxWidth="sm">
        <Paper className={styles.paper}>
          <Typography variant="h6" gutterBottom>
            シフト日時
          </Typography>
          <FormControl>
            <InputLabel id="employee-label">名前</InputLabel>
            <Controller
              name="employeeId"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  label="employee-label"
                  value={value}
                  onChange={onChange}
                >
                  {employeesMenuItem}
                </Select>
              )}
            />
          </FormControl>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Controller
                control={control}
                name="startDate"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    onChange={onChange}
                    format="YYYY/MM/DD HH:mm"
                    ampm={false}
                    minutesStep={30}
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                control={control}
                name="endDate"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    onChange={onChange}
                    ampm={false}
                    minutesStep={30}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Button className={styles.cancelButton} startIcon={<DeleteIcon />}>
              削除
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DoneIcon />}
            >
              保存
            </Button>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

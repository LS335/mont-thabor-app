import React from 'react';
import ReactDOM from 'react-dom';
import { Schedule } from './components/Schedule';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Utils from '@date-io/dayjs';
import 'dayjs/locale/ja';
import { Dayjs } from 'dayjs';

class ExtendDateUtils extends Utils {
  getCalendarHeaderText(date: Dayjs) {
    return date.format('YYYY年 MMM');
  }

  getDatePickerHeaderText(date: Dayjs) {
    return date.format('M/D');
  }
}

ReactDOM.render(
  <MuiPickersUtilsProvider utils={ExtendDateUtils} locale="ja">
    <Schedule />
  </MuiPickersUtilsProvider>,
  document.getElementById('container'),
);

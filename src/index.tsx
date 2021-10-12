import React from 'react';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './components/Routing';
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
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </MuiPickersUtilsProvider>,
  document.getElementById('container'),
);

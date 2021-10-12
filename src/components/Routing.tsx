import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Schedule } from './Schedule';
import { ScheduleList } from './ScheduleList';

export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path="/schedule" component={Schedule} />
      <Route path="/" exact component={ScheduleList} />
    </Switch>
  );
};

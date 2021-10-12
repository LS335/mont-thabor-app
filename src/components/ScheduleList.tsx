import React from 'react';
import { Link } from 'react-router-dom';

export const ScheduleList: React.FC = () => {
  return (
    <div>
      <p>
        <Link to="/schedule">シフト予約</Link>
      </p>
    </div>
  );
};

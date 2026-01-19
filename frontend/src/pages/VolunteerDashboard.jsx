import React from 'react';
import VolunteerDashboard from '../components/volunteer/VolunteerDashboard';

const VolunteerDashboardPage = ({ volunteerData }) => {
  return (
    <VolunteerDashboard volunteerData={volunteerData} />
  );
};

export default VolunteerDashboardPage;
import React from 'react'
import BusManagement from './BusManagement'
import UserDetails from './UserDetails'
import ScheduleManagement from './ScheduleManagement'
import RouteManagement from './RouteManagement'

const AdminDashboard = () => {
  return (
    <div>
        <RouteManagement/>
        <BusManagement/>
        <ScheduleManagement/>
        
    </div>
  )
}

export default AdminDashboard
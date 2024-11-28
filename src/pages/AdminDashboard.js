import React from 'react';
import AddInstitution from '../components/Admin/AddInstitude';
import AdminProfile from '../components/Admin/AdminProfile';
import AddCourse from '../components/Admin/AddCourses';


function AdminPage1() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddCourse/>
      <AddInstitution />
      <AdminProfile />
    </div>
  );
}

export default AdminPage1;

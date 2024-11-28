// src/pages/InstitutePage.js
import React from 'react';
import AddCourse from '../components/Institude/Addcourse';
import InstituteProfile from '../components/Institude/InstitudeProfile'; // Correct import path


function InstitutePage() {
  return (
    <div>
      <h2>Institute Dashboard</h2>
      <AddCourse />
      <InstituteProfile />
    </div>
  );
}

export default InstitutePage;

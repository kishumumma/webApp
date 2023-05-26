import React from 'react';
import {useLocation} from "react-router-dom"

const Dashboard = () => {
  const location = useLocation();
  // const formData = props.state;
  console.log("Location", location.state.formData);
  const data=location.state.formData
  // Access the form data properties
  // const { name, email, password, passwordConfirm } = formData;

  return (
    <div>
      <h2>Welcome to the Dashboard! {data.name}</h2>
    
    </div>
  );
};

export default Dashboard;

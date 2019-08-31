import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

class Registration extends React.Component {
  render() {
    return (
      <div className="wrapper bg-light">
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
          <Card style={{ width: "70%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
        <Card.Body>
      <h1>Registration</h1>
      <p>To register for Co-Next, you must complete the registration form below. This will require submission of a resume and signing up to attend a mandatory Fireside Chat. The deadline is September 12th, at 11:59 pm. Please retain the submitted form emailed to you post-submission for your records.</p>
<h3>Resume Format:</h3>
<p> Submit your PDF resume to the registration form below named "[Lastname]_[Firstname]_[GraduationYear]"Example: Smith_Jane_2020 (or it will not be included in the resume book) For advice on creating your resume, visit the "Resume Tips" tab. </p>

      <Button variant="dark" href="https://forms.gle/Gfm4ZkBXAuehoYeAA">Registration</Button>
      </Card.Body>
      </Card>
      </div>
</div>
    );
  }
}
export default Registration

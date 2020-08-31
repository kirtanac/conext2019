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
              <p>Please register via the Registration form below. Your resume will be included in the resume book as long as it is submitted before <b>Monday, September 7th at 11:59 pm </b>. Please retain the email sent after submission for your records.</p>

          <Button variant="dark" href="https://docs.google.com/forms/d/e/1FAIpQLSffBt0s9yT-QLz_CVpJPamwz7WexFHWEM4AsQJ2g3_V2CCUQw/viewform"> Register Here</Button>
            <p></p>

          <p> Questions? Email conext2020@gmail.com.</p>
      </Card.Body>
      </Card>
      </div>
</div>
    );
  }
}
export default Registration

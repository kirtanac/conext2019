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
              <p>Please register via the Late Registration form below. Your resume will not be included in the resume book as resume submission closed Sunday, September 15th, at 11:59 pm. Please retain the email sent after submission for your records.</p>

          <Button variant="dark" href="https://forms.gle/C66kLk4F56AEbNRx5">Late Registration</Button>
            <p></p>

          <p> Questions? Email conext2019reg@gmail.com.</p>
      </Card.Body>
      </Card>
      </div>
</div>
    );
  }
}
export default Registration

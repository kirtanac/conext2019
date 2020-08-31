import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
class Contact extends React.Component {
  render() {
    return (<div className="wrapper bg-light">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
        <Card style={{ width: "70%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
      <Card.Body>
    <h1>Contact</h1>
    <p>Email the Co-Next committee at conext2020@gmail.com with any questions related to the conference or if you're unable to attend the mandatory Fireside Chats.</p>

    <Button variant="dark" href="mailto:conext2020@gmail.com">Email us!</Button>
      <p></p>
    </Card.Body>
    </Card>
    </div>
</div>
);
  }
}
export default Contact

import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
class About extends React.Component {
  render() {
    return (
      <div className="wrapper bg-light">
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
      <Card style={{ width: "70%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Img style={{elevation: '0' }} src="/Co-Next 2019.png" />
    <Card.Body>
      <Card.Title>About Co-Next 2019</Card.Title>
      <Card.Text>
        Co-Next is a recruiting and networking event that connects University of Michigan students holding feminine identities in all disciplines and of all ages with top firms in marketing, accounting, strategy consulting, finance, and more.  At the event, attendees have the opportunity to speak to and make personal connections with women leaders from top companies across the US.
      </Card.Text>

<Card.Title>Attending Co-Next</Card.Title>

      <Card.Text>
      <p>Interested in attending Co-Next? If you're interested in learning more about being a women in business or networking with top companies, follow these steps.</p>

      <p>(1) Register! Submit your PDF resume and sign up for a mandatory Fireside Chat via the Registration button below.</p>

      <p>(2) Prepare! Attend one of the Mandatory Fireside Chats. Prepare any questions you might have for companies or the Co-Next committee.</p>

      <p>(3) Co-Next! </p>
      </Card.Text>
      <Button variant="dark" href="/registration">Registration</Button>
      <p></p>
        <Card.Text> Questions? Email conext2019reg@gmail.com.</Card.Text>
    </Card.Body>
  </Card>
  </div>
    </div>
  );
  }
}
export default About

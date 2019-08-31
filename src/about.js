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
        Co-Next is a recruiting and networking event that connects women and those holding feminine identities in all disciplines and of all ages at the University of Michigan with the leading companies in the world.  At the event, you have the opportunity to speak to women leaders from top companies across the US.
      </Card.Text>
      <Card.Text>
Co-Next has successfully placed the next generation of women business leaders at firms in marketing, accounting, strategy consulting, finance and more.  It's not only an event that can help secure you a job, but also a chance for you to make personal connections with industry leaders.
      </Card.Text>

<Card.Title>How to Attend Co-Next</Card.Title>

      <Card.Text>
      <p>Interested in attending Co-Next? If you're free for the date listed above, and interested in learning more about being a women in business or networking with top companies, follow the below steps.</p>

      <p>(1) Register! Submit your PDF resume and sign up for a mandatory Fireside Chat via the Registration button below. For advice on creating your resume, visit the "Resume Tips" tab.</p>

      <p>(2) Prepare! Attend one of the Mandatory Fireside Chats. Prepare any questions you might have for companies or the Co-Next committee.</p>

      <p>(3) Co-Next! </p>
      </Card.Text>
      <Button variant="dark" href="/registration">Registration</Button>
    </Card.Body>
  </Card>
  </div>
    </div>
  );
  }
}
export default About

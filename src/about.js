import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
class About extends React.Component {
  render() {
    return (
      <div className="wrapper bg-light">
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
      <Card style={{ width: "70%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Img style={{elevation: '0' }} src="/2020_header.png" />
    <Card.Body>
      <Card.Title>About Co-Next 2020</Card.Title>
      <p> test </p>
      <Card.Text>
        Co-Next is a recruiting and networking event that connects University of Michigan students holding feminine identities in all disciplines and of all ages with top firms in marketing, accounting, strategy consulting, finance, and more.  At the event, attendees have the opportunity to speak to and make personal connections with women leaders from top companies across the US.
      </Card.Text>

<Card.Title>Attending Co-Next</Card.Title>

      <Card.Text>
      <p>Interested in attending Co-Next? If you're interested in learning more about being a women in business or networking with top companies, follow these steps.</p>

      <p><b>(1) Register! </b>Submit your PDF resume and sign up for a mandatory Fireside Chat via the Registration button below before Monday, September 7th at 11:59PM ET.</p>
      <Button variant="dark" href="https://docs.google.com/forms/d/e/1FAIpQLSffBt0s9yT-QLz_CVpJPamwz7WexFHWEM4AsQJ2g3_V2CCUQw/viewform">Register Here</Button>
      <p></p>
      <p><b>(2) Prepare!</b> Take part in one of the Mandatory Fireside Chats. Prepare any questions you might have for companies or the Co-Next committee.</p>

      <text><b><i>Fireside Chats (link to virtual event will follow in confirmation email):</i></b></text>
      <p><u>Session I:</u> Tuesday, September 8th • 5:00 - 6:00 PM </p>
      <p><u>Session II:</u> Wednesday, September 9th • 5:00 - 6:00 PM </p>

      <p><b>(3) Attend Co-Next!</b> The event will be on Friday, September 11 from 4-6PM ET. </p>
      </Card.Text>

      <Button variant="dark" href="/faqs">FAQS</Button>
      <p></p>
        <Card.Text> Questions? Email conext2020@gmail.com.</Card.Text>
    </Card.Body>
  </Card>
  </div>
    </div>
  );
  }
}
export default About

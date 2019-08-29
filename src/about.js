import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
class About extends React.Component {
  render() {
    return (
      <div className="wrapper bg-dark">
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
      <Card style={{ width: "70%" }}>
    <Card.Img src="/Co-Next-2019.jpg" />
    <Card.Body>
      <Card.Title>About Co-Next 2019</Card.Title>
      <Card.Text>
        Co-Next is a recruiting and networking event that connects women and those holding feminine identities in all disciplines and of all ages at the University of Michigan with the leading companies in the world.  At the event, you have the opportunity to speak to women leaders from top companies across the US.
      </Card.Text>
      <Card.Text>
Co-Next has successfully placed the next generation of women business leaders at firms in marketing, accounting, strategy consulting, finance and more.  It's not only an event that can help secure you a job, but also a chance for you to make personal connections with industry leaders.
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

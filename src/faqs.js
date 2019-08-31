import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
class FAQs extends React.Component {
  render() {
    return (  <div className="wrapper bg-light">
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
          <Card style={{ width: "70%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Body>
      <h1 style={{textAlign:'center'}}>FAQs</h1>
        <Container style = {{width: "80%",  justifyContent:'space-between'}}>
        <Row>
          <h3>Who can attend Co-Next?</h3>
          <p>Any woman and people holding feminine identities in any undergraduate program at the University of Michigan may attend Co-Next. You do not have to be a Junior or Senior. In fact, we encourage Freshmen and Sophomores to attend since this will be a very practical experience. </p>
        </Row>
        <Row>
          <h3>Does it cost money to attend Co-Next?</h3>
          <p>It's free, so encourage your friends to attend with you! </p>
        </Row>
        <Row>
          <h3>Do I have to attend a Fireside Chat?</h3>
          <p>The Fireside chat is mandatory and it is meant to help you with your understanding of the companies in attendance, your networking skills, what to wear, what to talk about with companies, and many more (plus there's free food!). You will also have the opportunity to ask questions of your own. Although the Fireside Chat is mandatory, if you believe you should be exempt from attending (because you have attended the Fireside Chat for the past two years, for example), please email conext2019reg@gmail.com explaining why you should be exempt from attending the Fireside Chat. The Co-Next planning committee will review your case and email you back. </p>
          <p> TODO: add Fireside Chat date, time, locations and email for questions</p>
        </Row>
        <Row>
          <h3>What should I wear to Co-Next and to the Fireside Chats?</h3>
          <p>The dress code for the Fireside Chats is business casual. Business casual includes a reasonable length skirt (not mini-skirt) or full-length trousers of a non-jeans material combined with a top (such as a dress shirt, polo, or sweater set). Think Banana Republic or Ann Taylor.</p>
        </Row>
        <Row>
          <h3>What should I talk about with the companies?</h3>
          <p>Our dress code for Co-Next is business professional attire, which means you should wear a suit. If you do not own a suit, an acceptable alternative would be nice, tailored dress pants or a knee-length dress skirt and a nice shirt. A safe outfit is black dress pants, a white shirt, and a black blazor. The companies that will be in attendance expect students to be well dressed. We ask you not to wear no-sleeve shirts, regular t-shirts, jeans, shorts or sweatpants. More detail regarding this matter will be given at the Fireside Chat. </p>
        </Row>
        <Row>
          <h3>Do I have to make a resume?</h3>
          <p>Yes, you must submit your resume via the 'Registration' tab when you register for Co-Next. We will compile a resume book of all attendees to hand out to the companies. Thus, when you approach companies during the event, you do not need to hand in your resume since they already have yours on file. Instructions are included on the 'Registration' page</p>
        </Row>
        <Row>
          <h3>What networking or job opportunities will be available at Co-Next?</h3>
          <p>It depends on the company, but all companies will be looking for candidates in full-time positions as well as internship positions. You may ask the company then what kind of jobs they have to offer, but it may be a good idea to research the company beforehand.</p>

              <p> More questions? Ask via the Contact tab or email conext2019reg@gmail.com.</p>
        </Row>

      </Container>

    </Card.Body>
  </Card>
  </div>
      </div>
    );
  }
}
export default FAQs

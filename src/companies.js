import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
class Companies extends React.Component {
  render() {
    return (<div className="wrapper bg-dark" style={{ height: "100%"}}>


    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
      <Card className="wrapper bg-light" style={{ width: "70%" }}>
    <Card.Body>
      <h1 style={{textAlign:'center'}}>Companies</h1>
        <Container style = {{width: "50%",  justifyContent:'space-between'}}>
        <Row>
          <Col style={{textAlign:'center'}}>Company 1</Col>
          <Col style={{textAlign:'center'}}>Company 2</Col>
        </Row>
        <Row>
          <Col style={{textAlign:'center'}}>Company 3</Col>
          <Col style={{textAlign:'center'}}>Company 4</Col>
        </Row>
        <Row>
          <Col style={{textAlign:'center'}}>Company 5</Col>
          <Col style={{textAlign:'center'}}>Company 6</Col>
        </Row>
        <Row>
          <Col style={{textAlign:'center'}}>Company 7</Col>
          <Col style={{textAlign:'center'}}>Company 8</Col>
        </Row>
        <Row>
          <Col style={{textAlign:'center'}}>Company 9</Col>
          <Col style={{textAlign:'center'}}>Company 10</Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>
  </div>
      </div>
    );
  }
}
export default Companies

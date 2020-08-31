import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
class Companies extends React.Component {
  render() {
    return (<div className="wrapper bg-light" style={{ height: "100%"}}>


    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70%'}}>
      <Card style={{ width: "70%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Body>
      <h1 style={{textAlign:'center'}}>Companies</h1>
        <Container style = {{width: "70%",  justifyContent:'space-between'}}>

      <Row style = {{ justifyContent:'space-between', marginTop: 14}}>

      <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Img style={{elevation: '0' }} src="/company_logos/capital1.jpeg" />
    </Card>

    <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
  <Card.Img style={{elevation: '0' }} src="/company_logos/GCMgrosvenor.png" />
  </Card>

      <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Img style={{elevation: '0' }} src="/company_logos/kraft.png" />
    </Card>

        </Row>

        <Row style = {{ justifyContent:'space-between', marginTop: 14}}>
          <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
        <Card.Img style={{elevation: '0' }} src="/company_logos/ms2.png" />
        </Card>


        </Row>



{/*        <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
      <Card.Img style={{elevation: '0' }} src="/company_logos/capital1.jpeg" />
      </Card>

      <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Img style={{elevation: '0' }} src="/company_logos/cardinalhealthlogo1.jpg" />
    </Card>



        </Row>

      <Row style = {{ justifyContent:'space-between', marginTop: 14}}>

            <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
          <Card.Img style={{elevation: '0' }} src="/company_logos/GCMgrosvenor.png" />
          </Card>

          <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
        <Card.Img style={{elevation: '0' }} src="/company_logos/kpmg.png" />
        </Card>

        <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
      <Card.Img style={{elevation: '0' }} src="/company_logos/salesforce.png" />
      </Card>



        </Row>

  <Row style = {{ justifyContent:'space-between', marginTop: 14, alignItems:'center'}}>



            <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
          <Card.Img style={{elevation: '0' }} src="/company_logos/walgreens.png" />
          </Card>

      <Card style={{ width: "30%", boxShadow: "2px 2px #D3D3D3", elevation: '0' }}>
    <Card.Img style={{elevation: '0' }} src="/company_logos/whirlpool.png" />
    </Card>

        </Row>
        */}
      </Container>
    </Card.Body>
  </Card>
  </div>
      </div>
    );
  }
}
export default Companies

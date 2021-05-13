import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";
import Onboarding from './Onboarding';
import Configuration from './Configuration';
 

function App() {
  return (
    
    <div className="App">
    Simple select element of react-bootstrap
        <hr />
       <Container>
                 <Row>
                     <Col>
                         <Tabs defaultActiveKey="onboarding" 
                               id="controlled-tab-example">
                             <Tab eventKey="onboarding" title="Onboarding">
                                 <Onboarding />
                             </Tab>
                             <Tab eventKey="configuration" title="Configuration">
                                 <Configuration />
                             </Tab>
                         </Tabs>
                     </Col>
                 </Row>
             </Container>
    </div>
  );
}

export default App;

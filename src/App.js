import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './component/Footer';
import Header from './component/Header';
import Content from './component/Content';

function App() {
  return (
    <Container>
      <Row>
        <Col><Header /></Col>
      </Row>
      <Row>
        <Col><Content /></Col>
      </Row>
      <Row>
        <Col><Footer /></Col>
      </Row>
    </Container>
  );
}

export default App;

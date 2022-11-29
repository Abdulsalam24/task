import { Button, Col, Container, Navbar, NavDropdown, Row } from 'react-bootstrap';

const Home = (props) => {
  return (
    <div>
      <header>
        <Navbar bg="dark" expand="lg">
          <Container fluid className="text-white gap-4 px-3 py-2">
            <h4>React Bootstrap</h4>

            <Row className="mr-auto">
              <Col md="auto"><span>Home</span></Col>
              <Col md="auto"> <span>Getting Started</span></Col>
            </Row>

            <NavDropdown title="v1.6.0 (Bootstrap 4.6)" id="nav-dropdown" className="text-primary">
              <NavDropdown.Item eventKey="4.1">v1.6.0 (Bootstrap 4.6)</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>

        <div className="rw">
          <div className="content-body">
            <div>
              <h1 className="content-header">React Bootstrap</h1>
            </div>
            <div className="content-row">
              The most popular front-end framework
            </div>
            <div className="content-row">Rebuilt for React.</div>
            <Row className='px-3 gap-3'>
              <Col sm={3}>
                <Button variant="outline-light">Get Started</Button>
              </Col>
              <Col sm={4}>
                <Button variant="outline-light" disabled>
                  Components
                </Button>
              </Col>
            </Row>
          </div>
        </div>

      </header>
      <Container>
        <Row className="px-3 pt-3 gap-3">
          <Col sm>
            <h2 className="col-headers">Rebuilt with React </h2>
            React-Bootstrap replaces the Bootstrap Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum eu malesuada augue,
            efficitur pharetra mi. Morbi non rutrum ex. Mauris mollis pulvinar
            quam, sed pellentesque nulla commodo at. Ut volutpat ligula non
            ullamcorper dapibus. Curabitur sit amet metus quis enim eleifend
            fringilla. Nam in risus cras amet.
          </Col>
          <Col sm>
            <h2 className="col-headers">Bootstrap at its core </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </Col>
          <Col sm>
            <h2 className="col-headers">Accessible by default </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

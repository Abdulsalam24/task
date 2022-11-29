import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const Navigation = ({ state }) => {

  return (
    <NavBar>
      <NavBar.Brand>React Router Practice</NavBar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/users'>Users</Nav.Link>
        </Nav.Item>


        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          {state &&
            state.map((user, index) => {
              return (
                <NavDropdown.Item href={`/users/${user.id}`} key={index}>
                  {user.username}
                </NavDropdown.Item>
              )
            })}

        </NavDropdown>
      </Nav>

    </NavBar>
  )
}

export default Navigation;
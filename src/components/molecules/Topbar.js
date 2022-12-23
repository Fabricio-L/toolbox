import { Navbar, Container } from 'react-bootstrap'
import './Topbar.css'

const Topbar = ({ title }) => {
  return (
    <Navbar bg="primary" variant="dark" className="topbar">
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Topbar

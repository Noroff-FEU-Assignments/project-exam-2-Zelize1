import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Signup from "../signup/Signup";
import About from "../about/About";
import Courses from "../courses/Courses";

function Layout() {
    return (
    <Router>
        <Navbar bg="light" expand="lg">
    <NavLink to="/" exact>
        <a href="/" className="navbar-left">
            <img src="logo.png" alt="Solhjerter" className="navbar-logo"/>
        </a>
    </NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/courses">KURS</Nav.Link>
      <Nav.Link href="/about">OM OSS</Nav.Link>
      <Nav.Link href="/signup">PÅMELDING</Nav.Link>
      <Nav.Link href="/contact">KONTAKT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Container>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
    </Switch>
</Container>
</Router>
    );
}

export default Layout;
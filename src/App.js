import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Signup from "./components/signup/Signup";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Login from "./components/admin/login/Login";
import AdminPage from "./components/admin/adminPage/AdminPage";

import './sass/style.scss';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
      <Layout />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/admin-page" component={AdminPage} />
    </Switch>
      </Router>
    </AuthProvider>
    <Footer />
  
  </>
  );
}
export default App;

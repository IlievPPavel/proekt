import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './App.css';
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Specialties from "./components/specialties";
import Contacts from "./components/contacts";
import Gmap from "./components/gmap";
import {GoogleApiWrapper} from "google-maps-react";
import RegistrationForm from "./components/registrationForm";



const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

const App = () => {
  return (
      <Router>
    <div className='App'>


        <Navbar sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">AcadNaval</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/specialties">Специалности</Nav.Link>
                    <Nav.Link href="/contacts">Контакти</Nav.Link>
                    <Nav.Link href="/login">Вход</Nav.Link>
                    <Nav.Link href="/register">Регистрация</Nav.Link>


                </Nav>
            </Container>
        </Navbar>

        <Routes>
        <Route path='/' element={
            <>


                <Header />
                <Section1 />
                <Section2 />
                {/*<Gmap />*/}
            </>
        }


        />
        <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/specialties' element={<Specialties />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/registrationForm' element={<RegistrationForm />} />

        </Routes>
        <Footer />
    </div>

      </Router>
  )
}


export default App

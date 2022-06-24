import Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList  from './components/student-list.component'

function App() {
  return (
      <div className='App'>
        <Navbar bg="dark" variant='dark'>
          <Container>
            <Navbar.Brand>
              <Link to={"/CreateStudent"} className='nav-link'>
                React MERN Stack CRUD
              </Link>
            </Navbar.Brand>
            <Nav className='justify-content-end'>
              <Nav>
                <Link to={"/CreateStudent"} className='nav-link'>
                  Create Student
                </Link>
              </Nav>
              <Nav>
                <Link to={"/StudentList"} className='nav-link'>
                  Student List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      <Container>
        <Row>
          <Col md='12'>
            <div className='wrapper'>
              <Routes>
                  <Route exact path='/' element={<CreateStudent />} />
                  <Route path='/create-student/*' element={<CreateStudent />} />
                  <Route path='/edit-student/:id/*' element={<EditStudent />} />
                  <Route path='/student-list/*' element={<StudentList />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default App;

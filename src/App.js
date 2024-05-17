import './App.css';
import Header from './Components/Header';
import AddStudent from './Components/AddStudent';
import AllStudents from './Components/AllStudents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<AllStudents />} /> 
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

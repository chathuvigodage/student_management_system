import React, {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddStudent(){
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[gender, setGender] = useState("");

    function setData(e){
        e.preventDefault();
        
        const newStudent = {
            name,
            age,
            gender
        }
        axios.post("http://localhost:8070/student/add", newStudent).then(() =>{
            alert("Student Added")
            setName("");
            setAge("");
            setGender("");

        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div className="container">
            <Form onSubmit={setData}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" onChange={(e) =>{
                     setName(e.target.value);
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="age" placeholder="Enter age" onChange={(e) =>{
                     setAge(e.target.value);
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="gender" placeholder="Enter gender" onChange={(e) =>{
                    setGender(e.target.value);
                }}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default AddStudent;
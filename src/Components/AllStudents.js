import React, { useState, useEffect } from "react";
import axios from "axios";
import EditStudentForm from "./EditStudentForm";

function AllStudents() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8070/student/")
                .then((res) => {
                    setStudents(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getStudents();
    }, []);

    const handleEdit = (student) => {
        setEditingStudent(student);
    };

    const handleCancelEdit = () => {
        setEditingStudent(null);
    };

    const handleUpdate = async (updatedData) => {
        try {
            await axios.put(`http://localhost:8070/student/update/${editingStudent._id}`, updatedData);
            // Refresh student data after successful update
            const res = await axios.get("http://localhost:8070/student/");
            setStudents(res.data);
            setEditingStudent(null);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>All Students</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleEdit(student)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editingStudent && (
                <EditStudentForm
                    student={editingStudent}
                    onSave={handleUpdate}
                    onCancel={handleCancelEdit}
                />
            )}
        </div>
    );
}

export default AllStudents;

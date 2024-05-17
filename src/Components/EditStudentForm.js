import React, { useState } from "react";

function EditStudentForm({ student, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: student.name,
        age: student.age,
        gender: student.gender
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onCancel}>&times;</span>
                <h2>Edit Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default EditStudentForm;

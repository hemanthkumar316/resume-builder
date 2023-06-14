import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
const ResumeForm = () => {
  const [formData, setFormData] = useState({
    education: [],
    experience: [],
    skills: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Display the form data in the console
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData,[name]: value,}));
  };

  const handleAddEducation = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: [...prevFormData.education, {}],
    }));
  };

  const handleAddExperience = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: [...prevFormData.experience, {}],
    }));
  };

  const handleEducationInputChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedEducation = [...prevFormData.education];
      updatedEducation[index] = { ...updatedEducation[index], [name]: value };
      return { ...prevFormData, education: updatedEducation };
    });
  };

  const handleDeleteEducation = (index) => {
    setFormData((prevFormData) => {
      const updatedEducation = [...prevFormData.education];
      updatedEducation.splice(index, 1);
      return { ...prevFormData, education: updatedEducation };
    });
  };

  const handleExperienceInputChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedExperience = [...prevFormData.experience];
      updatedExperience[index] = { ...updatedExperience[index], [name]: value };
      return { ...prevFormData, experience: updatedExperience };
    });
  };

  const handleDeleteExperience = (index) => {
    setFormData((prevFormData) => {
      const updatedExperience = [...prevFormData.experience];
      updatedExperience.splice(index, 1);
      return { ...prevFormData, experience: updatedExperience };
    });
  };
  const handleSkillsChange = (skills) => {
   setFormData((prevFormData) => ({...prevFormData,skills,}));
 };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="education">
        <Form.Label>Education</Form.Label><br/>
        {formData.education.map((education, index) => (
          <div key={index}>
          <p>Education-{index+1}</p>
            <Form.Control
              type="text"
              name="institute"
              placeholder="Institute"
              onChange={(e) => handleEducationInputChange(index, e)}
            /><br/>
            <Form.Control
              type="text"
              name="year"
              placeholder="Year"
              onChange={(e) => handleEducationInputChange(index, e)}
            /><br/>
            <Form.Control
              type="text"
              name="degree"
              placeholder="Degree"
              onChange={(e) => handleEducationInputChange(index, e)}
            /><br/>
          <Button variant='danger' onClick={() => handleDeleteEducation(index)}>Remove</Button><br/><br/>
          </div>
        ))}
        <Button variant="secondary" onClick={handleAddEducation}>
          Add Education
        </Button>
      </Form.Group>

      <Form.Group controlId="experience">
        <Form.Label>Experience</Form.Label><br/>
        {formData.experience.map((experience, index) => (
          <div key={index}>
          <p>Experience-{index+1}</p>

            <Form.Control
              type="text"
              name="company"
              placeholder="Company"
              onChange={(e) => handleExperienceInputChange(index, e)}
            /><br/>
            <Form.Control
              type="text"
              name="year"
              placeholder="Year"
              onChange={(e) => handleExperienceInputChange(index, e)}
            /><br/>
            <Form.Control
              type="text"
              name="designation"
              placeholder="Designation"
              onChange={(e) => handleExperienceInputChange(index, e)}
            /><br/>
            <Button
              variant="danger"
              onClick={() => handleDeleteExperience(index)}
            >
              Remove
            </Button><br/><br/>
          </div>
        ))}
        <Button variant="secondary" onClick={handleAddExperience}>
          Add Experience
        </Button>
      </Form.Group>
      <Form.Group controlId="skills"><br/>
        <Form.Label>Skills</Form.Label>
        <TagsInput value={formData.skills} onChange={handleSkillsChange} />
      </Form.Group><br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ResumeForm;

import React, { useState } from 'react';
import styles from './styles.module.css';
import options from './config.json';
import { CopyTaskItemOption, OrganizationToOrganizationForm, ProjectToProjectForm } from './partials';

const projects = [
    { id: '1', name: 'Project 1' },
    { id: '2', name: 'Project 2' },
    { id: '3', name: 'Project 3' }
];

const organizations = [
    { id: '1', name: 'Organization 1' },
    { id: '2', name: 'Organization 2' },
    { id: '3', name: 'Organization 3' }
];

const CopyTaskItemForm = ({ handleFormSubmit }) => {
    const [formData, setFormData] = useState({
        copyMethod: '',
        targetProject: '',
        targetOrganization: '',
        orgTargetProject: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMethodChange = (copyMethod) => {
        setFormData(prevState => ({
            ...prevState,
            copyMethod
        }));
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p>Copy Task Item</p>
            {options.map((option) => (
                <CopyTaskItemOption
                    key={option.value}
                    option={option}
                    formData={formData}
                    handleMethodChange={handleMethodChange}
                />
            ))}
            {formData.copyMethod === 'organizationToOrganization' && (
                <OrganizationToOrganizationForm
                    formData={formData}
                    handleChange={handleChange}
                    organizations={organizations}
                    projects={projects}
                />
            )}
            {formData.copyMethod === 'projectToProject' && (
                <ProjectToProjectForm
                    formData={formData}
                    handleChange={handleChange}
                    projects={projects}
                />
            )}
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
};

export default CopyTaskItemForm;

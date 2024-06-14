import styles from '../styles.module.css'

export const CopyTaskItemOption = ({ option, formData, handleMethodChange }) => {
    return (
        <div
            className={`${styles.field} ${formData.copyMethod === option.value ? styles.active : ''}`}
            onClick={() => handleMethodChange(option.value)}
        >
            <label>
                <strong>{option.label}</strong>
            </label>
            <p>{option.description}</p>
        </div>
    );
};

export const OrganizationToOrganizationForm = ({ organizations, projects, formData, handleChange }) => (
    <div className={styles.nestedForm}>
        <label htmlFor="targetOrganization">Select Target Organization</label>
        <select
            name="targetOrganization"
            value={formData.targetOrganization}
            onChange={handleChange}
            className={styles.select}
        >
            <option value="">--Select Organization--</option>
            {organizations.map(organization => (
                <option key={organization.id} value={organization.id}>{organization.name}</option>
            ))}
        </select>
        <label htmlFor="orgTargetProject">Select Target Project</label>
        <select
            name="orgTargetProject"
            value={formData.orgTargetProject}
            onChange={handleChange}
            className={styles.select}
        >
            <option value="">--Select Project--</option>
            {projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
            ))}
        </select>
    </div>
);

export const ProjectToProjectForm = ({ projects = [], formData, handleChange }) => (
    <div className={styles.nestedForm}>
        <label htmlFor="targetProject">Select Target Project</label>
        <select
            name="targetProject"
            value={formData.targetProject}
            onChange={handleChange}
            className={styles.select}
        >
            <option value="">--Select Project--</option>
            {projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
            ))}
        </select>
    </div>
);
import React, { useEffect, useState } from 'react'
import { adoAPI } from '../../utils'
import { useAuthContext } from '../../contexts/authContext'

import styles from './styles.module.css'

function TemplateDetails({ templateId }) {
    const { user } = useAuthContext()
    const [templateDetails, setTemplateDetails] = useState(null)

    useEffect(() => {
        const getTemplateDetails = async () => {
            try {
                const response = await adoAPI.getTemplateById(templateId, user.token.value)
                console.log('TemplateDetails:', response.data)
                setTemplateDetails(response.data)
            } catch (error) {
                console.error('Failed to fetch template details:', error)
            }
        }

        getTemplateDetails()
    }, [templateId])

    const { name, type, fields, relations, description } = templateDetails || {};

    return (
        <div className={`${styles["template"]} ${styles["flat-ui"]}`}>
            <div className={styles["template-header"]}>
                <h2>{name}</h2>
                <p>Type: {type}</p>
                <p>Description: {description}</p>
            </div>

            <h3>Fields</h3>
            <ul>
                {fields?.map((field) => (
                    <li key={field.name}>
                        <strong>{field.name}</strong>: {field.type} {field.required ? '(required)' : ''}
                    </li>
                ))}
            </ul>

            <h3>Relations</h3>
            <ul>
                {relations?.map((relation) => (
                    <li key={relation.name}>
                        <strong>{relation.name}</strong>: {relation.type} {relation.required ? '(required)' : ''}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TemplateDetails
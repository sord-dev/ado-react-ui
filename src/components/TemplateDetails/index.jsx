import React, { useEffect, useState } from 'react'
import { adoAPI } from '../../utils'
import { useAuthContext } from '../../contexts/authContext'

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

    return (
        <div>{templateDetails?.name}</div>
    )
}

export default TemplateDetails
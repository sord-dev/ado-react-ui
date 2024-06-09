import React, { useState } from 'react';
import styles from './styles.module.css';

const MultiStepForm = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const renderStep = () => {
        const { component: StepComponent, fields } = steps[currentStep];
        return (
            <StepComponent
                fields={fields}
                formData={formData}
                handleInputChange={handleInputChange}
            />
        );
    };

    return (
        <form onSubmit={handleSubmit} className={styles['multi-step-form']}>
            <div className={styles['multi-step-form-content']}>
                {renderStep()}
            </div>
            <div>
                {currentStep > 0 && (
                    <button type="button" onClick={handlePreviousStep}>
                        Previous
                    </button>
                )}
                {currentStep < steps.length - 1 && (
                    <button type="button" onClick={handleNextStep}>
                        Next
                    </button>
                )}
                {currentStep === steps.length - 1 && (
                    <button type="submit">Submit</button>
                )}
            </div>
        </form>
    );
};

export default MultiStepForm;
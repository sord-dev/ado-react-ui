import React from 'react';

const StepOne = ({ fields, formData, handleInputChange }) => (
  <div>
    <label>
      {fields[0].label}
      <input
        name={fields[0].name}
        value={formData[fields[0].name] || ''}
        onChange={handleInputChange}
      />
    </label>

    <label>
      {fields[1].label}
      <input
        name={fields[1].name}
        value={formData[fields[1].name] || ''}
        onChange={handleInputChange}
      />
    </label>
  </div>
);

const StepTwo = ({ fields, formData, handleInputChange }) => (
  <div>
    <label>
      {fields[0].label}
      <input
        name={fields[0].name}
        value={formData[fields[0].name] || ''}
        onChange={handleInputChange}
      />
    </label>
  </div>
);

const exampleSteps = [
  {
    component: StepOne,
    fields: [{ name: 'firstName', label: 'First Name' }, { name: 'secondName', label: 'Second Name' }],
  },
  {
    component: StepTwo,
    fields: [{ name: 'lastName', label: 'Last Name' }],
  },
];

export { exampleSteps }
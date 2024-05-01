import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];

const Try = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true}
        placeholder="Search for an option..."
      />
      {selectedOption && (
        <div>
          Selected Option: {selectedOption.label} (Value: {selectedOption.value})
        </div>
      )}
    </div>
  );
};

export default Try;

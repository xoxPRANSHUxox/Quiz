import React from 'react';
import ForMain from './ForMain';

function CreateNewForm() {
  return (
    <div>
      {/* Title for the form, styled with Tailwind CSS classes */}
      <h1 className='text-5xl font-bold m-10 create-new-form-text fade-in-HalfSec'>Create New Quiz</h1>

      {/* Render the ForMain component, which likely contains the form or additional content */}
      <ForMain/>
    </div>
  );
}

export default CreateNewForm;

// Importing necessary dependencies from React and the CreateNewForm component
import React, { useState } from 'react';
import CreateNewForm from '../CreateNew/CreateNewForm';

export default function CreateNew() {
    // useState hook to manage the visibility of the model
    const [showModel, setShowModel] = useState(true);

    // Function to handle closing the model
    const handleModel = () => {
        setShowModel(false); // Set the model to not be shown (i.e., close it)
    };

    return (
        <div>
            {/* Conditionally render the CreateNewModel or CreateNewForm based on showModel */}
            <div>
                {showModel ? <CreateNewModel handleModel={handleModel} /> : <CreateNewForm />}
            </div>
        </div>
    );
}

// Component for the initial model display with a button to switch to the form
function CreateNewModel({ handleModel }) {
    return (
        // Centering the button in the middle of the screen with flexbox
        <div className='flex w-screen h-[50vh] justify-center items-center fade-in-HalfSec'>
            <button
                className="new-morphism text-lg font-bold py-4 text-[#B43F3F] rounded-full border border-[#f9f9f9] hover:text-[#173B45] px-4 flex"
                onClick={handleModel} // Trigger the handleModel function when clicked
            >
                MCQ BASED QUESTIONS
            </button>
        </div>
    );
};

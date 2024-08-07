import React,{useState} from 'react'
import CreateNewForm from '../CreateNew/CreateNewForm'
export default function CreateNew() {
    const [showModel, setShowModel] = useState(true);
    const handleModel = () => {
        setShowModel(false);
      };
  return (
    <div>
       <div>
       {showModel ? <CreateNewModel handleModel={handleModel} /> : <CreateNewForm />}
       </div>
    </div>
  )
}
function CreateNewModel({ handleModel }) {
  return (
    <div className='flex w-screen h-[50vh] justify-center items-center fade-in-HalfSec'>
      <button
        className="new-morphism text-lg font-bold py-4 text-[#B43F3F] rounded-full border border-[#f9f9f9] hover:text-[#173B45] px-4 flex"
        onClick={handleModel}
      >
        MCQ BASED QUESTIONS
      </button>
    </div>
  );
};

  
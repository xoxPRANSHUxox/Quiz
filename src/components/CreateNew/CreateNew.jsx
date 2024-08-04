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
    <div className='flex w-screen h-[50vh] justify-center items-center'>
      <button
        className="text-lg font-bold py-4 text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] px-4 flex focus:ring-4 focus:ring-gray-100"
        onClick={handleModel}
      >
        MCQ BASED QUESTIONS
      </button>
    </div>
  );
};

  
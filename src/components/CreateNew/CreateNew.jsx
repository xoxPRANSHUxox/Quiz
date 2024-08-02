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
    <div className='flex w-screen h-screen justify-center items-center'>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleModel}
      >
        MCQ BASED QUESTIONS
      </button>
    </div>
  );
};

  



//   return (
    
//   );
// };

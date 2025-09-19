import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const ConfirmVote = () => {
    const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'yes') {
      setTimeout(() => {
       navigate('/hold-to-vote');
      }, 500);
    } else {
      setTimeout(() => {
        toast.error('ভোট বাতিল করা হয়েছে।');
        navigate('/');
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A0E6E4] to-[#C6E6B8] flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Question */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-medium text-black">
            আপনি সিউর এই পার্টীকে ভোট দিবেন?
          </h1>
        </div>
        
        {/* Buttons Container */}
        <div className="bg-transparent border-2 border-teal-400 rounded-lg p-8">
          <div className="flex justify-center space-x-8">
            {/* YES Button */}
            <button
              onClick={() => handleOptionSelect('yes')}
              className={`px-12 py-4 bg-gray-200 hover:bg-gray-300 border-2 border-gray-400 rounded-md font-medium text-black transition-all duration-200 ${
                selectedOption === 'yes' ? 'bg-gray-300 border-gray-500' : ''
              }`}
            >
              YES
            </button>
             <Toaster />
            {/* NO Button */}
            <button
              onClick={() => handleOptionSelect('no')}
              className={`px-12 py-4 bg-gray-200 hover:bg-gray-300 border-2 border-gray-400 rounded-md font-medium text-black transition-all duration-200 ${
                selectedOption === 'no' ? 'bg-gray-300 border-gray-500' : ''
              }`}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmVote;
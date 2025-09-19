import React, { useState } from 'react';
import team1 from '../images/team1.png';
import team2 from '../images/team2.png';
import team3 from '../images/team3.png';
import face from '../images/face.png';
import { useNavigate } from 'react-router';


const FaceVerification = () => {
  const [voterId, setVoterId] = useState('');
  const [selectedParty, setSelectedParty] = useState('');

  const parties = [
    {
      id: 'jamat',
      name: 'Jamat-E-Islam',
      votes: 1565456,
      color: 'bg-trasparent',
      logo: team1
    },
    {
      id: 'ncp',
      name: 'NCP',
      votes: 15495,
      color: 'bg-trasparent',
      logo: team2
    },
    {
      id: 'bjp',
      name: 'B Jatiya Party',
      votes: 1895,
      color: 'bg-trasparent',
      logo: team3
    },
    {
      id: 'bnp',
      name: 'Bangladesh National Party',
      votes: 895,
      color: 'bg-trasparent',
      logo: team3
    },
    {
      id: 'ap',
      name: 'AP Party',
      votes: 195,
      color: 'bg-trasparent',
      logo: team3
    }
  ];

  const navigate = useNavigate();

  const handleVote = (partyId) => {
    setSelectedParty(partyId);
  };

  const handleNext = () => {
    navigate('/vote-panel');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A0E6E4] to-[#C6E6B8] p-4">
      <div className="max-w-md mx-auto bg-transparent border-1 border-teal-400 rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-lg font-medium text-black mb-4">
           ভোট দেওয়ার জন্য আপনার ফেস ভেরিফাই করুন
          </h1>
          
          {/* Face Verification */}
          <div className="mb-4">
           <img className='mx-auto' src={face} alt="" />
          </div>
          
          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-50 py-3 bg-green-500 border border-black/50 hover:bg-green-600 text-black font-medium rounded-md cursor-pointer transition-colors duration-200"
          >
           Verify your face
          </button>
        </div>
        
        {/* Divider */}
        <div className="border-b border-gray-400 mb-4"></div>
        
        {/* Voting Time Notice */}
        <div className="text-center mb-4">
          <p className="text-black font-medium">You can Vote only 10:00 AM to 4:00PM</p>
        </div>
        
        {/* Party List */}
        <div className="space-y-2">
          {parties.map((party) => (
            <div
              key={party.id}
              onClick={() => handleVote(party.id)}
              className={`flex items-center justify-between p-3 rounded-md cursor-pointer border-2 transition-all duration-200 ${
                selectedParty === party.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-black/50 hover:border-gray-400'
              } ${party.color}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                 <img src={party.logo}  className="w-8 h-8" alt="" />
                </div>
                <span className="text-black font-medium">{party.name}</span>
              </div>
              <div className="text-black font-medium">
                : {party.votes.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaceVerification;
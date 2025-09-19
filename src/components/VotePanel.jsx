import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const VotePanel = () => {
  const [selectedParty, setSelectedParty] = useState('');

  const parties = [
    { id: 'jamat', name: 'Jamat-E-Islam', bengaliName: 'জামাত-ই-ইসলাম' },
    { id: 'bnp', name: 'BNP', bengaliName: 'বিএনপি' },
    { id: 'ncp', name: 'NCP', bengaliName: 'এনসিপি' },
    { id: 'ab', name: 'AB', bengaliName: 'এবি' },
    { id: 'awamilig', name: 'AWAMILIG', bengaliName: 'আওয়ামীলীগ' }
  ];

  const handlePartySelect = (partyId) => {
    setSelectedParty(partyId);
  };

  const handleNext = () => {
    if (selectedParty) {
      const selected = parties.find(p => p.id === selectedParty);
       toast.success(`আপনি ${selected.bengaliName} নির্বাচন করেছেন`)
    } else {
      toast.error('অনুগ্রহ করে একটি দল নির্বাচন করুন');
    }
  };

  const getSelectedPartyName = () => {
    if (selectedParty) {
      const party = parties.find(p => p.id === selectedParty);
      return party ? party.bengaliName : '';
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A0E6E4] to-[#C6E6B8] p-4">
      <div className="max-w-md mx-auto bg-transparent border border-teal-400 p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-base font-medium text-black leading-relaxed">
            আপনার পছন্দের প্রার্থীর ভোট দিতে<br />
            নিচের অপশন সিলেক্ট করে next button<br />
            ক্লিক করুন
          </h1>
        </div>
         <Toaster />
        
        {/* Divider */}
        <div className="border-b border-teal-600 mb-6"></div>
        
        {/* Party Selection List */}
        <div className="space-y-3 mb-8">
          {parties.map((party) => (
            <div
              key={party.id}
              className="flex items-center justify-between p-4 bg-teal-100 border border-teal-300 rounded-md"
            >
              <span className="text-black font-medium">{party.name}</span>
              <div className="flex items-center">
                {party.id === 'jamat' && selectedParty === 'jamat' && (
                  <div className=" flex items-center justify-center mr-2">
                  
                  </div>
                )}
                <button
                  onClick={() => handlePartySelect(party.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedParty === party.id 
                      ? 'border-green-400 bg-green-400' 
                      : 'border-gray-400 bg-white'
                  }`}
                >
                  {selectedParty === party.id && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Note */}
        <div className="mb-6">
          <p className="text-sm text-black">
            <span className="font-medium">Note:</span> আপনি আপনার-{getSelectedPartyName() || '................'} ভোট দেওয়ার জন্য নির্বাচন করেছেন
          </p>
        </div>
        
        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            className="px-12 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-md transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotePanel;
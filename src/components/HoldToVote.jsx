import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router';

const HoldToVote = () => {
    const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startProgress = useCallback(() => {
    if (showSuccess) return;
    
    setIsHolding(true);
    
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2; 
        
        if (newProgress >= 100) {
          clearInterval(intervalRef.current);
          setShowSuccess(true);
          setIsHolding(false);
          return 100;
        }
        
        return newProgress;
      });
    }, 100); 
  }, [showSuccess]);

  const stopProgress = useCallback(() => {
    setIsHolding(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    
    timeoutRef.current = setTimeout(() => {
      setProgress(0);
    }, 200);
  }, []);

  const resetVote = () => {
    setProgress(0);
    setShowSuccess(false);
    setIsHolding(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

    const handleMouseDown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    startProgress();
  };

  const handleMouseUp = () => {
    stopProgress();
  };

  const handleMouseLeave = () => {
    stopProgress();
  };

  
  const handleTouchStart = (e) => {
    e.preventDefault();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    startProgress();
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    stopProgress();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A0E6E4] to-[#C6E6B8] flex flex-col items-center justify-center p-4">
      {!showSuccess ? (
        <>
          {/* Processing Section */}
          <div className="text-center mb-12">
            <h1 className="text-xl font-medium text-black leading-relaxed mb-8">
              আপনার পছন্দের পার্থীকে ভোট দিতে নিচের<br />
              প্রার্থীতে ৫ সেকেন্ড হোল্ড করে রাখুন
            </h1>
            
            {/* Progress Circle */}
            <div className="relative inline-flex items-center justify-center">
              <div 
                className={`w-32 h-32 rounded-full flex items-center justify-center border-8 border-gray-300 cursor-pointer transition-all duration-200 select-none ${
                  isHolding ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                  background: `conic-gradient(#22c55e 0deg, #3b82f6 ${progress * 1.8}deg, #22c55e ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
                }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pointer-events-none">
                  <span className="text-black font-medium text-lg">Jamat</span>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className={`text-black font-medium transition-opacity duration-200 ${
                  progress > 0 ? 'opacity-100' : 'opacity-50'
                }`}>
                  {Math.round(progress)}%
                </div>
              </div>
              
              {/* Hold instruction */}
              <div className="absolute -bottom-20  left-1/2 transform -translate-x-1/2 text-center">
                <div className={`text-sm  transition-colors duration-200 ${
                  isHolding ? 'text-blue-600 font-medium' : 'text-gray-600'
                }`}>
                  {isHolding ? 'ধরে রাখুন...' : 'ক্লিক করে ধরে রাখুন'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-md border-b mt-10 border-teal-600 mb-8"></div>
        </>
      ) : (
        /* Success Section */
        <div className="text-center">
          <h1 className="text-xl font-medium text-black mb-12">
            আপনার ভোট টি সফলভাবে সম্পন্ন হয়েছে
          </h1>
          
          {/* Success Checkmark */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-green-500 bg-white flex items-center justify-center animate-pulse">
              <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Reset Button for Demo */}
          <button
            onClick={()=> navigate('/')}

            className="px-6 py-2 mx-auto block bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200"
          >
            হোম পেজে ফিরে যান
          </button>
        </div>
      )}
    </div>
  );
};

export default HoldToVote;
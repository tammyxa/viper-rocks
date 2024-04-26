import React from "react";

interface TutorialModalProps{
    isVisible: boolean;
    onClose: () => void;
}

const TutorialModal = ({isVisible, onClose}: TutorialModalProps) => {
    if (!isVisible) return null;


    return (
        
        <div className = "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button className = "text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-white p-2 rounded">
                    <div className="p-6"> 
                        <h4 className="text-xl font-semibold text-gray-900 mb-5">THIS IS FOR ADMIN VIEW ONLY!!</h4>
                        <p>ViperRocks! team has created an easier view into the database. We have also included multiple statistics that use the rockCount under userMarks provided from the database if ever needed. Enjoy!</p>
                    </div>
                </div>
            </div>
        </div>
            
       
    );
}

export default TutorialModal;
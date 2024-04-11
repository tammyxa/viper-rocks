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
                        <h4 className="text-xl font-semibold text-gray-900 mb-5">Tutorial Shtuff</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sunt reprehenderit, mollitia sint architecto voluptatem officia eaque, aliquam nemo praesentium illum adipisci ut, sapiente veritatis dolorem cupiditate odio? Non, earum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quia ducimus rerum adipisci voluptatibus inventore corporis, sapiente tempore commodi illum similique natus alias, sequi nesciunt voluptas aspernatur ipsum molestias nulla.</p>
                    </div>
                </div>
            </div>
        </div>
            
       
    );
}

export default TutorialModal;
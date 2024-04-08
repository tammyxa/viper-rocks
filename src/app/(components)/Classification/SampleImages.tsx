import React from "react";


const SampleImages: React.FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-white p-2 rounded">
                    <div className="p-6"> 
                        <h4 className="text-xl font-semibold text-gray-900 mb-5">Classification References</h4>
                        <img src={'./classificationSamples.png'} alt="Classification Reference" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SampleImages;

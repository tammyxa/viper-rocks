import React, { useState } from 'react';

const ScoutingForm = ({ onSubmit }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(selectedAnswer); // Use the provided onSubmit handler
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input
                        type="radio"
                        name="answer"
                        value=""
                        checked={!selectedAnswer}
                        onChange={handleAnswerChange}
                    />
                    None
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="answer"
                        value="Answer 1"
                        checked={selectedAnswer === 'Answer 1'}
                        onChange={handleAnswerChange}
                    />
                less than 50 
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="answer"
                        value="Answer 2"
                        checked={selectedAnswer === 'Answer 2'}
                        onChange={handleAnswerChange}
                    />
                    less than 100
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="answer"
                        value="Answer 3"
                        checked={selectedAnswer === 'Answer 3'}
                        onChange={handleAnswerChange}
                    />
                    less than 250
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="answer"
                        value="Answer 4"
                        checked={selectedAnswer === 'Answer 4'}
                        onChange={handleAnswerChange}
                    />
                    less than 500
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ScoutingForm;

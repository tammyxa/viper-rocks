import React from 'react';

const QuestionsPage = () => {
  const faqs = [
    {
      question: 'What is Viper Rocks?',
      answer: 'Viper Rocks is a space exploration organization dedicated to...',
    },
    {
      question: 'How can I join Viper Rocks?',
      answer: 'To join Viper Rocks, you can visit our "Join Us" page and follow the...',
    },
    {
      question: 'Do you offer educational programs?',
      answer: 'Yes, we have various educational programs aimed at inspiring the next...',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="questions-page-container">
      <section className="faqs-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add more sections or components as needed */}
    </div>
  );
};

export default QuestionsPage;

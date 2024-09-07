import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [step, setStep] = useState(1); // Tracks the current step in the form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State for tracking form submission

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (step === 1 && email) {
        setStep(2); // Move to name input after entering email
      } else if (step === 2 && name) {
        setStep(3); // Move to description input after entering name
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reload

    const templateParams = {
      email,
      name,
      description,
    };

    // Send the email using EmailJS
    emailjs.send('service_4u0p81m','template_z3nwywd', templateParams,'KNn_BbblQkasCsF9v')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setIsSubmitted(true);

        // Reset form after successful submission
        setEmail('');
        setName('');
        setDescription('');
        setStep(1); // Go back to the first step
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div>
      {/* Heading with Divider */}
      <div className="flex items-center mb-12">
        <h2 className="text-6xl font-bold text-white mr-8">Contact</h2>
        <div className="flex-grow border-t-4 border-white"></div>
      </div>
      
      {/* Main Contact Box */}
      <div className="min-h-screen bg-black flex items-center justify-center font-mono">
        <div className="w-full max-w-7xl h-[800px] border-4 border-white flex flex-col">
          {/* Command Prompt Top Bar */}
          <div className="bg-gray-800 flex justify-between items-center p-4 border-b-4 border-white">
            <span className="text-white text-lg">Command Prompt</span>
            <div className="flex space-x-2">
              <span className="h-4 w-4 bg-white rounded-full inline-block"></span>
              <span className="h-4 w-4 bg-white rounded-full inline-block"></span>
              <span className="h-4 w-4 bg-white rounded-full inline-block"></span>
            </div>
          </div>

          {/* Command Line Interface Box */}
          <div className="bg-black text-white p-8 flex-grow overflow-y-auto text-xl">
            {/* Email Input */}
            {step >= 1 && (
              <div className="mb-8">
                <p>C:\Users\> Enter your email:</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-black text-white border-none outline-none text-2xl p-2"
                  placeholder="me@gmail.com"
                  disabled={step !== 1}
                />
              </div>
            )}

            {/* Name Input */}
            {step >= 2 && (
              <div className="mb-8">
                <p>C:\Users\> Enter your name:</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-black text-white border-none outline-none text-2xl p-2"
                  placeholder="Bob Dylan"
                  disabled={step !== 2}
                />
              </div>
            )}

            {/* Description Input */}
            {step >= 3 && (
              <div className="mb-8">
                <p>C:\Users\> Enter a description:</p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-black text-white border-none outline-none text-2xl p-2"
                  placeholder="Type your message here..."
                  rows="6"
                />
              </div>
            )}

            {/* Submit Button */}
            {step === 3 && (
              <div className="text-center mt-8">
                <button
                  onClick={handleSubmit}
                  className="bg-white text-black px-6 py-2 text-xl font-bold rounded-lg">
                  Submit
                </button>
              </div>
            )}

            {/* Submission Confirmation */}
            {isSubmitted && (
              <div className="text-center text-green-500 mt-4">
                <p>Email sent successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';

// --- CHATBOT KNOWLEDGE BASE & LOGIC ---
const chatbotResponses = {
  // Key Responses based on VeloCity Website Content
  'hello': "Hi there! I'm Simu, the VeloCity assistant. I can help you with our simulation 'Features', 'Libraries', or finding the 'Free Trial'.",
  'trial': "Absolutely! We offer a 30-day Free Trial. Click the 'Start Your Free Trial' button in the Hero section to begin your simulation journey.",
  'feature': "VeloCity's key features include: 🚗 Detailed Vehicle Modeling, 🚦 Traffic Light Optimization, and 🗺️ GIS Map Integration for real-world accuracy.",
  'modeling': "We support comprehensive multimethod modeling! You can seamlessly combine road traffic with our Pedestrian, Rail, and Material Handling Libraries.",

  // Default Response
  'default': "I'm still learning the nuances of traffic theory! Could you please rephrase your question? I can help with 'Features,' 'Libraries,' or 'Demo' requests."
};

const getBotResponse = (userInput) => {
  const lowerInput = userInput.toLowerCase();
  
  if (lowerInput.includes('trial') || lowerInput.includes('price') || lowerInput.includes('demo')) {
    return chatbotResponses.trial;
  }
  if (lowerInput.includes('feature') || lowerInput.includes('what can it do') || lowerInput.includes('capability')) {
    return chatbotResponses.feature;
  }
  if (lowerInput.includes('library') || lowerInput.includes('model') || lowerInput.includes('combine')) {
    return chatbotResponses.modeling;
  }
  return chatbotResponses.default;
};

// --- REACT COMPONENT ---
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: chatbotResponses.hello }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scrolls to the bottom of the chat window on new message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newUserMessage = { sender: 'user', text: input.trim() };
    const botResponseText = getBotResponse(input.trim());
    
    // Add user message immediately
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInput('');

    // Simulate a brief delay before bot responds
    setTimeout(() => {
      const newBotMessage = { sender: 'bot', text: botResponseText };
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 800);
  };

  // Inline styles for a fixed bottom-right chat window
  const chatWindowStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '320px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
  };

  const headerStyle = {
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const messageAreaStyle = {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '10px',
  };

  const inputAreaStyle = {
    padding: '10px',
    borderTop: '1px solid #eee',
  };

  const toggleButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1001,
  };

  const messageStyle = (sender) => ({
    marginBottom: '8px',
    padding: '8px 12px',
    borderRadius: '15px',
    maxWidth: '80%',
    wordWrap: 'break-word',
    alignSelf: sender === 'bot' ? 'flex-start' : 'flex-end',
    backgroundColor: sender === 'bot' ? '#f1f1f1' : '#007bff',
    color: sender === 'bot' ? '#333' : 'white',
    textAlign: sender === 'bot' ? 'left' : 'right',
    display: 'block',
    marginLeft: sender === 'bot' ? '0' : 'auto',
    marginRight: sender === 'bot' ? 'auto' : '0',
  });

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        style={toggleButtonStyle} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? '✖' : '💬'}
      </button>

      {/* Chat Window */}
      <div style={chatWindowStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <span>Simu: VeloCity Assistant</span>
          <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }} onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>

        {/* Message Area */}
        <div style={messageAreaStyle}>
          {messages.map((msg, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={messageStyle(msg.sender)}>
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form style={inputAreaStyle} onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about features or trial..."
            style={{ width: 'calc(100% - 70px)', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button type="submit" style={{ width: '60px', padding: '8px', marginLeft: '5px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
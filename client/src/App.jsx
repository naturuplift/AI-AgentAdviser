import { useState, useCallback } from 'react';
import './App.css';
import Chat from './components/Chat';
import SearchBooks from './pages/ChatConversation';
// import { Outlet } from 'react-router-dom';

// import Navbar from './components/Navbar';

const App = () => {
  const [conversation, setConversation] = useState([{ text: 'Hi there! How may I help you?', role: 'assistant' }]);

  // sendMessage will now make an API call to your server, which will then interact with OpenAI
  const sendMessage = useCallback(async (userMessage) => {
    // Add the new user message to the conversation
    setConversation(prevMessages => [...prevMessages, { text: userMessage, role: 'user' }]);

    try {
      const response = await fetch('/api/openai/tech-stack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
        },
        body: JSON.stringify({ projectDescription: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { recommendation } = await response.json();
      console.log(recommendation); // Check the structure of the received data
      // Add the AI response to the conversation
      setConversation(prevMessages => [...prevMessages, { text: recommendation, role: 'assistant' }]);
    } catch (error) {
      console.error("Failed to get recommendation:", error);
      // Add an error response to the conversation
      setConversation(prevMessages => [...prevMessages, { text: 'Failed to get recommendation. Please try again.', role: 'assistant' }]);
    }
  }, []);

  return (
    <div className="App">
      <SearchBooks sendMessage={sendMessage} />
      <Chat conversation={conversation} />
    </div>
  );
};

export default App;
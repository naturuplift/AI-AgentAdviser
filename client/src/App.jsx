import { useState, useCallback } from 'react';
import './App.css';
import Chat from './components/Chat';
import SearchBooks from './pages/ChatConversation';
// import { Outlet } from 'react-router-dom';

// import Navbar from './components/Navbar';

const App = () => {
  const [conversation, setConversation] = useState([{ text: 'Hi there! How may I help you?', role: 'assistant' }]);

  const sendMessage = useCallback((newMessage) => {
    // Add the new user message to the conversation
    setConversation((prevMessages) => [...prevMessages, { text: newMessage, role: 'user' }]);
    
    // Here you would typically make an API call to get the response from the OpenAI agent
    // and then add the OpenAI agent's response to the conversation
    // For example purposes, let's just echo the user's message
    setConversation((prevMessages) => [...prevMessages, { text: `You said: ${newMessage}`, role: 'assistant' }]);
  }, []);

  return (
    <div className="App">
      <SearchBooks sendMessage={sendMessage} />
      <Chat conversation={conversation} />
    </div>
  );
};

export default App;

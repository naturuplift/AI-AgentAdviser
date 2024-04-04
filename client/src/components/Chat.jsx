// Chat.jsx
import { useEffect, useRef } from 'react';
import './Chat.css';

const Chat = ({ conversation}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the last message
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <div className="chat-container">
      <section className="conversation-container">
        {conversation.map((message, index) => (
          <article key={index} className={message.role === 'assistant' ? 'ai-message' : 'user-message'}>
            <p>{message.text}</p>
          </article>
        ))}
        <div ref={messagesEndRef} />
      </section>
      {/* Input form should be in a separate component or included here with fixed positioning */}
    </div>
  );
};

export default Chat;

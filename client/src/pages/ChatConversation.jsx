import { useState } from 'react';

const SearchBooks = ({ sendMessage }) => {
  const [input, setInput] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput(''); // Clear input field
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SearchBooks;
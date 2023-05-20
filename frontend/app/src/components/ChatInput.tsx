import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { TextField, Button } from '@mui/material';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <TextField
        label="Type your message"
        variant="outlined"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        fullWidth
        size="small"
      />
      <Button variant="contained" onClick={sendMessage} disabled={message.trim() === ''}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;

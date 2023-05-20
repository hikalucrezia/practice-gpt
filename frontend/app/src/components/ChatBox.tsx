import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ChatBox = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        // Here, you can implement the logic to send the message to the chat or perform any other action
        console.log(message);
    };

    return (
        <div>
            <TextField
                label="Type your message"
                variant="outlined"
                value={message}
                onChange={handleMessageChange}
            />
            <Button variant="contained" onClick={sendMessage}>
                Send
            </Button>
        </div>
    );
};

export default ChatBox;

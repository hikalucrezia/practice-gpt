import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatLog from './components/ChatLog';

interface ChatLogEntry {
  prompt: string;
  answer: string;
}

const App: React.FC = () => {
  const [chatLogs, setChatLogs] = useState<ChatLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (message.trim() !== '') {
      setIsLoading(true);
      try {
        const TIMEOUT_SECONDS = 30; // Set your desired timeout value in seconds

        // Send the message to the server using a GET request with a timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          controller.abort();
          console.error('Request timed out');
        }, TIMEOUT_SECONDS * 1000);

        const response = await fetch(`http://localhost:5001/?prompt=${encodeURIComponent(message)}`, {
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const newLog: ChatLogEntry = { prompt: message, answer: data.answer };
          setChatLogs([...chatLogs, newLog]);
        } else {
          // Handle error response from the server
          console.error('Failed to send message. Server returned status:', response.status);
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error occurred while sending message', error);
      }
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '98vh', width: '90vw', margin: 'auto' }}>
      <div style={{ flex: 1, overflowY: 'scroll' }}>
        <ChatLog chatLogs={chatLogs} isLoading={isLoading} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;

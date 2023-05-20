import React from 'react';
import { Paper, Typography, CircularProgress } from '@mui/material';

interface ChatLogProps {
    chatLogs: { prompt: string; answer: string }[];
    isLoading: boolean;
}

const ChatLog: React.FC<ChatLogProps> = ({ chatLogs, isLoading }) => {
    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            {chatLogs.map((log, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '10px',
                    }}
                >
                    <div
                        style={{
                            alignSelf: 'flex-end',
                            marginBottom: '5px',
                            backgroundColor: '#f5f5f5',
                            padding: '8px',
                            borderRadius: '8px',
                        }}
                    >
                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                            You:
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            {log.prompt}
                        </Typography>
                    </div>
                    <div
                        style={{
                            alignSelf: 'flex-start',
                            backgroundColor: '#cfd8dc',
                            padding: '8px',
                            borderRadius: '8px',
                        }}
                    >
                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                            Bot:
                        </Typography>
                        <Typography variant="body2">{log.answer}</Typography>
                    </div>
                </div>
            ))}
            {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <CircularProgress size={24} />
                </div>
            )}
        </Paper>
    );
};

export default ChatLog;

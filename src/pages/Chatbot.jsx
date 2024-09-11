import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment, Button } from 'semantic-ui-react';
import axios from 'axios';
import { FaComments } from 'react-icons/fa';
import '../assets/css/chatbot.css';
import chatbotIcon from '../assets/images/chatbot-icon.svg'; // Replace with your actual path

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleQuery = async (query, triggerNextStep) => {
        try {
            const res = await axios.post('https://solvelty-customer-support-chatbot.onrender.com', {
                question: query
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseMessage = res.data.response || 'No response available.';
            triggerNextStep({ value: responseMessage });
        } catch (error) {
            const errorMessage = 'Failed to get data, Please try again later.';
            triggerNextStep({ value: errorMessage });
        }
    };

    const FetchResponse = ({ steps, triggerNextStep }) => {
        const query = steps.query.value;
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            if (loading) {
                handleQuery(query, triggerNextStep).finally(() => setLoading(false));
            }
        }, [loading, query, triggerNextStep]);

        return null;
    };

    const steps = [
        {
            id: 'Greet',
            message: 'Hello, welcome to Solvety!',
            trigger: 'AskName'
        },
        {
            id: 'AskName',
            message: 'Please enter your name',
            trigger: 'waiting1'
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name'
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, how can I help you today?',
            trigger: 'query'
        },
        {
            id: 'query',
            user: true,
            trigger: 'fetching'
        },
        {
            id: 'fetching',
            message: 'Just a moment...',
            trigger: 'fetchResponse'
        },
        {
            id: 'fetchResponse',
            component: <FetchResponse />,
            waitAction: true,
            trigger: 'showResponse'
        },
        {
            id: 'showResponse',
            message: '{previousValue}',
            trigger: 'query'
        }
    ];

    useEffect(() => {
        if (isOpen) {
            const backButtonElement = document.querySelector('.dxwXms');
            if (backButtonElement) {
                backButtonElement.innerHTML = '';
                const backButton = document.createElement('button');
                backButton.innerHTML = '&larr;';
                backButton.style.background = 'transparent';
                backButton.style.border = 'none';
                backButton.style.fontSize = '24px';
                backButton.style.color = '#000';
                backButton.onclick = () => setIsOpen(false);
                backButtonElement.appendChild(backButton);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        const replaceBotIcon = () => {
            const chatbotIconElements = document.querySelectorAll('.ckBfbB');

            chatbotIconElements.forEach((chatbotIconElement) => {
                const existingImage = chatbotIconElement.querySelector('img');
                if (existingImage) {
                    chatbotIconElement.removeChild(existingImage);
                }

                const img = document.createElement('img');
                img.src = chatbotIcon;
                img.alt = 'chatbot';
                img.style.width = '40px';
                img.style.height = '40px';
                chatbotIconElement.appendChild(img);
            });
        };

        replaceBotIcon();

        const intervalId = setInterval(() => {
            replaceBotIcon();
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Button
                icon
                onClick={() => setIsOpen(!isOpen)}
                className={`custom-chatbot-button ${isOpen && 'hidden'} z-50 w-[70px] bg-white rounded-full p-3`}
                style={{ position: 'fixed', bottom: '50px', right: '20px' }}
            >
                <img src={chatbotIcon} alt="chatbot" />
            </Button>
            {isOpen && (
                <Segment
                    className="chatbot-container"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 1000
                    }}
                >
                    <div className="chatbot-content">
                        <ChatBot steps={steps} />
                    </div>
                </Segment>
            )}
        </div>
    );
};

export default Chatbot;

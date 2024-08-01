import React, { useEffect, useState, useRef } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment, Button } from 'semantic-ui-react';
import axios from 'axios';
import '../assets/css/chatbot.css';
import chatbotIcon from '../assets/images/chatbot-icon.svg'; 
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([]); // Store messages here
    const chatContainerRef = useRef(null); // Reference to the chat container
    const [showChatbot, setShowChatbot] = useState(false);
    const [loading, setLoading] = useState(true);

    // api for the chatbot
    const chatbotApiKey= import.meta.env.VITE_CHATBOT_API_KEY


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
        // Scroll to bottom when messages change
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages]);

    useEffect(() => {
        if (showChatbot) {
            const backButtonElement = document.querySelector('.dxwXms');
            if (backButtonElement) {
                backButtonElement.innerHTML = '';
                const backButton = document.createElement('button');
                backButton.innerHTML = '&larr;';
                backButton.style.background = 'transparent';
                backButton.style.border = 'none';
                backButton.style.fontSize = '24px';
                backButton.style.color = '#000';
                backButton.onclick = () => {
                    setIsOpen(false);
                    setShowChatbot(false);
                };
                backButtonElement.appendChild(backButton);
            }
        }
    }, [showChatbot]);

    return (
        <div>
            <Button
                icon
                onClick={() => setIsOpen(true)}
                className={`custom-chatbot-button ${isOpen && 'hidden'} z-50 w-[70px] bg-white rounded-full p-3`}
                style={{ position: 'fixed', bottom: '50px', right: '20px' }}
            >
                <img src={chatbotIcon} alt="chatbot" />
            </Button>

            {(isOpen && !showChatbot) &&
                        <div className='chat-bot-initial fixed bottom-[70px] right-[20px] bg-white flex flex-col justify-center max-h-[80%] w-[90%] sm:w-[350px] z-50 px-10 py-10 items-center gap-9 rounded shadow-2xl'>
                                <div className='text-[#BA53E1] items-start self-start relative  top-5'
                                    onClick={() => setIsOpen(false)}>
                                    <IoArrowBackSharp size={'2rem'} className='cursor-pointer  relative h-[20px]  transition-all duration-200 hover:right-[5px]' />
                                </div>
                                <h2 className='text-[#8E5DF5] text-[18px] sm:text-[24px] h-[70px]'>Your Assistant is Ready</h2>
                                <img src={chatbotIcon}
                                    alt='chatbot icon'
                                    className='w-[106px] h-[166px] sm:w-[176px] sm:h-[166px]' />
                                <Button onClick={() => setShowChatbot(true)}
                                    className='bg-[#BA53E1] text-white text:[16px] sm:text-[20px] rounded-[10px] shadow-[0px_3px_3px_0px_#00000040] w-[55vw] sm:w-[200px] p-2 flex items-center relative hover:top-[-2px] transition-top'>
                                    <p className='m-auto'>Continue</p> <IoArrowForward className='ml-auto text-black' size={'1.5rem'} />
                                </Button>
                            </div>
               
            }

            {isOpen && showChatbot &&
                <Segment
                    className="chatbot-container"
                    style={{
                        position: 'fixed',
                        bottom: '10px',
                        right: '20px',
                        zIndex: 1000,
                    }}
                >
                    <div
                        className="chatbot-content"
                        ref={chatContainerRef}
                        style={{ overflowY: 'auto', flex: 1 }}
                    >
                        <ChatBot steps={steps}
                            botAvatar={chatbotIcon} />
                    </div>
                </Segment>
            }
        </div>
    );
};

export default Chatbot;

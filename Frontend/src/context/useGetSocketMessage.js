import React, { useEffect } from 'react';
// Import the socket context to listen for socket events
import { useSocketContext } from './SocketContext';
// Import the Zustand store for managing conversation state
import useConversation from '../zustand/useConversation';
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
    // Destructure the socket instance from the socket context
    const { socket } = useSocketContext();
    
    // Destructure messages and setMessage from the Zustand store
    const { messages, setMessage } = useConversation();
    
    // Use useEffect to listen to incoming socket messages and update the messages state
    useEffect(() => {
        // Listen for the 'newMessage' event from the socket server
        socket.on('newMessage', (newMessage) => {
        // create sound notification 
        const notification = new Audio(sound);
        notification.play();


            // When a new message is received, update the message list
            // Spread the existing messages and append the new message to create a new array
            setMessage([...messages, newMessage]);
        });
        
        // Clean up: Remove the 'newMessage' listener when the component unmounts
        return () => {
            socket.off("newMessage");
        };
    }, [socket, messages, setMessage]); // Dependency array to re-run if socket, messages, or setMessage changes
};

export default useGetSocketMessage;

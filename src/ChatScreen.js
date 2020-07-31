import React, { useState } from "react";
import Chats from "./Chats";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages ] = useState([
        {
            name: 'Jarnail',
            image: 'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg',
            message: 'Whats up :)',
        },
        {
            name: 'Jarnail',
            image: 'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg',
            message: 'Gud nite',
        },
        {
            message:"hey! how are you boby",
        },

    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">You matched with jarnail</p>
            {messages.map((message) => (
                message.name? (
                    <div className="chatScreen_message">
                    <Avatar className="chat_image" src={message.image} alt={message.name}  />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ):(
                    <div className="chatScreen_message">
                    
                    <p className="chatScreen_textUser">{message.message}</p>
                </div>
                )
                

            ))}
            
    <form className="chatScreen_input">
        <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        className="chatScreen_inputField" placeholder="Type a message" type="text" />
        <button onClick={handleSend} type="submit" className="chatScreen_inputButton">Send</button>
    </form>
</div>
        
    );
}



export default ChatScreen;
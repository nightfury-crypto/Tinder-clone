import React, {Link} from "react";
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
    
    <div className="chats">
        
        <Chat
            name="Jarnail"
            message="Kuta!"
            timestamp="15 seconds ago"
            profilePic="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"
        />
        <Chat
            name="Karnail"
            message="Gudnite!"
            timestamp="20 seconds ago"
            profilePic="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"
        />
        <Chat
            name="Nirmala"
            message="Moti!"
            timestamp="59 seconds ago"
            profilePic="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"
        />
        <Chat
            name="Darshan"
            message="Daddy ji!"
            timestamp="1 minutes ago"
            profilePic="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"
        />
    </div>
    
    );
}


export default Chats;
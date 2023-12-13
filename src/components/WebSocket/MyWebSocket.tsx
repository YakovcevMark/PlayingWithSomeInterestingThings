import React, {ChangeEvent, useEffect, useState} from 'react';

const MyWebSocket:React.FC = () => {
    const [message,setMessage] = useState("")
    const [messages,setMessages] = useState<string[]>([])
    const [socket,setSocket] = useState<null | WebSocket>(null )
    useEffect(() => {
        // const socket = new WebSocket("wss://social-network.samuraijs.com/handlers/chatHandler.ashx")
        const socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
        setSocket(socket);
        //@ts-ignore
        window.socket = socket

        socket.onmessage = (e) => {
            console.log(e.data)
            setMessages(messages => [e.data,...messages])
        }

    },[])
    console.log(socket?.readyState)
    const setMessageHandler  = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }
    const sendMessageHandler = () => {
        console.log(`wtf ${socket!.OPEN}`)
        socket!.send(message)
    }
    return (
        <>
            <textarea value={message} onChange={setMessageHandler}></textarea>
            <button onClick={sendMessageHandler}>Send</button>
            {messages.map(m => <div>{m}</div>)}
        </>
    );
};

export default MyWebSocket;
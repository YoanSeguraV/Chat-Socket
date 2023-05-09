import {useState,useEffect} from 'react'
import ChatBar from '../Components/ChatBar'
import ChatBody from '../Components/ChatBody'
import ChatFooter from '../Components/ChatFooter'

function Chat({socket}) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);
  return (
    <div className='container'>
        <div className="row">
        <div className="col-2">
      <ChatBar socket={socket}/>
      </div>
      <div className='col-10'>
      <ChatBody messages={messages}/>
      <ChatFooter socket={socket}/>
      </div>
      </div>
    </div>
  )
}

export default Chat

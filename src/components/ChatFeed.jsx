import MyMessage from "./MyMessage"
import MessageForm from "./MessageForm"
import TheirMessage from "./TheirMessage"


const ChatFeed = (props)=> {
 const {chats, activeChat, userName, messages} = props

 const chat = chats && chats[activeChat]
 console.log(chat,activeChat, userName,messages )

 const renderMessages = ()=> {
  const keys = Object.keys(messages)
 

  // eslint-disable-next-line array-callback-return
  return keys.map((key,index) => {
   const message = messages[key]
   const lastMesssageKey = index === 0 ? null : keys[index - 1]
   const isMyMessage = userName === message.sender.username

   return (
    <div key = {`msg_${index}`} style={{width: '100%'}}>
       <div className="message-block">
        {
         isMyMessage ? 
         <MyMessage message={message} /> :
         <TheirMessage message={message} lastMessage={messages[lastMesssageKey]} />
        }
       </div>
       <div className="read-receipts" style ={{marginRight: isMyMessage ? "18px" : "0px", marginLeft: isMyMessage? "0px" : "16px"}}>
        <div className="chat-subtitle">
          {chat.people.map((person)=> `${person.person.username}`)}
        </div>
        {renderMessages()}
        <div style = {{ height: "100px"}}></div>
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
       </div>

    </div>
   )
  })
 }

 renderMessages()
 if(!chat) return "No Chats Avalaible"
  return(
   <div className="chat-feed">
      <div className = "chat-title-container">
        <div className="chat-title">{chat?.title}</div>
      </div>
   </div>
  )
}


export default ChatFeed
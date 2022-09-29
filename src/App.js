import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from './components/ChatFeed';

const App = () => {
	return (
		<ChatEngine
			height='100vh'
			projectID='da1597e0-9aa8-49f8-b3b4-4569afbe1d5d'
			userName='messi'
			userSecret='Messi'
			renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
		/>
	);
};

export default App;

import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';


import "./App.css";

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      // size of app
      height="100vh"
      projectID="458a3f3c-8c07-417d-ba34-d57472829b12"
      userName={localStorage.getItem('username')}
      // password
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;

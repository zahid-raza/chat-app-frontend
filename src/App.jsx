import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} exact />
      </div>
    </ChatProvider>
  );
}

export default App;
